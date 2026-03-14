use base64::{Engine as _, engine::general_purpose};

pub fn encode(input: &str) -> String {
    general_purpose::STANDARD.encode(input)
}

pub fn decode(input: &str) -> Result<String, String> {
    let bytes = general_purpose::STANDARD
        .decode(input)
        .map_err(|e| e.to_string())?;
    String::from_utf8(bytes).map_err(|e| e.to_string())
}

pub fn hex_encode(input: &str) -> String {
    hex::encode(input)
}

pub fn hex_decode(input: &str) -> Result<String, String> {
    let bytes = hex::decode(input).map_err(|e| e.to_string())?;
    String::from_utf8(bytes).map_err(|e| e.to_string())
}

pub fn encode_bytes(bytes: &[u8]) -> String {
    general_purpose::STANDARD.encode(bytes)
}

pub fn decode_to_bytes(input: &str) -> Result<Vec<u8>, String> {
    general_purpose::STANDARD
        .decode(input)
        .map_err(|e| e.to_string())
}

pub fn hex_encode_bytes(bytes: &[u8]) -> String {
    hex::encode(bytes)
}

pub fn hex_decode_to_bytes(input: &str) -> Result<Vec<u8>, String> {
    hex::decode(input).map_err(|e| e.to_string())
}

pub fn url_safe_encode(input: &str) -> String {
    general_purpose::URL_SAFE_NO_PAD.encode(input)
}

pub fn url_safe_decode(input: &str) -> Result<String, String> {
    let bytes = general_purpose::URL_SAFE_NO_PAD
        .decode(input)
        .map_err(|e| e.to_string())?;
    String::from_utf8(bytes).map_err(|e| e.to_string())
}

pub fn url_safe_encode_bytes(bytes: &[u8]) -> String {
    general_purpose::URL_SAFE_NO_PAD.encode(bytes)
}

pub fn url_safe_decode_to_bytes(input: &str) -> Result<Vec<u8>, String> {
    general_purpose::URL_SAFE_NO_PAD
        .decode(input)
        .map_err(|e| e.to_string())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn rfc4648_test_vectors_standard() {
        assert_eq!(encode(""), "");
        assert_eq!(encode("f"), "Zg==");
        assert_eq!(encode("fo"), "Zm8=");
        assert_eq!(encode("foo"), "Zm9v");
        assert_eq!(encode("foob"), "Zm9vYg==");
        assert_eq!(encode("fooba"), "Zm9vYmE=");
        assert_eq!(encode("foobar"), "Zm9vYmFy");
    }

    #[test]
    fn test_decode() {
        assert_eq!(decode("aGVsbG8=").unwrap(), "hello");
    }

    #[test]
    fn test_hex_encode_decode() {
        let input = "hello";
        let encoded = hex_encode(input);
        assert_eq!(encoded, "68656c6c6f");
        let decoded = hex_decode(&encoded).unwrap();
        assert_eq!(input, decoded);
    }

    #[test]
    fn test_url_safe_encode_decode() {
        let input = "hello?world/";
        let encoded = url_safe_encode(input);
        // Standard base64 would have '+' and '/' (or padding '=')
        // URL safe no pad should have '-' and '_' and no '='
        assert!(!encoded.contains('+') && !encoded.contains('/') && !encoded.contains('='));
        let decoded = url_safe_decode(&encoded).unwrap();
        assert_eq!(input, decoded);
    }
}
