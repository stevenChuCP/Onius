use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn encode(input: &str) -> String {
    b64_core::encode(input)
}

#[wasm_bindgen]
pub fn decode(input: &str) -> Result<String, String> {
    b64_core::decode(input)
}

#[wasm_bindgen]
pub fn convert(input: &str, from_fmt: &str, to_fmt: &str) -> Result<String, String> {
    if input.is_empty() {
        return Ok(String::new());
    }

    let bytes = match from_fmt {
        "plain" => input.as_bytes().to_vec(),
        "base64" => b64_core::decode_to_bytes(input)?,
        "hex" => b64_core::hex_decode_to_bytes(input)?,
        _ => return Err(format!("Unsupported input format: {}", from_fmt)),
    };

    let result = match to_fmt {
        "plain" => {
            String::from_utf8(bytes).map_err(|e| format!("Invalid UTF-8 in output: {}", e))?
        }
        "base64" => b64_core::encode_bytes(&bytes),
        "hex" => b64_core::hex_encode_bytes(&bytes),
        _ => return Err(format!("Unsupported output format: {}", to_fmt)),
    };

    Ok(result)
}
