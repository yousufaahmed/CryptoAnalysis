from solana.rpc.api import Client
from solders.pubkey import Pubkey
import struct

# Decode the token mint address
encoded_pubkey = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
address = Pubkey.from_string(encoded_pubkey)

# Connect to Solana using QuickNode
solana_client = Client("https://thrilling-maximum-road.solana-mainnet.quiknode.pro/e7811612a1630729d1de22f5d9a92d3d040d128f/")

# Get account information
response = solana_client.get_account_info(address)

# Check if the account data exists
if response.value:
    account_data = response.value.data
    mint_authority = account_data[:32]  # First 32 bytes are for the mint authority
    supply = struct.unpack("<Q", account_data[32:40])[0]  # 8 bytes for supply
    decimals = account_data[44]  # 1 byte for decimals
    is_initialized = account_data[45]  # 1 byte for initialized flag

    # Check minting status
    print(account_data)
    if mint_authority == b'\x00' * 32:
        print("Minting is disabled. No mint authority.")
    else:
        print(f"Minting is enabled. Mint authority: {mint_authority.hex()}")

    # Calculate total supply with decimals
    total_supply = supply / (10 ** decimals)
    print(f"Total Supply: {total_supply}")
    print(f"Decimals: {decimals}")
    print(f"Is Initialized: {bool(is_initialized)}")
else:
    print("Failed to retrieve token mint information.")
