pub fn encode(bytes: &[u8]) -> String {
    hex::encode(bytes)
}

pub fn decode(input: &str) -> Result<Vec<u8>, String> {
    hex::decode(input).map_err(|e| e.to_string())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_hex_encode_decode() {
        let input = "hello";
        let encoded = encode(input.as_bytes());
        assert_eq!(encoded, "68656c6c6f");
        let decoded = decode(&encoded).unwrap();
        assert_eq!(input, String::from_utf8(decoded).unwrap());
    }

    #[test]
    fn decode_odd_length_errors() {
        assert!(decode("abc").is_err());
    }

    #[test]
    fn decode_non_hex_chars_errors() {
        assert!(decode("zz").is_err());
    }

    #[test]
    fn decode_empty_string_succeeds() {
        assert_eq!(decode("").unwrap(), Vec::<u8>::new());
    }
}
