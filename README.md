# Crypto Token Scam Analysis
Takes a crypto token ID and gives an output of whether or not it is a scam or it is investment worthy.

## Project Details

Made using Reactjs frontend, axios for http requests, Flask Python backend.
OpenAI API and other crypto sites.

## Contributors

Yousuf Ahmed
Sri Guhanthan

## Details

* **Authors:** Yousuf Ahmed [Linkedin](https://www.linkedin.com/in/yousufaahmed/), Sri Guhanthan [Linkedin](https://www.linkedin.com/in/sri-guhan/)
* **License:** This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
* **Source:** [GitHub Repository](https://github.com/yousufaahmed/cryptoanalysis)

## Backend Setup (Python Flask)

```python -m venv env```

```source env.bin.activate```
Or
```.\env\Scripts\activate```

Install the necessary dependencies: Flask and Flask-CORS.

```bash
pip install flask flask_cors
```

```bash
python app.py
```

The Flask server will start and listen on http://localhost:8080.

## Frontend Setup (React)

```npm install```

npm install (other modules if you get an error!!)

Run the React application by executing the following command inside the project folder:

```bash
npm start
```

The React development server will start and listen on http://localhost:3000.

Open your web browser and navigate to http://localhost:3000. You should see the greeting message from the Flask backend displayed on the page.

Will have to create a .env file which would contain an OpenAI API key and a Tavily API key.

=======
# CryptoAnalysis
Gives the analysis of a Crypto token, whether it is a "pump and dump" scam token, or a valid investment.
