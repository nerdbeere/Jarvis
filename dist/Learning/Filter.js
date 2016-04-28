'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stopwords = require('stopwords');

var _nodeLinq = require('node-linq');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Filter = function () {
  function Filter() {
    _classCallCheck(this, Filter);

    this._stopwords = new _nodeLinq.LINQ(_stopwords.english);
  }

  _createClass(Filter, [{
    key: 'filter',
    value: function filter(token) {
      if (this._stopwords.Contains(token)) return false;

      return true;
    }
  }]);

  return Filter;
}();
//# sourceMappingURL=Filter.js.map
