'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Perceptron = require('./Perceptron');

var _Perceptron2 = _interopRequireDefault(_Perceptron);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MLP = function () {
  function MLP() {
    _classCallCheck(this, MLP);
  }

  _createClass(MLP, [{
    key: 'train',
    value: function train(trainingPhrases, vocabulary, commands) {

      this._vocabulary = vocabulary;
      this._commands = commands;

      this._perceptron = new _Perceptron2.default(vocabulary.length, 4, commands.length);

      var trainingSet = [];
      for (var i = 0; i < trainingPhrases.length; i++) {
        trainingSet.push({
          input: vocabulary.getVectorFromPhrase(trainingPhrases[i].phrase),
          output: trainingPhrases[i].output
        });
      }

      this._perceptron.train(trainingSet);
    }
  }, {
    key: 'predict',
    value: function predict(phrase) {
      var vector = this._vocabulary.getVectorFromPhrase(phrase);
      var prediction = this._perceptron.activate(vector);

      var result = [];
      for (var i = 0; i < prediction.length; i++) {
        result[i] = {
          command: this._commands[i].Name,
          prediction: prediction[i]
        };
      }

      return result;
    }
  }]);

  return MLP;
}();

exports.default = MLP;

/*

    Vocabulary
        0 => start
        1 => halt
        2 => fix
        3 => stop
        4 => how
        5 => going
        4 => restart
        5 => teamspeak
        6 => minecraft

    Commands
        0 => minecraft status
        1 => teamspeak status

    TrainingPhrases
        "teamspeak status" => [0, 1]
        "what is the status of our teamspeak server?" => [0, 1]
        "how is the teamspeak server going?" => [0, 1]
        "some random bullshit" => [0, 0]

    Input Vector from vocabulary [0, 0, 0, 0, 0]
    Output Vector from commands [0, 0, 0]

    Training Data for vocabulary => commands

 */
//# sourceMappingURL=MLP.js.map
