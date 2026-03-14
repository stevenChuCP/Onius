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

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn rfc4648_test_vectors_1() {
        assert_eq!(encode("").unwrap(), "");
    }

    #[test]
    fn rfc4648_test_vectors_2() {
        assert_eq!(encode("f").unwrap(), "Zg==");
    }

    #[test]
    fn rfc4648_test_vectors_3() {
        assert_eq!(encode("fo").unwrap(), "Zm8=");
    }

    #[test]
    fn rfc4648_test_vectors_4() {
        assert_eq!(encode("foo").unwrap(), "Zm9v");
    }

    #[test]
    fn rfc4648_test_vectors_5() {
        assert_eq!(encode("foob").unwrap(), "Zm9vYg==");
    }

    #[test]
    fn rfc4648_test_vectors_6() {
        assert_eq!(encode("fooba").unwrap(), "Zm9vYmE=");
    }

    #[test]
    fn rfc4648_test_vectors_7() {
        assert_eq!(encode("foobar").unwrap(), "Zm9vYmFy");
    }

    #[test]
    fn test_encode() {
        assert_eq!(encode("hello"), "aGVsbG8=");
    }

    #[test]
    fn test_decode() {
        assert_eq!(decode("aGVsbG8=").unwrap(), "hello");
    }
}
