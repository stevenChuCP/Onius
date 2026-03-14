use clap::{Parser, Subcommand};
use b64_core::{encode, decode};
use anyhow::{Context, Result};

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
            let encoded = encode(&input);
            println!("{}", encoded);
        }
        Commands::Decode { input } => {
            let decoded = decode(&input).map_err(|e| anyhow::anyhow!(e)).context("Failed to decode input")?;
            println!("{}", decoded);
        }
    }

    Ok(())
}
