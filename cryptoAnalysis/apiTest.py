from solana.rpc.api import Client
from solathon import PublicKey

solana_client = Client("https://api.mainnet-beta.solana.com")
token_mint = PublicKey("HAWKThXRcNL9ZGZKqgUXLm4W8tnRZ7U6MVdEepSutj34")

# Get largest token accounts
largest_accounts = solana_client.get_token_largest_accounts(token_mint)
total_supply = solana_client.get_token_supply(token_mint)

# Calculate percentage for each account
if largest_accounts["result"] and total_supply["result"]:
    total_supply_amount = int(total_supply["result"]["value"]["amount"])
    for account in largest_accounts["result"]["value"]:
        balance = int(account["amount"])
        percentage = (balance / total_supply_amount) * 100
        print(f"Account: {account['address']}, Balance: {balance}, Percentage: {percentage:.2f}%")