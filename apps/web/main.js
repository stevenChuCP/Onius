import init, { convert } from './pkg/onius_wasm.js';

const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');
const fromFmtEl = document.getElementById('from-fmt');
const toFmtEl = document.getElementById('to-fmt');
const swapBtn = document.getElementById('swap-btn');
const errorMsg = document.getElementById('error-msg');

async function run() {
    await init();

    const showError = (msg) => {
        errorMsg.textContent = msg;
        errorMsg.classList.remove('hidden');
    };

    const hideError = () => {
        errorMsg.classList.add('hidden');
    };

    const performConversion = () => {
        hideError();
        const input = inputEl.value;
        const fromFmt = fromFmtEl.value;
        const toFmt = toFmtEl.value;

        if (!input) {
            outputEl.value = '';
            return;
        }

        try {
            const result = convert(input, fromFmt, toFmt);
            outputEl.value = result;
        } catch (e) {
            showError(e);
            outputEl.value = '';
        }
    };

    inputEl.addEventListener('input', performConversion);
    fromFmtEl.addEventListener('change', performConversion);
    toFmtEl.addEventListener('change', performConversion);

    // Drag and Drop Handling
    inputEl.addEventListener('dragover', (e) => {
        e.preventDefault();
        inputEl.classList.add('drag-over');
    });

    ['dragleave', 'dragend'].forEach(type => {
        inputEl.addEventListener(type, () => {
            inputEl.classList.remove('drag-over');
        });
    });

    inputEl.addEventListener('drop', (e) => {
        e.preventDefault();
        inputEl.classList.remove('drag-over');

        const file = e.dataTransfer.files[0];
        if (!file) return;

        const reader = new FileReader();
        const fromFmt = fromFmtEl.value;

        reader.onload = (event) => {
            let content = '';
            if (fromFmt === 'hex') {
                // For hex, we might want the hex representation of the bytes
                const bytes = new Uint8Array(event.target.result);
                content = Array.from(bytes)
                    .map(b => b.toString(16).padStart(2, '0'))
                    .join('');
            } else if (fromFmt === 'base64' || fromFmt === 'base64url') {
                // For base64, we read as text unless it's a binary file we want to encode
                // But usually if format is base64, user expects to paste base64 text.
                // If they drop a binary file, they probably want to ENCODE it, so they should 
                // have "From: Text" (or we should auto-switch).
                // For now, let's treat it as text if it looks like text, or base64 if it's already base64.
                // Actually, the most intuitive is: if they drop a file, read it and put it in input.
                // If From is Text, read as Text. If From is something else, read as Text (assume file contains that format).
                const textReader = new FileReader();
                textReader.onload = (txtEvent) => {
                    inputEl.value = txtEvent.target.result;
                    performConversion();
                };
                textReader.readAsText(file);
                return;
            } else {
                // Default: read as text for "plain"
                const textReader = new FileReader();
                textReader.onload = (txtEvent) => {
                    inputEl.value = txtEvent.target.result;
                    performConversion();
                };
                textReader.readAsText(file);
                return;
            }

            inputEl.value = content;
            performConversion();
        };

        if (fromFmt === 'hex') {
            reader.readAsArrayBuffer(file);
        } else {
            reader.readAsText(file);
        }
    });

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
