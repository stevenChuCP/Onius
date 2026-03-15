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
}

run();
