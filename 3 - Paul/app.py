import os
from flask import Flask, request, jsonify, render_template, redirect

# import keras
# from keras.preprocessing import image
# from keras import backend as K
from ML_RandomForest_Family_Dog_to_Human_RR import RandomForestRR
from ML_AllModels_Dog_to_Human_RR import Run_ML_Models

app = Flask(__name__)

json_data = {'randomForest': 0 , 'logisticRegression':0}

@app.before_first_request
def setup():
	pass;

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/dynamic_results/<have_dog>/<sample_type>/<human_role>")
def dynamic_results(have_dog, sample_type, human_role):
	print(have_dog);
	print(sample_type);
	print(human_role);
	return jsonify(Run_ML_Models(have_dog,sample_type,human_role))


if __name__ == "__main__":
    app.run(debug=True)