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
            },
            stdin: () => {
                // Tracking that an input was requested (usually a password)
                if (sevenZipInstance) sevenZipInstance.wasStdinCalled = true;
                return null;
            }
        });
    } else {
        // Update callback for existing instance
        sevenZipInstance.print = (text) => { if (onLog) onLog(text + '\n'); };
        sevenZipInstance.printErr = (text) => { if (onLog) onLog('ERROR: ' + text + '\n'); };
    }
    sevenZipInstance.wasStdinCalled = false; // Reset for new run
    return sevenZipInstance;
}

/**
 * Helper to get all files in a virtual directory recursively.
 */
function getFilesRecursively(FS, dir, rootDir) {
    let results = [];
    const base = rootDir || dir;
    const entries = FS.readdir(dir).filter(e => e !== '.' && e !== '..');

    for (const entry of entries) {
        const fullPath = `${dir}/${entry}`;
        const stat = FS.stat(fullPath);
        if (FS.isDir(stat.mode)) {
            results = results.concat(getFilesRecursively(FS, fullPath, base));
        } else {
            results.push({
                name: fullPath.replace(base + '/', ''), // clean relative path from root
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

    const run7z = (cmdArgs) => {
        let isPasswordError = false;
        const originalPrint = sz.print;
        const originalPrintErr = sz.printErr;
        
        const checkText = (text) => {
            const lowText = text.toLowerCase();
            if (lowText.includes('password') || lowText.includes('encrypted')) {
                isPasswordError = true;
            }
        };

        sz.print = (text) => { checkText(text); originalPrint(text); };
        sz.printErr = (text) => { checkText(text); originalPrintErr(text); };

        try {
            sz.callMain(cmdArgs);
        } catch (e) {
            sz.print = originalPrint;
            sz.printErr = originalPrintErr;

            // Robust detection: Prompt printed OREngine requested stdin OR exit status 2
            if (isPasswordError || sz.wasStdinCalled || (e.name === 'ExitStatus' && e.status === 2)) {
                const err = new Error('PASSWORD_REQUIRED');
                err.name = 'PasswordRequiredError';
                throw err;
            }

            if (e.name === 'ExitStatus' && e.status !== 0) {
                throw new Error(`Extraction failed with exit status ${e.status}`);
            } else if (e.name !== 'ExitStatus' && e !== 0 && (!e.message || !e.message.includes('0'))) {
                throw new Error(`Execution error: ${e.message || JSON.stringify(e) || String(e)}`);
            }
        } finally {
            sz.print = originalPrint;
            sz.printErr = originalPrintErr;
        }
    };

    // Setup extraction command
    const args = ['x', fileName, `-o${extractDir}`, '-y'];
    if (password) {
        args.push(`-p${password}`);
    }

    onLog(`> 7z ${args.join(' ')}\n`);

    // Execute first pass
    run7z(args);

    // Read extracted files
    let extractedFiles = getFilesRecursively(FS, extractDir);

    // AUTO-CHAIN EXTRACTION: If we have exactly one .tar file, extract it too
    if (extractedFiles.length === 1 && extractedFiles[0].name.toLowerCase().endsWith('.tar')) {
        const tarFile = extractedFiles[0];
        onLog(`Detected TAR within compressed stream. Performing second pass on ${tarFile.name}...\n`);
        
        const tarPath = `${extractDir}/${tarFile.name}`;
        const secondExtractDir = extractDir + '_final';
        FS.mkdir(secondExtractDir);

        const secondArgs = ['x', tarPath, `-o${secondExtractDir}`, '-y'];
        onLog(`> 7z ${secondArgs.join(' ')}\n`);
        
        run7z(secondArgs);
        extractedFiles = getFilesRecursively(FS, secondExtractDir);
    }

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
        // Only 7z supports header encryption (hiding filenames)
        if (format === '7z') {
            args.push('-mhe=on'); 
        }
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
