import base58
from solana.rpc.api import Client
from solders.pubkey import Pubkey

solana_client = Client("https://thrilling-maximum-road.solana-mainnet.quiknode.pro/e7811612a1630729d1de22f5d9a92d3d040d128f")

encoded_pubkey = "HAWKThXRcNL9ZGZKqgUXLm4W8tnRZ7U6MVdEepSutj34"
decoded_pubkey = base58.b58decode(encoded_pubkey)

print(len(decoded_pubkey)) #32 bytes

address = Pubkey(decoded_pubkey)

print(solana_client.get_token_largest_accounts(address))