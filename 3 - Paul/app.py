import os
from flask import Flask, request, jsonify, render_template

import keras
from keras.preprocessing import image
from keras import backend as K

app = Flask(__name__)

@app.before_first_request
def setup():
	pass;

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)