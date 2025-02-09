import base58
from solana.rpc.api import Client
from solders.pubkey import Pubkey



def api_test(token_address):
    solana_client = Client("https://thrilling-maximum-road.solana-mainnet.quiknode.pro/e7811612a1630729d1de22f5d9a92d3d040d128f", timeout=60)

    encoded_pubkey = token_address
    decoded_pubkey = base58.b58decode(encoded_pubkey)

    print(len(decoded_pubkey)) #32 bytes

    address = Pubkey(decoded_pubkey)




    response = solana_client.get_token_largest_accounts(address)

    #print(response)

    raw_percentage_amounts = [str(account.amount.ui_amount_string) for account in response.value]
    raw_address_amounts = [str(account.address) for account in response.value]

    float_list = [float(i) for i in raw_percentage_amounts]

    result = list(zip(raw_address_amounts, float_list))

    # Print the results
    
    
    return result
    # # Or if you want a JSON array:
    # import json
    # print("\nJSON format:")
    # print(json.dumps(float_list, indent=2))



api_test("HAWKThXRcNL9ZGZKqgUXLm4W8tnRZ7U6MVdEepSutj34")