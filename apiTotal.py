from jsonrpcclient import request, parse, Ok
import logging
import requests



def api_total(token_address):

    response = requests.post("https://thrilling-maximum-road.solana-mainnet.quiknode.pro/e7811612a1630729d1de22f5d9a92d3d040d128f/", 
                            json=request("getTokenSupply", params=([token_address])))
    parsed = parse(response.json())
    if isinstance(parsed, Ok):
        #print(parsed.result)
        ui_amount = parsed.result['value']['uiAmount']
        return ui_amount
    else:
        logging.error(parsed.message)




api_total("JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN")