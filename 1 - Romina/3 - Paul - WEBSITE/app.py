import os
from flask import Flask, request, jsonify, render_template

# import keras
# from keras.preprocessing import image
# from keras import backend as K
from ML_RandomForest_Family_Dog_to_Human_RR import RandomForestRR
from ML_AllModels_Dog_to_Human_RR import Run_ML_Models

app = Flask(__name__)

@app.before_first_request
def setup():
	pass;

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/", methods = ['POST'])
def dynamic_results():
    have_dog = request.form['have_dog']
    sample_type = request.form['sample_type']
    human_role = request.form['human_role']
    # RandomForestRR(only_humans_with_dogs,sample_type,human_role)
    return jsonify(Run_ML_Models(have_dog,sample_type,human_role))
    #  return jsonify(Run_ML_Models("only_dog_owners","all","Partner"))   

if __name__ == "__main__":
    app.run(debug=True)