'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ping = function () {
  function Ping() {
    _classCallCheck(this, Ping);
  }

  _createClass(Ping, [{
    key: 'canExecute',
    value: function canExecute(message, bot) {
      return message.content.indexOf('ping') > -1;
    }
  }, {
    key: 'execute',
    value: function execute(message, bot) {
      bot.reply(message, 'Pong.');
    }
  }]);

  return Ping;
}();

exports.default = Ping;
//# sourceMappingURL=ping.js.map
