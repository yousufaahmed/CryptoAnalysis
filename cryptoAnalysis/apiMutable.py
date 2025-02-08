from solana.rpc.api import Client
from solders.pubkey import Pubkey
import struct
import base58

# Replace with your token mint address (this is the mint address of the token)
encoded_pubkey = "HAWKThXRcNL9ZGZKqgUXLm4W8tnRZ7U6MVdEepSutj34"
mint_address = Pubkey.from_string(encoded_pubkey)

# QuickNode endpoint (mainnet in this case)
solana_client = Client("https://thrilling-maximum-road.solana-mainnet.quiknode.pro/YOUR_API_KEY/")

# Metaplex metadata program ID
metadata_program_id = Pubkey.from_string("metaqbxxUerdq5Jcxk8v16e7wJ9yFv5X2pdGfvzS6t7Z")

# Derive metadata address (associated address for metadata)
metadata_address = Pubkey.find_program_address(
    [
        bytes([0]),  # prefix
        bytes(str(mint_address), 'utf-8'),
        bytes(metadata_program_id),
    ],
    metadata_program_id
)[0]

# Fetch metadata account info
response = solana_client.get_account_info(metadata_address)

if response.value:
    account_data = response.value.data

    # Parse the data (here we expect the metadata to be encoded in a specific way, usually starting with 1 byte for 'is_mutable')
    is_mutable = account_data[0] == 1  # 1 indicates mutable, 0 means immutable

    # Print whether metadata is mutable or immutable
    if is_mutable:
        print("Metadata is mutable.")
    else:
        print("Metadata is immutable.")
else:
    print("Failed to retrieve metadata.")



from solana.rpc.api import Client
from solana.publickey import PublicKey
from solana.rpc.types import TokenAccountOpts

# Replace with your QuickNode endpoin

# Initialize Solana client
solana_client = Client("https://thrilling-maximum-road.solana-mainnet.quiknode.pro/YOUR_API_KEY/")

# Replace with the token mint address (the address of the token itself)
token_mint_address = PublicKey("YourTokenMintAddress")

# Fetch token supply and decimals
def get_token_metadata():
    try:
        # Get token supply
        token_supply = solana_client.get_token_supply(token_mint_address)
        print("Token Supply:", token_supply)
 
        # Get token accounts by mint (to find holders)
        token_accounts = solana_client.get_token_accounts_by_owner(
            token_mint_address,
            TokenAccountOpts(mint=token_mint_address)
        )
        print("Token Accounts:", token_accounts)

        # Fetch metadata from the token mint
        mint_info = solana_client.get_account_info(token_mint_address)
        print("Mint Info:", mint_info)

    except Exception as e:
        print("Error fetching token metadata:", e)

get_token_metadata()