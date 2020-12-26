# import libraries
from flask import Flask, request, render_template
import pickle
import numpy as np


# create app and load the trained Model app =
app = Flask(__name__)
model = pickle.load(open('seeds_predict_model.pkl', 'rb'))


# Route to handle HOME
@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')


# Route to handle PREDICTEO RESULT

@app.route('/predict', methods=['POST'])
def predict():

    int_features = [float(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)

    if(prediction[0] == 1):
        return render_template('index.html', predicted_result='Kama')
    if(prediction[0] == 2):
        return render_template('index.html', predicted_result='Rosa')
    if(prediction[0] == 3):
        return render_template('index.html', predicted_result='Canadian')


if __name__ == '__main__':
    app.run(debug=True)
