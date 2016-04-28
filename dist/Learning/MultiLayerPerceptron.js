'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _synaptic = require('synaptic');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MultiLayerPerceptron = function () {
  function MultiLayerPerceptron(input, hidden, output) {
    _classCallCheck(this, MultiLayerPerceptron);

    this._network = new _synaptic.Network();

    var inputLayer = new _synaptic.Layer(input);
    var hiddenLayer = new _synaptic.Layer(hidden);
    var outputLayer = new _synaptic.Layer(output);

    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    this._network.set({
      input: inputLayer,
      hidden: [hiddenLayer],
      output: outputLayer
    });

    this._trainer = new _synaptic.Trainer(this._network);
  }

  _createClass(MultiLayerPerceptron, [{
    key: 'train',
    value: function train(trainingsSet) {
      this._trainer.train(trainingsSet, {
        rate: .1,
        iterations: 100000,
        error: .005,
        shuffle: true,
        log: 1000,
        cost: _synaptic.Trainer.cost.CROSS_ENTROPY
      });
    }
  }, {
    key: 'activate',
    value: function activate(vector) {
      return this._network.activate(vector);
    }
  }]);

  return MultiLayerPerceptron;
}();

exports.default = MultiLayerPerceptron;
//# sourceMappingURL=MultiLayerPerceptron.js.map
