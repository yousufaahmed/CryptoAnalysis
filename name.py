from solana.rpc.api import Client
from solana.publickey import PublicKey
import base64

# Connect to Solana mainnet
client = Client("https://api.mainnet-beta.solana.com")

# Token address
token_address = "HAWKThXRcNL9ZGZKqgUXLm4W8tnRZ7U6MVdEepSutj34"
public_key = PublicKey(token_address)

# Fetch account info
response = client.get_account_info(public_key)
data = response['result']['value']['data'][0]
decoded_data = base64.b64decode(data)

# Extract token name
token_name = decoded_data[0:32].decode('utf-8').strip('\x00')
print("Token Name:", token_name)
