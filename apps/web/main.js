import init, { convert } from './pkg/onius_wasm.js';

const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');
const fromFmtEl = document.getElementById('from-fmt');
const toFmtEl = document.getElementById('to-fmt');
const swapBtn = document.getElementById('swap-btn');
const errorMsg = document.getElementById('error-msg');
const fileDropZone = document.getElementById('file-drop-zone');
const fileInput = document.getElementById('file-input');
const dropZoneText = document.getElementById('drop-zone-text');
const dropIcon = document.getElementById('drop-icon');
const imagePreview = document.getElementById('image-preview');
const toOptions = Array.from(toFmtEl.options);

async function run() {
    await init();

    // Setup Sidebar Navigation
    const navBtns = document.querySelectorAll('.nav-btn');
    const toolViews = document.querySelectorAll('.tool-view');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Deactivate all
            navBtns.forEach(b => b.classList.remove('active'));
            toolViews.forEach(v => {
                v.classList.remove('active');
                v.classList.add('hidden');
            });

            // Activate target
            btn.classList.add('active');
            const targetView = document.getElementById(btn.dataset.target);
            if (targetView) {
                targetView.classList.remove('hidden');
                targetView.classList.add('active');
            }

            // Sync Footer Credits
            const allCredits = document.querySelectorAll('.tool-credit');
            allCredits.forEach(c => c.classList.add('hidden'));

            const creditId = btn.dataset.target === 'view-base64' ? 'credit-base64' : 'credit-archive';
            const creditEl = document.getElementById(creditId);
            if (creditEl) {
                creditEl.classList.remove('hidden');
            }
        });
    });

    const showError = (msg) => {
        errorMsg.textContent = msg;
        errorMsg.classList.remove('hidden');
    };

    const hideError = () => {
        errorMsg.classList.add('hidden');
    };

    const updateToOptions = () => {
        const fromFmt = fromFmtEl.value;
        const isImage = fromFmt === 'image';

        // Clear options
        toFmtEl.innerHTML = '';

        toOptions.forEach(opt => {
            const isTextFormat = ['base64', 'base64url', 'hex'].includes(opt.value);
            const isPlain = opt.value === 'plain';

            if (isImage) {
                // For images, we only allow conversion to binary-safe text (Base64/Hex)
                if (isTextFormat) toFmtEl.appendChild(opt);
            } else {
                // For non-images, allow all text formats
                if (isPlain || isTextFormat) toFmtEl.appendChild(opt);
            }
        });

        // Auto-select first available if current is gone
        if (!Array.from(toFmtEl.options).some(o => o.value === toFmtEl.value)) {
            toFmtEl.selectedIndex = 0;
        }

        // Toggle UI modes
        if (isImage) {
            inputEl.classList.add('hidden');
            fileDropZone.classList.remove('hidden');

            // Revert drop zone UI to default empty state ONLY if input is really empty
            if (!inputEl.value.startsWith('data:image')) {
                dropIcon.classList.remove('hidden');
                imagePreview.classList.add('hidden');
                imagePreview.src = '';
                dropZoneText.textContent = 'Drag & drop an image or click to choose';
            }
        } else {
            inputEl.classList.remove('hidden');
            fileDropZone.classList.add('hidden');
        }

        // Disable swap if image since we don't support base64->image reverse
        swapBtn.disabled = isImage;
        swapBtn.style.opacity = isImage ? '0.3' : '1';
        swapBtn.style.pointerEvents = isImage ? 'none' : 'auto';
    };

    const performConversion = () => {
        hideError();
        let input = inputEl.value;
        const fromFmt = fromFmtEl.value;
        const toFmt = toFmtEl.value;

        if (!input) {
            outputEl.value = '';
            return;
        }

        try {
            // If image, remove data URL prefix if present so WASM gets the pure base64
            if (fromFmt === 'image' && input.includes('base64,')) {
                input = input.split('base64,')[1];
            }

            const effectiveFromFmt = fromFmt === 'image' ? 'base64' : fromFmt;
            const result = convert(input, effectiveFromFmt, toFmt);
            outputEl.value = result;
        } catch (e) {
            showError(e);
            outputEl.value = '';
        }
    };

    inputEl.addEventListener('input', performConversion);
    fromFmtEl.addEventListener('change', () => {
        updateToOptions();
        performConversion();
    });
    toFmtEl.addEventListener('change', performConversion);

    // Helper to process a file 
    const handleFile = (file) => {
        if (!file) return;

        const fromFmt = fromFmtEl.value;

        if (file.type.startsWith('image/') && fromFmt !== 'image') {
            // Auto switch to image if an image is dropped
            fromFmtEl.value = 'image';
            updateToOptions();
        }

        const reader = new FileReader();

        reader.onload = (event) => {
            let content = '';
            const updatedFromFmt = fromFmtEl.value;

            if (updatedFromFmt === 'image') {
                const dataUrl = event.target.result;
                // Place into input El which is hidden, but serves as source of truth
                inputEl.value = dataUrl;
                // Update drop zone visual state
                dropIcon.classList.add('hidden');
                imagePreview.src = dataUrl;
                imagePreview.classList.remove('hidden');
                dropZoneText.textContent = `Loaded: ${file.name}`;
                performConversion();
                return;
            }

            if (updatedFromFmt === 'hex') {
                const bytes = new Uint8Array(event.target.result);
                content = Array.from(bytes)
                    .map(b => b.toString(16).padStart(2, '0'))
                    .join('');
            } else {
                // For other text types, we assume file contains text
            }

            if (content) {
                inputEl.value = content;
                performConversion();
            }
        };

        const updatedFromFmt = fromFmtEl.value;
        if (updatedFromFmt === 'hex' || updatedFromFmt === 'image') {
            if (updatedFromFmt === 'image') {
                reader.readAsDataURL(file);
            } else {
                reader.readAsArrayBuffer(file);
            }
        } else {
            const textReader = new FileReader();
            textReader.onload = (txtEvent) => {
                inputEl.value = txtEvent.target.result;
                performConversion();
            };
            textReader.readAsText(file);
        }
    };

    // Drop Zone Click Handling
    fileDropZone.addEventListener('click', () => {
        fileInput.click();
    });

    // Listen to hidden file input changes
    fileInput.addEventListener('change', (e) => {
        handleFile(e.target.files[0]);
    });

    // Drag and Drop Handling for both Input and Drop Zone elements
    const dragElements = [inputEl, fileDropZone];

    dragElements.forEach(el => {
        el.addEventListener('dragover', (e) => {
            e.preventDefault();
            el.classList.add('drag-over');
        });

        ['dragleave', 'dragend'].forEach(type => {
            el.addEventListener(type, () => {
                el.classList.remove('drag-over');
            });
        });

        el.addEventListener('drop', (e) => {
            e.preventDefault();
            el.classList.remove('drag-over');
            handleFile(e.dataTransfer.files[0]);
        });
    });


    // Initialize UI
    updateToOptions();

    swapBtn.addEventListener('click', () => {
        const tempVal = inputEl.value;
        const tempFmt = fromFmtEl.value;

        inputEl.value = outputEl.value;
        fromFmtEl.value = toFmtEl.value;

        outputEl.value = tempVal;
        toFmtEl.value = tempFmt;

        performConversion();
    });

    // Initial conversion in case there's default text
    performConversion();

    // Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(reg => console.log('SW registered'))
                .catch(err => console.error('SW registration failed', err));
        });
    }

    // Archive UI Logic (Toggles)
    const modeExtractBtn = document.getElementById('mode-extract');
    const modeCompressBtn = document.getElementById('mode-compress');
    const compressOptions = document.getElementById('compress-options');
    const archiveActionBtn = document.getElementById('archive-action-btn');
    const browserWarning = document.getElementById('browser-warning');
    const archiveDropZone = document.getElementById('archive-drop-zone');
    const supportsPicker = 'showDirectoryPicker' in window;

    const archiveFileInput = document.getElementById('archive-file-input');
    const archiveFolderInput = document.getElementById('archive-folder-input');
    const archiveDropText = document.getElementById('archive-drop-text');
    const archiveFormat = document.getElementById('archive-format');
    const archiveAdvanceBtn = document.getElementById('archive-advance-btn');
    const advancedModal = document.getElementById('advanced-modal');
    const modalClose = document.getElementById('modal-close');
    const modalSave = document.getElementById('modal-save');
    const archivePassword = document.getElementById('archive-password');
    const archiveClearBtn = document.getElementById('archive-clear-btn');
    const dropZoneControls = document.querySelector('.drop-zone-controls');

    const updateStatusUI = (text, subtext = '', icon = '📦', isActive = false) => {
        statusText.textContent = text;
        statusSubtext.textContent = subtext;
        statusIcon.textContent = icon;
        if (isActive) statusIcon.classList.add('active');
        else statusIcon.classList.remove('active');
    };

    const addHistoryItem = (msg, type = 'info') => {
        const item = document.createElement('div');
        item.className = `history-item ${type}`;
        item.innerHTML = `<span class="history-dot"></span><span>${msg}</span>`;
        statusHistory.prepend(item);
        if (statusHistory.children.length > 5) statusHistory.lastElementChild.remove();
    };

    // Status Monitor Elements
    const statusIcon = document.getElementById('status-icon');
    const statusText = document.getElementById('status-text');
    const statusSubtext = document.getElementById('status-subtext');
    const statusHistory = document.getElementById('status-history');
    const statusMonitor = document.getElementById('archive-status-monitor');
    const archiveGrid = document.querySelector('.archive-grid');
    const containerExtract = document.getElementById('container-extract');
    const containerCompress = document.getElementById('container-compress');
    let loadedArchiveFiles = [];

    const updateBrowserWarning = () => {
        const isExtract = modeExtractBtn.classList.contains('active');
        if (isExtract && !supportsPicker) {
            browserWarning.classList.remove('hidden');
        } else {
            browserWarning.classList.add('hidden');
        }
        archiveDropZone.classList.remove('hidden');

        if (isExtract) {
            archiveAdvanceBtn.classList.add('hidden');
            archiveFileInput.multiple = false;
            
            containerCompress.classList.add('hidden');
            
            if (!supportsPicker) {
                containerExtract.classList.add('hidden');
                browserWarning.classList.remove('hidden');
            } else {
                containerExtract.classList.remove('hidden');
                browserWarning.classList.add('hidden');
            }
            
            // Apply one-column minimalist layout for Extract
            if (archiveGrid) archiveGrid.classList.add('extract-mode');
            if (statusMonitor) statusMonitor.classList.add('compact');
        } else {
            archiveAdvanceBtn.classList.remove('hidden');
            archiveFileInput.multiple = true;
            browserWarning.classList.add('hidden');

            containerExtract.classList.add('hidden');
            containerCompress.classList.remove('hidden');

            // Restore two-column dashboard layout for Compress
            if (archiveGrid) archiveGrid.classList.remove('extract-mode');
            if (statusMonitor) statusMonitor.classList.remove('compact');
        }
    };

    modeExtractBtn.addEventListener('click', () => {
        modeExtractBtn.classList.add('active');
        modeCompressBtn.classList.remove('active');
        compressOptions.classList.add('hidden');
        archiveActionBtn.textContent = 'Start Extraction';
        loadedArchiveFiles = [];
        updateArchiveDropUI();
        updateBrowserWarning();
    });

    modeCompressBtn.addEventListener('click', () => {
        modeCompressBtn.classList.add('active');
        modeExtractBtn.classList.remove('active');
        compressOptions.classList.remove('hidden');
        archiveActionBtn.textContent = 'Start Compression';
        loadedArchiveFiles = [];
        updateArchiveDropUI();
        updateBrowserWarning();
    });

    // Modal Handlers
    const openModal = (m) => m.classList.remove('hidden');
    const closeModal = (m) => m.classList.add('hidden');

    archiveAdvanceBtn.addEventListener('click', () => openModal(advancedModal));
    modalClose.addEventListener('click', () => closeModal(advancedModal));
    modalSave.addEventListener('click', () => closeModal(advancedModal));

    // Handle clicking outside modal to close
    window.addEventListener('click', (e) => {
        if (e.target === advancedModal) closeModal(advancedModal);
        if (e.target === document.getElementById('password-modal')) {
            const pModal = document.getElementById('password-modal');
            pModal.classList.add('hidden');
        }
    });

    const askForPassword = () => {
        return new Promise((resolve) => {
            const pModal = document.getElementById('password-modal');
            const submitBtn = document.getElementById('password-submit-btn');
            const cancelBtn = document.getElementById('password-modal-close');
            const input = document.getElementById('modal-password-input');

            input.value = '';
            openModal(pModal);
            input.focus();

            const handleSubmit = () => {
                const val = input.value.trim();
                if (val) {
                    cleanup();
                    resolve(val);
                }
            };

            const handleCancel = () => {
                cleanup();
                resolve(null);
            };

            const cleanup = () => {
                submitBtn.removeEventListener('click', handleSubmit);
                cancelBtn.removeEventListener('click', handleCancel);
                closeModal(pModal);
            };

            submitBtn.addEventListener('click', handleSubmit);
            cancelBtn.addEventListener('click', handleCancel);
            
            input.onkeydown = (e) => {
                if (e.key === 'Enter') handleSubmit();
                if (e.key === 'Escape') handleCancel();
            };
        });
    };

    const updateArchiveDropUI = () => {
        const isExtract = modeExtractBtn.classList.contains('active');
        
        if (loadedArchiveFiles.length === 0) {
            if (isExtract) {
                archiveDropText.innerHTML = '<span class="main-text">Drag & drop an archive or click to browse</span>';
            } else {
                archiveDropText.innerHTML = '<span class="main-text">Drag & drop files or a folder here or click to browse</span>';
            }
            updateStatusUI('Ready to process', 'No files selected');
            statusHistory.innerHTML = '<div class="history-item info"><span class="history-dot"></span><span>Waiting for manifest...</span></div>';
        } else if (loadedArchiveFiles.length === 1) {
            const name = loadedArchiveFiles[0].name;
            archiveDropText.innerHTML = `Ready: <strong>${name}</strong>`;
            updateStatusUI('Item Ready', name, '📄');
            
            if (!isExtract) {
                statusHistory.innerHTML = '';
                const item = document.createElement('div');
                item.className = 'history-item info';
                item.innerHTML = `<span>📄 ${name}</span>`;
                statusHistory.appendChild(item);
            }
        } else {
            archiveDropText.innerHTML = `Ready: <strong>${loadedArchiveFiles.length} files selected</strong>`;
            updateStatusUI('Multiple Items Ready', `${loadedArchiveFiles.length} files staged`, '📁');
            
            // Show File List in History
            statusHistory.innerHTML = '';
            loadedArchiveFiles.forEach(entry => {
                const item = document.createElement('div');
                item.className = 'history-item info';
                const isDir = entry.name.includes('/');
                item.innerHTML = `<span>${isDir ? '📁' : '📄'} ${entry.name}</span>`;
                statusHistory.appendChild(item);
            });
        }
    };

    const setupClearListener = () => {
        if (archiveClearBtn) {
            archiveClearBtn.onclick = (e) => {
                e.stopPropagation();
                loadedArchiveFiles = [];
                updateArchiveDropUI();
                statusHistory.innerHTML = '';
            };
        }
    };
    setupClearListener();

    const addFilesToList = (files) => {
        const isExtract = modeExtractBtn.classList.contains('active');
        const fileArray = Array.from(files);

        const newFiles = fileArray.map(f => ({
            name: f.webkitRelativePath || f.name,
            file: f
        }));

        if (isExtract) {
            // Enforce single file for extraction
            loadedArchiveFiles = newFiles.length > 0 ? [newFiles[0]] : [];
        } else {
            loadedArchiveFiles = [...loadedArchiveFiles, ...newFiles];
        }
        updateArchiveDropUI();
    };

    const scanEntry = async (entry, path = '') => {
        if (entry.isFile) {
            return new Promise((resolve) => {
                entry.file((file) => {
                    resolve([{ name: path + file.name, file }]);
                });
            });
        } else if (entry.isDirectory) {
            const reader = entry.createReader();
            const entries = await new Promise((resolve) => reader.readEntries(resolve));
            const subResults = await Promise.all(entries.map(e => scanEntry(e, path + entry.name + '/')));
            return subResults.flat();
        }
        return [];
    };

    const setupDropZone = (zone, input, folderOnly = false) => {
        zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('drag-over'); });
        zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
        zone.addEventListener('drop', async (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            
            const isExtract = modeExtractBtn.classList.contains('active');
            const items = e.dataTransfer.items;
            
            if (items) {
                let entries = Array.from(items).map(item => item.webkitGetAsEntry()).filter(Boolean);
                
                if (isExtract) {
                    const fileEntries = entries.filter(e => e.isFile);
                    if (fileEntries.length > 0) {
                        const files = await scanEntry(fileEntries[0]);
                        loadedArchiveFiles = files;
                    }
                } else {
                    const filtered = folderOnly ? entries.filter(e => e.isDirectory) : entries;
                    const allFiles = await Promise.all(filtered.map(entry => scanEntry(entry)));
                    loadedArchiveFiles = [...loadedArchiveFiles, ...allFiles.flat()];
                }
            } else {
                if (isExtract) {
                    const files = Array.from(e.dataTransfer.files);
                    loadedArchiveFiles = files.length > 0 ? [{ name: files[0].name, file: files[0] }] : [];
                } else {
                    addFilesToList(e.dataTransfer.files);
                }
            }
            updateArchiveDropUI();
        });
        zone.addEventListener('click', () => input.click());
    };

    // Setup main extraction zone
    setupDropZone(archiveDropZone, archiveFileInput);

    // Setup compression split zones
    const dropZoneFiles = document.getElementById('drop-zone-files');
    const dropZoneFolder = document.getElementById('drop-zone-folder');
    if (dropZoneFiles) setupDropZone(dropZoneFiles, archiveFileInput);
    if (dropZoneFolder) setupDropZone(dropZoneFolder, archiveFolderInput);

    archiveFileInput.addEventListener('change', (e) => {
        addFilesToList(e.target.files);
    });

    archiveFolderInput.addEventListener('change', (e) => {
        addFilesToList(e.target.files);
    });

    // Helper to scan a DirectoryHandle recursively
    const scanDirectoryHandle = async (handle, path = '') => {
        const files = [];
        for await (const entry of handle.values()) {
            if (entry.kind === 'file') {
                const file = await entry.getFile();
                files.push({ name: path + file.name, file });
            } else if (entry.kind === 'directory') {
                files.push(...(await scanDirectoryHandle(entry, path + entry.name + '/')));
            }
        }
        return files;
    };

    // Download Helper
    const promptDownload = (blob, filename) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    // Initialize UI state
    updateBrowserWarning();
    updateArchiveDropUI();


    archiveActionBtn.addEventListener('click', async () => {
        if (loadedArchiveFiles.length === 0) {
            updateStatusUI('Nothing to do', 'Please select some files first', '❓');
            return;
        }

        const isExtract = modeExtractBtn.classList.contains('active');
        const pwd = archivePassword.value.trim();
        const fmt = archiveFormat.value;

        updateStatusUI(isExtract ? 'Extracting...' : 'Compressing...', 'Initializing WASM engine', '⚙️', true);
        archiveActionBtn.disabled = true;

        try {
            const archiveModule = await import('./src/archive.js');
            const onLog = (msg) => {
                console.log(`[7z] ${msg.trim()}`);
                const lowMsg = msg.toLowerCase();
                if (lowMsg.includes('reading')) updateStatusUI(isExtract ? 'Reading Archive' : 'Reading Files', 'Preparing data...', '📖', true);
                if (lowMsg.includes('success')) addHistoryItem(isExtract ? 'Extraction successful' : 'Compression successful', 'success');
            };

            if (isExtract) {
                if (loadedArchiveFiles.length > 1) {
                    updateStatusUI('Error', 'Single file only', '❌');
                    archiveActionBtn.disabled = false;
                    return;
                }
                const fileEntry = loadedArchiveFiles[0];
                const file = fileEntry.file;

                const buf = await file.arrayBuffer();

                const processWithAutoExtract = async (data, name, currentPwd) => {
                    let files = await archiveModule.extractArchive(new Uint8Array(data), name, currentPwd, onLog);
                    while (files.length === 1 && /\.(tar|tgz|tar\.gz|tar\.bz2|tar\.xz)$/i.test(files[0].name)) {
                        files = await archiveModule.extractArchive(files[0].data, files[0].name, currentPwd, onLog);
                    }
                    return files;
                };

                let dirHandle = null;
                const supportsPicker = 'showDirectoryPicker' in window;

                if (supportsPicker) {
                    try {
                        updateStatusUI('Pending Action', 'Choose destination folder', '📂', true);
                        dirHandle = await window.showDirectoryPicker({ mode: 'readwrite' });
                    } catch (e) {
                        updateStatusUI('Action Cancelled', 'Folder not selected', '📦');
                        archiveActionBtn.disabled = false;
                        return;
                    }
                }

                let extractedFiles;
                try {
                    updateStatusUI('Processing...', 'Running extraction engine', '⚙️', true);
                    extractedFiles = await processWithAutoExtract(buf, file.name, pwd);
                } catch (err) {
                    if (err.name === 'PasswordRequiredError') {
                        updateStatusUI('Locked Archive', 'Enter password to continue', '🔑');
                        const newPwd = await askForPassword();
                        if (newPwd !== null) {
                            archivePassword.value = newPwd;
                            updateStatusUI('Processing...', 'Running extraction engine', '⚙️', true);
                            extractedFiles = await processWithAutoExtract(buf, file.name, newPwd);
                        } else {
                            throw new Error("Cancelled: Password required.");
                        }
                    } else {
                        throw err;
                    }
                }

                if (dirHandle) {
                    let written = 0;
                    for (const ef of extractedFiles) {
                        try {
                            updateStatusUI('Saving...', `Writing file ${written + 1} of ${extractedFiles.length}`, '💾', true);
                            const paths = ef.name.split('/');
                            const filename = paths.pop();
                            let currentDir = dirHandle;
                            for (const p of paths) {
                                if (p.trim() === '') continue;
                                currentDir = await currentDir.getDirectoryHandle(p, { create: true });
                            }
                            const fileHandle = await currentDir.getFileHandle(filename, { create: true });
                            const writable = await fileHandle.createWritable();
                            await writable.write(ef.data);
                            await writable.close();
                            written++;
                        } catch (writeErr) {
                            console.error(`Save error: ${ef.name}`, writeErr);
                            addHistoryItem(`Failed to save ${ef.name}: ${writeErr.name}`, 'error');
                        }
                    }
                    updateStatusUI('✅ Complete!', `Saved ${written} files successfully`, '✅');
                } else {
                    updateStatusUI('Finalizing...', 'Preparing downloads', '📦', true);
                    if (extractedFiles.length > 1) {
                        const filesMap = {};
                        extractedFiles.forEach(f => filesMap[f.name] = f.data);
                        const bundledZip = await archiveModule.compressFiles(filesMap, 'zip', null, () => { });
                        promptDownload(new Blob([bundledZip]), `extracted_${file.name.split('.')[0]}.zip`);
                    } else if (extractedFiles.length === 1) {
                        promptDownload(new Blob([extractedFiles[0].data]), extractedFiles[0].name);
                    }
                    updateStatusUI('Success!', 'Download started', '✅');
                }
            } else {
                // Compression
                updateStatusUI('Compressing...', `Packing ${loadedArchiveFiles.length} items`, '⚙️', true);
                const filesMap = {};
                for (const entry of loadedArchiveFiles) {
                    const buf = await entry.file.arrayBuffer();
                    filesMap[entry.name] = new Uint8Array(buf);
                }

                const compressedData = await archiveModule.compressFiles(filesMap, fmt, pwd, onLog);
                promptDownload(new Blob([compressedData]), `archive.${fmt}`);
                updateStatusUI('Success!', `Created ${fmt.toUpperCase()} archive`, '✅');
            }
        } catch (err) {
            updateStatusUI('Process Failed', err.message || 'Check console', '❌');
            addHistoryItem(err.message, 'error');
            console.error(err);
        } finally {
            archiveActionBtn.disabled = false;
        }
    });
}

run().catch(console.error);
