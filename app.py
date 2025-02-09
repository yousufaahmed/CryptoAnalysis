from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/search', methods=['GET'])
def search_get():
    # Get the number from the query parameter
    query = request.args.get('query', type=int)

    if query is not None:
        result = query + 1  # For example, calculate query + 1
        return jsonify({"result": result})
    else:
        return jsonify({"error": "Invalid input"}), 400

@app.route('/api/search', methods=['POST'])
def search_post():
    # Get the data sent from the frontend
    data = request.get_json()
    
    # Assume the frontend sends a number in the "query" field
    try:
        number = data.get('query')  # Get the number from the request
        
        # Check if number is valid (you can add more validation here)
        if number is not None:
            result = int(number) + 1  # Add 1 to the number
            return jsonify({"result": result})  # Send back the result
        else:
            return jsonify({"error": "Invalid input"}), 400
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(port=8080)
