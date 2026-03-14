use anyhow::{Context, Result};
use onius_core::{decode, encode};
use clap::{Parser, Subcommand};

#[derive(Parser)]
#[command(name = "b64")]
#[command(about = "A Base64 encoder/decoder", long_about = None)]
struct Cli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand)]
enum Commands {
    /// Encode a string to Base64
    Encode {
        /// The string to encode
        input: String,
    },
    /// Decode a Base64 string
    Decode {
        /// The string to decode
        input: String,
    },
}

fn main() -> Result<()> {
    let cli = Cli::parse();

    match &cli.command {
        Commands::Encode { input } => {
            let encoded = encode(input.as_bytes());
            println!("{}", encoded);
        }
        Commands::Decode { input } => {
            let decoded_bytes = decode(&input)
                .map_err(|e| anyhow::anyhow!(e))
                .context("Failed to decode input")?;
            let decoded = String::from_utf8(decoded_bytes)
                .context("Decoded bytes are not valid UTF-8")?;
            println!("{}", decoded);
        }
    }

    Ok(())
}
