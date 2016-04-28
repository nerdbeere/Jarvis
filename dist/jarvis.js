'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _discord = require('discord.js');

var _discord2 = _interopRequireDefault(_discord);

var _nodeLinq = require('node-linq');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Jarvis = function () {
  function Jarvis(brain) {
    var _this = this;

    _classCallCheck(this, Jarvis);

    this._brain = brain;
    this._bot = new _discord2.default.Client();

    this._bot.on('message', function (message) {
      var mentions = new _nodeLinq.LINQ(message.mentions);
      if (mentions.Any(function (e) {
        return e.username == 'jk-jarvis';
      })) _this._handleMessage(message);
    });
  }

  _createClass(Jarvis, [{
    key: 'connect',
    value: function connect(token) {
      this._bot.loginWithToken(token).then(function () {
        console.log('connected.');
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: '_handleMessage',
    value: function _handleMessage(message) {
      var predictions = this._brain.predict(message.content);
      var sureness = 0;
      var command = void 0;
      for (var i = 0; i < predictions.length; i++) {
        if (predictions[i].prediction > sureness) {
          sureness = predictions[i].prediction;
          command = predictions[i].command;
        }
      }

      if (sureness < 0.7) {
        console.log(predictions);
        this._bot.reply(message, 'I did not understand.');
      } else {
        this._bot.reply(message, command);
      }
    }
  }]);

  return Jarvis;
}();

exports.default = Jarvis;
//# sourceMappingURL=Jarvis.js.map
