"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vocabulary = function () {
  function Vocabulary(tokenizer) {
    _classCallCheck(this, Vocabulary);

    this._tokenizer = tokenizer;
    this._token = [];
  }

  _createClass(Vocabulary, [{
    key: "addTokenFromPhrase",
    value: function addTokenFromPhrase(phrase) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._tokenizer.tokenize(phrase)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var token = _step.value;

          this.addToken(token);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "addToken",
    value: function addToken(token) {
      if (this.getIndex(token) > -1) return;
      this._token.push(token);
    }
  }, {
    key: "getToken",
    value: function getToken(index) {
      return this._token[index];
    }
  }, {
    key: "getIndex",
    value: function getIndex(token) {
      return this._token.indexOf(token);
    }
  }, {
    key: "getVector",
    value: function getVector(token) {
      var vector = [];
      for (var i = 0; i < this._token.length; i++) {
        vector[i] = this._token[i] === token ? 1 : 0;
      }

      return vector;
    }
  }, {
    key: "getVectorFromPhrase",
    value: function getVectorFromPhrase(phrase) {
      var vector = [];
      var token = this._tokenizer.tokenize(phrase);

      for (var i = 0; i < this._token.length; i++) {
        vector[i] = token.indexOf(this._token[i]) > -1 ? 1 : 0;
      }

      return vector;
    }
  }, {
    key: "token",
    get: function get() {
      return this._token;
    }
  }, {
    key: "length",
    get: function get() {
      return this._token.length;
    }
  }]);

  return Vocabulary;
}();

exports.default = Vocabulary;
//# sourceMappingURL=Vocabulary.js.map
