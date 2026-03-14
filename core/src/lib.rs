use base64::{Engine as _, engine::general_purpose};

pub fn hex_encode_bytes(bytes: &[u8]) -> String {
    hex::encode(bytes)
}

pub fn hex_decode_to_bytes(input: &str) -> Result<Vec<u8>, String> {
    hex::decode(input).map_err(|e| e.to_string())
}

pub fn encode_bytes(bytes: &[u8]) -> String {
    general_purpose::STANDARD.encode(bytes)
}

pub fn decode_to_bytes(input: &str) -> Result<Vec<u8>, String> {
    general_purpose::STANDARD
        .decode(input)
        .map_err(|e| e.to_string())
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
        assert_eq!(encode_bytes("".as_bytes()), "");
        assert_eq!(encode_bytes("f".as_bytes()), "Zg==");
        assert_eq!(encode_bytes("fo".as_bytes()), "Zm8=");
        assert_eq!(encode_bytes("foo".as_bytes()), "Zm9v");
        assert_eq!(encode_bytes("foob".as_bytes()), "Zm9vYg==");
        assert_eq!(encode_bytes("fooba".as_bytes()), "Zm9vYmE=");
        assert_eq!(encode_bytes("foobar".as_bytes()), "Zm9vYmFy");
    }

    #[test]
    fn test_decode() {
        let decoded = decode_to_bytes("aGVsbG8=").unwrap();
        assert_eq!(String::from_utf8(decoded).unwrap(), "hello");
    }

    #[test]
    fn test_hex_encode_decode() {
        let input = "hello";
        let encoded = hex_encode_bytes(input.as_bytes());
        assert_eq!(encoded, "68656c6c6f");
        let decoded = hex_decode_to_bytes(&encoded).unwrap();
        assert_eq!(input, String::from_utf8(decoded).unwrap());
    }

    #[test]
    fn test_url_safe_encode_decode() {
        let input = "hello?world/";
        let encoded = url_safe_encode_bytes(input.as_bytes());
        assert!(!encoded.contains('+') && !encoded.contains('/') && !encoded.contains('='));
        let decoded = url_safe_decode_to_bytes(&encoded).unwrap();
        assert_eq!(input, String::from_utf8(decoded).unwrap());
    }
}
