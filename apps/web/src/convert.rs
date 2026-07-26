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

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn empty_input_short_circuits_before_format_validation() {
        // even with nonsense format names, an empty input never touches the
        // format-dispatch logic at all.
        assert_eq!(convert("", "bogus", "alsobogus"), Ok(String::new()));
    }

    #[test]
    fn plain_to_base64() {
        assert_eq!(convert("hello", "plain", "base64"), Ok("aGVsbG8=".to_string()));
    }

    #[test]
    fn base64_to_plain() {
        assert_eq!(convert("aGVsbG8=", "base64", "plain"), Ok("hello".to_string()));
    }

    #[test]
    fn plain_to_hex() {
        assert_eq!(convert("hello", "plain", "hex"), Ok("68656c6c6f".to_string()));
    }

    #[test]
    fn hex_to_plain() {
        assert_eq!(convert("68656c6c6f", "hex", "plain"), Ok("hello".to_string()));
    }

    #[test]
    fn plain_to_base64url() {
        assert_eq!(convert("hello", "plain", "base64url"), Ok("aGVsbG8".to_string()));
    }

    #[test]
    fn base64url_to_plain() {
        assert_eq!(convert("aGVsbG8", "base64url", "plain"), Ok("hello".to_string()));
    }

    #[test]
    fn plain_to_plain_is_identity() {
        assert_eq!(convert("hello", "plain", "plain"), Ok("hello".to_string()));
    }

    #[test]
    fn unsupported_input_format_errors() {
        assert_eq!(
            convert("hello", "bogus", "plain"),
            Err("Unsupported input format: bogus".to_string())
        );
    }

    #[test]
    fn unsupported_output_format_errors() {
        assert_eq!(
            convert("hello", "plain", "bogus"),
            Err("Unsupported output format: bogus".to_string())
        );
    }

    #[test]
    fn invalid_base64_input_errors() {
        assert!(convert("not valid base64!!!", "base64", "plain").is_err());
    }

    #[test]
    fn invalid_hex_input_errors() {
        assert!(convert("zz", "hex", "plain").is_err());
    }

    #[test]
    fn non_utf8_bytes_to_plain_errors() {
        // 0xFF alone is not valid UTF-8.
        let result = convert("ff", "hex", "plain");
        assert!(result.is_err());
        assert!(result.unwrap_err().contains("Invalid UTF-8"));
    }
}
