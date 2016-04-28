'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MultiLayerPerceptron = require('./MultiLayerPerceptron');

var _MultiLayerPerceptron2 = _interopRequireDefault(_MultiLayerPerceptron);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model() {
    _classCallCheck(this, Model);
  }

  _createClass(Model, [{
    key: 'train',
    value: function train(trainingPhrases, vocabulary, commands) {

      this._vocabulary = vocabulary;
      this._commands = commands;

      this._mlp = new _MultiLayerPerceptron2.default(vocabulary.length, 4, commands.length);

      var trainingSet = [];
      for (var i = 0; i < trainingPhrases.length; i++) {
        trainingSet.push({
          input: vocabulary.getVectorFromPhrase(trainingPhrases[i].phrase),
          output: trainingPhrases[i].output
        });
      }

      this._mlp.train(trainingSet);
    }
  }, {
    key: 'predict',
    value: function predict(phrase) {
      var vector = this._vocabulary.getVectorFromPhrase(phrase);
      var prediction = this._mlp.activate(vector);

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

  return Model;
}();

exports.default = Model;
//# sourceMappingURL=Model.js.map
