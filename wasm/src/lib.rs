use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn encode(input: &str) -> String {
    b64_core::encode(input)
}

#[wasm_bindgen]
pub fn decode(input: &str) -> Result<String, String> {
    b64_core::decode(input)
}
