from flask import Flask, jsonify, request
from flask_cors import CORS
from apiTotal import api_total
from apiTest import api_test
from webscraper import web_scrape



app = Flask(__name__)
CORS(app)

@app.route('/api/search', methods=['GET'])
def search_get():
    # Get the number from the query parameter
    query = request.args.get('query', type=str)

    if query is not None:
        result = api_total(query)
        result2 = api_test(query)
        result3 = [(address, (amount / result) * 100) for address, amount in result2]  # Tuples with percentage
        result4 = web_scrape(query)
        result5 = [result3 , result4]
        print(result5)
        return jsonify({"result": result3})
    else:
        return jsonify({"error": "Invalid input"}), 400

@app.route('/api/search', methods=['POST'])
def search_post():
    # Get the data sent from the frontend
    data = request.get_json()
    token_address = data.get('query')

    if not token_address:
            return jsonify({"error": "Missing token address"}), 400
    
    # Assume the frontend sends a number in the "query" field
    try:
        # total = api_total(token_address)  # Get the number from the request
        # print(total)
        return jsonify({"result": str(token_address)})
        # Check if number is valid (you can add more validation here)
        # if total is not None:
        #     result = float(total)  # Add 1 to the number
        #     return jsonify({"result": result})  # Send back the result
        # else:
        #     return jsonify({"error": "Invalid input"}), 400
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(port=8080)
