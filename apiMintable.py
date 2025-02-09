from solana.rpc.api import Client
from solana.publickey import PublicKey
import base64

def get_token_name(token_address):
    # Initialize client
    client = Client("https://thrilling-maximum-road.solana-mainnet.quiknode.pro/e7811612a1630729d1de22f5d9a92d3d040d128f")
    
    # Metaplex Token Metadata Program ID
    metadata_program_id = PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s")
    
    try:
        mint_address = PublicKey(token_address)
    except:
        return "Invalid token address"
    
    # Generate metadata PDA
    seeds = [
        b"metadata",
        bytes(metadata_program_id),
        bytes(mint_address)
    ]
    
    try:
        pda, bump = PublicKey.find_program_address(seeds, metadata_program_id)
    except:
        return "Error generating PDA"
    
    # Fetch metadata account info
    response = client.get_account_info(pda)
    if not response['result']['value']:
        return "Metadata account not found"
    
    # Decode metadata
    data_encoded = response['result']['value']['data'][0]
    data = base64.b64decode(data_encoded)
    
    # Check metadata account type
    if data[0] != 4:
        return "Not a valid Metaplex Metadata account"
    
    # Extract name from metadata
    try:
        name_offset = 1 + 32 + 32  # key + update_authority + mint
        name_length = int.from_bytes(data[name_offset:name_offset+4], 'little')
        name_start = name_offset + 4
        name_end = name_start + name_length
        return data[name_start:name_end].decode('utf-8').strip('\x00')
    except:
        return "Error parsing metadata"

# Example usage
token_address = "HAWKThXRcNL9ZGZKqgUXLm4W8tnRZ7U6MVdEepSutj34"
print(f"Token name: {get_token_name(token_address)}")