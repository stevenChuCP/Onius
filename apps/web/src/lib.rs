use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn convert(input: &str, from_fmt: &str, to_fmt: &str) -> Result<String, String> {
    if input.is_empty() {
        return Ok(String::new());
    }

    let bytes = match from_fmt {
        "plain" => input.as_bytes().to_vec(),
        "base64" => onius_core::decode(input)?,
        "base64url" => onius_core::url_safe_decode(input)?,
        "hex" => onius_core::hex_decode(input)?,
        _ => return Err(format!("Unsupported input format: {}", from_fmt)),
    };

    let result = match to_fmt {
        "plain" => {
            String::from_utf8(bytes).map_err(|e| format!("Invalid UTF-8 in output: {}", e))?
        }
        "base64" => onius_core::encode(&bytes),
        "base64url" => onius_core::url_safe_encode(&bytes),
        "hex" => onius_core::hex_encode(&bytes),
        _ => return Err(format!("Unsupported output format: {}", to_fmt)),
    };

    Ok(result)
}
