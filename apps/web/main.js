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
}

run();
