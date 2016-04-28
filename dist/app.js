'use strict';

var _sourceMapSupport = require('source-map-support');

require('./commands/test');

var _Jarvis = require('./Jarvis');

var _Jarvis2 = _interopRequireDefault(_Jarvis);

var _Tokenizer = require('./Learning/Tokenizer');

var _Tokenizer2 = _interopRequireDefault(_Tokenizer);

var _Vocabulary = require('./Learning/Vocabulary');

var _Vocabulary2 = _interopRequireDefault(_Vocabulary);

var _StopwordFilter = require('./Learning/Filter/StopwordFilter');

var _StopwordFilter2 = _interopRequireDefault(_StopwordFilter);

var _Decapitalization = require('./Learning/Transformer/Decapitalization');

var _Decapitalization2 = _interopRequireDefault(_Decapitalization);

var _PunctuationRemoval = require('./Learning/Transformer/PunctuationRemoval');

var _PunctuationRemoval2 = _interopRequireDefault(_PunctuationRemoval);

var _Model = require('./Learning/Model');

var _Model2 = _interopRequireDefault(_Model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _sourceMapSupport.install)();

var tokenizer = new _Tokenizer2.default([new _StopwordFilter2.default()], [new _Decapitalization2.default(), new _PunctuationRemoval2.default()]);
var vocabulary = new _Vocabulary2.default(tokenizer);

var data = require('../data/phrases.json');

var trainingData = [];
for (var i = 0; i < data.Commands.length; i++) {
  for (var j = 0; j < data.Commands[i].Examples.length; j++) {

    vocabulary.addTokenFromPhrase(data.Commands[i].Examples[j]);

    var output = [];
    for (var k = 0; k < data.Commands.length; k++) {
      output[k] = i === k ? 1 : 0;
    }

    trainingData.push({
      phrase: data.Commands[i].Examples[j],
      output: output
    });
  }
}

var model = new _Model2.default();

model.train(trainingData, vocabulary, data.Commands);

var config = require('../config.json');
var jarvis = new _Jarvis2.default(model);

jarvis.connect(config.Discord.Token);
//# sourceMappingURL=app.js.map
