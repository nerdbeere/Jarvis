import { Network, Layer, Trainer } from 'synaptic';

class MultiLayerPerceptron {

  constructor(input, hidden, output) {

    this._network = new Network();

    let inputLayer = new Layer(input);
    let hiddenLayer = new Layer(hidden);
    let outputLayer = new Layer(output);

    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    this._network.set({
      input: inputLayer,
      hidden: [hiddenLayer],
      output: outputLayer,
    });

    this._trainer = new Trainer(this._network);
  }

  train(trainingsSet) {
    this._trainer.train(trainingsSet, {
      rate: .1,
      iterations: 100000,
      error: .005,
      shuffle: true,
      log: 1000,
      cost: Trainer.cost.CROSS_ENTROPY,
    });
  }

  activate(vector) {
    return this._network.activate(vector);
  }

}

export default MultiLayerPerceptron;
