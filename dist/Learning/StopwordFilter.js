'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stopwords = require('stopwords');

var _nodeLinq = require('node-linq');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StopwordFilter = function () {
  function StopwordFilter() {
    _classCallCheck(this, StopwordFilter);

    this._stopwords = new _nodeLinq.LINQ(_stopwords.english);
  }

  _createClass(StopwordFilter, [{
    key: 'isStopword',
    value: function isStopword(token) {
      return this._stopwords.Contains(token);
    }
  }]);

  return StopwordFilter;
}();

exports.default = StopwordFilter;
//# sourceMappingURL=StopwordFilter.js.map
