import init, { encode, decode } from '../wasm/pkg/b64_wasm.js';

const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');
const encodeBtn = document.getElementById('encode-btn');
const decodeBtn = document.getElementById('decode-btn');
const swapBtn = document.getElementById('swap-btn');
const errorMsg = document.getElementById('error-msg');

async function run() {
    // Initialize WASM
    await init();

    const showError = (msg) => {
        errorMsg.textContent = msg;
        errorMsg.classList.remove('hidden');
    };

    const hideError = () => {
        errorMsg.classList.add('hidden');
    };

    encodeBtn.addEventListener('click', () => {
        hideError();
        const input = inputEl.value;
        try {
            outputEl.value = encode(input);
        } catch (e) {
            showError(e);
        }
    });

    decodeBtn.addEventListener('click', () => {
        hideError();
        const input = inputEl.value;
        try {
            const result = decode(input);
            outputEl.value = result;
        } catch (e) {
            showError(`Decoding failed: ${e}`);
        }
    });

    swapBtn.addEventListener('click', () => {
        const temp = inputEl.value;
        inputEl.value = outputEl.value;
        outputEl.value = temp;
        hideError();
    });

    // Proactive encoding as you type? Maybe later.
}

run();
