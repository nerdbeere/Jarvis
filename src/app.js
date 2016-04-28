import { install } from 'source-map-support';
import './commands/test';
import Jarvis from './Jarvis';
import Tokenizer from './Learning/Tokenizer';
import Vocabulary from './Learning/Vocabulary';
import StopwordFilter from './Learning/Filter/StopwordFilter';
import Decapitalization from './Learning/Transformer/Decapitalization';
import PunctuationRemoval from './Learning/Transformer/PunctuationRemoval';
import Model from './Learning/Model';

install();

let tokenizer = new Tokenizer(
    [new StopwordFilter()],
    [new Decapitalization(), new PunctuationRemoval()]);
let vocabulary = new Vocabulary(tokenizer);

let data = require('../data/phrases.json');

let trainingData = [];
for (let i = 0; i < data.Commands.length; i++) {
  for (let j = 0; j < data.Commands[i].Examples.length; j++) {

    vocabulary.addTokenFromPhrase(data.Commands[i].Examples[j]);

    let output = [];
    for (let k = 0; k < data.Commands.length; k++) {
      output[k] = i === k ? 1 : 0;
    }

    trainingData.push({
      phrase: data.Commands[i].Examples[j],
      output: output,
    });
  }
}

var model = new Model();

model.train(trainingData, vocabulary, data.Commands);

let config = require('../config.json');
let jarvis = new Jarvis(model);

jarvis.connect(config.Discord.Token);
