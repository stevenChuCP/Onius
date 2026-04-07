import SevenZip from '7z-wasm';
import wasmUrl from '7z-wasm/7zz.wasm?url';

let sevenZipInstance = null;

/**
 * Initializes or returns existing sevenZip instance.
 * Updates print callbacks to pipe stdout/stderr to our custom logs.
 */
async function getSevenZip(onLog) {
    if (!sevenZipInstance) {
        sevenZipInstance = await SevenZip({
            locateFile: (path) => {
                if (path.endsWith('.wasm')) return wasmUrl;
                return path;
            },
            print: (text) => {
                if (onLog) onLog(text + '\n');
            },
            printErr: (text) => {
                if (onLog) onLog('ERROR: ' + text + '\n');
            }
        });
    } else {
        // Update callback for existing instance
        sevenZipInstance.print = (text) => { if (onLog) onLog(text + '\n'); };
        sevenZipInstance.printErr = (text) => { if (onLog) onLog('ERROR: ' + text + '\n'); };
    }
    return sevenZipInstance;
}

/**
 * Helper to get all files in a virtual directory recursively.
 */
function getFilesRecursively(FS, dir) {
    let results = [];
    const entries = FS.readdir(dir).filter(e => e !== '.' && e !== '..');

    for (const entry of entries) {
        const fullPath = `${dir}/${entry}`;
        const stat = FS.stat(fullPath);
        if (FS.isDir(stat.mode)) {
            results = results.concat(getFilesRecursively(FS, fullPath));
        } else {
            results.push({
                name: fullPath.replace(dir + '/', ''), // clean root path
                data: FS.readFile(fullPath)
            });
        }
    }
    return results;
}

export async function extractArchive(fileData, fileName, password, onLog) {
    const sz = await getSevenZip(onLog);
    const FS = sz.FS;

    const extractDir = '/extract_' + Date.now();

    // Clean up previous input file if it exists
    try { FS.unlink(fileName); } catch (e) { }

    FS.mkdir(extractDir);

    // Write archive into memory
    FS.writeFile(fileName, fileData);

    // Setup extraction command
    const args = ['x', fileName, `-o${extractDir}`];
    if (password) {
        args.push(`-p${password}`);
    }
    args.push('-y'); // yes to all queries

    onLog(`> 7z ${args.join(' ')}\n`);

    // Execute
    try {
        sz.callMain(args);
    } catch (e) {
        // Emscripten simulates C++ exit() by throwing an exception.
        // We only throw a real error if the exit status is NOT 0.
        if (e.name === 'ExitStatus' && e.status !== 0) {
            throw new Error(`Extraction failed with exit status ${e.status}`);
        } else if (e.name !== 'ExitStatus' && e !== 0 && (!e.message || !e.message.includes('0'))) {
            throw new Error(`Execution error: ${e.message || JSON.stringify(e) || String(e)}`);
        }
    }

    // Read extracted files
    const extractedFiles = getFilesRecursively(FS, extractDir);

    // Cleanup virtual memory
    try { FS.unlink(fileName); } catch (e) { }

    return extractedFiles;
}

export async function compressFiles(filesMap, format, password, onLog) {
    const sz = await getSevenZip(onLog);
    const FS = sz.FS;

    const outFilename = `output.${format}`;
    try { FS.unlink(outFilename); } catch (e) { }

    const fileNamesToCompress = [];

    // Write all input files to memory
    for (const [name, data] of Object.entries(filesMap)) {
        try {
            // Need to create folder paths in FS if they exist
            if (name.includes('/')) {
                const parts = name.split('/');
                let cur = '';
                for (let i = 0; i < parts.length - 1; i++) {
                    cur += (cur ? '/' : '') + parts[i];
                    try { FS.mkdir(cur); } catch (e) { }
                }
            }
            FS.writeFile(name, data);
            fileNamesToCompress.push(name);
        } catch (e) {
            onLog(`Failed to write virtual file ${name}: ${e}\n`);
        }
    }

    const args = ['a', outFilename];
    if (password) {
        args.push(`-p${password}`);
        args.push('-mhe=on'); // Encrypt headers if possible
    }
    args.push(...fileNamesToCompress);

    onLog(`> 7z ${args.join(' ')}\n`);

    try {
        sz.callMain(args);
    } catch (e) {
        if (e.name === 'ExitStatus' && e.status !== 0) {
            fileNamesToCompress.forEach(f => {
                try { FS.unlink(f); } catch (err) { }
            });
            throw new Error(`Compression failed with exit status ${e.status}`);
        } else if (e.name !== 'ExitStatus' && e !== 0 && (!e.message || !e.message.includes('0'))) {
            fileNamesToCompress.forEach(f => {
                try { FS.unlink(f); } catch (err) { }
            });
            throw new Error(`Execution error: ${e.message || JSON.stringify(e)}`);
        }
    }

    const compressedData = FS.readFile(outFilename);

    // Cleanup
    FS.unlink(outFilename);
    fileNamesToCompress.forEach(f => {
        try { FS.unlink(f); } catch (e) { }
    });

    return compressedData;
}
