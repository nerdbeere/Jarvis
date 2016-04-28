'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nodeLinq = require('node-linq');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Poke = function () {
  function Poke() {
    _classCallCheck(this, Poke);
  }

  _createClass(Poke, [{
    key: 'canExecute',
    value: function canExecute(message, bot) {
      return message.content.indexOf('poke') > -1;
    }
  }, {
    key: 'execute',
    value: function execute(message, bot) {
      var mentions = new _nodeLinq.LINQ(message.mentions);
      if (!mentions.Any(function (e) {
        return e.username != 'jk-jarvis';
      })) {
        bot.reply(message, 'Who should i poke?.');
        return;
      }

      var toPoke = mentions.Where(function (e) {
        return e.username != 'jk-jarvis';
      }).ToArray();
      for (var i = 0; i < toPoke.length; i++) {
        console.log(toPoke[i]);
        bot.sendMessage(message.channel, '@' + toPoke[i].username + '#' + toPoke[i].discriminator + ' poke!');
      }
    }
  }]);

  return Poke;
}();

exports.default = Poke;
//# sourceMappingURL=poke.js.map
