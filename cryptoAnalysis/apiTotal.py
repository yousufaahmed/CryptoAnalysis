from jsonrpcclient import request, parse, Ok
import logging
import requests
response = requests.post("https://thrilling-maximum-road.solana-mainnet.quiknode.pro/e7811612a1630729d1de22f5d9a92d3d040d128f/", 
                         json=request("getTokenSupply", params=(["HAWKThXRcNL9ZGZKqgUXLm4W8tnRZ7U6MVdEepSutj34"])))
parsed = parse(response.json())
if isinstance(parsed, Ok):
    print(parsed.result)
else:
    logging.error(parsed.message)