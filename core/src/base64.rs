use base64::{Engine as _, engine::general_purpose};

pub fn encode(bytes: &[u8]) -> String {
    general_purpose::STANDARD.encode(bytes)
}

pub fn decode(input: &str) -> Result<Vec<u8>, String> {
    general_purpose::STANDARD
        .decode(input)
        .map_err(|e| e.to_string())
}

pub fn url_safe_encode(bytes: &[u8]) -> String {
    general_purpose::URL_SAFE_NO_PAD.encode(bytes)
}

pub fn url_safe_decode(input: &str) -> Result<Vec<u8>, String> {
    general_purpose::URL_SAFE_NO_PAD
        .decode(input)
        .map_err(|e| e.to_string())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn rfc4648_test_vectors_standard() {
        assert_eq!(encode("".as_bytes()), "");
        assert_eq!(encode("f".as_bytes()), "Zg==");
        assert_eq!(encode("fo".as_bytes()), "Zm8=");
        assert_eq!(encode("foo".as_bytes()), "Zm9v");
        assert_eq!(encode("foob".as_bytes()), "Zm9vYg==");
        assert_eq!(encode("fooba".as_bytes()), "Zm9vYmE=");
        assert_eq!(encode("foobar".as_bytes()), "Zm9vYmFy");
    }

    #[test]
    fn test_decode() {
        let decoded = decode("aGVsbG8=").unwrap();
        assert_eq!(String::from_utf8(decoded).unwrap(), "hello");
    }

    #[test]
    fn test_url_safe_encode_decode() {
        let input = "hello?world/";
        let encoded = url_safe_encode(input.as_bytes());
        assert!(!encoded.contains('+') && !encoded.contains('/') && !encoded.contains('='));
        let decoded = url_safe_decode(&encoded).unwrap();
        assert_eq!(input, String::from_utf8(decoded).unwrap());
    }

    #[test]
    fn decode_invalid_input_errors() {
        assert!(decode("not valid base64!!!").is_err());
    }

    #[test]
    fn decode_empty_string_succeeds() {
        assert_eq!(decode("").unwrap(), Vec::<u8>::new());
    }

    #[test]
    fn url_safe_decode_rejects_standard_alphabet_chars() {
        // "+" and "/" are standard-alphabet-only; URL_SAFE_NO_PAD must reject them.
        assert!(url_safe_decode("a+b/").is_err());
    }

    #[test]
    fn url_safe_decode_invalid_input_errors() {
        assert!(url_safe_decode("not valid!!!").is_err());
    }
}
