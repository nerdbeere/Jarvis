import MultiLayerPerceptron from './MultiLayerPerceptron';

class Model {

  train(trainingPhrases, vocabulary, commands) {

    this._vocabulary = vocabulary;
    this._commands = commands;

    this._mlp = new MultiLayerPerceptron(vocabulary.length, 4, commands.length);

    let trainingSet = [];
    for (let i = 0; i < trainingPhrases.length; i++) {
      trainingSet.push({
        input: vocabulary.getVectorFromPhrase(trainingPhrases[i].phrase),
        output: trainingPhrases[i].output,
      });
    }

    this._mlp.train(trainingSet);

  }

  predict(phrase) {
    var vector = this._vocabulary.getVectorFromPhrase(phrase);
    var prediction = this._mlp.activate(vector);

    var result = [];
    for (let i = 0; i < prediction.length; i++) {
      result[i] = {
        command: this._commands[i].Name,
        prediction: prediction[i],
      };
    }

    return result;
  }
}

export default Model;
