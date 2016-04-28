class Vocabulary {

  constructor(tokenizer) {
    this._tokenizer = tokenizer;
    this._token = [];
  }

  get token() {
    return this._token;
  }

  get length() {
    return this._token.length;
  }

  addTokenFromPhrase(phrase) {
    for (let token of this._tokenizer.tokenize(phrase)) {
      this.addToken(token);
    }
  }

  addToken(token) {
    if (this.getIndex(token) > -1)
        return;
    this._token.push(token);
  }

  getToken(index) {
    return this._token[index];
  }

  getIndex(token) {
    return this._token.indexOf(token);
  }

  getVector(token) {
    var vector = [];
    for (let i = 0; i < this._token.length; i++) {
      vector[i] = this._token[i] === token ? 1 : 0;
    }

    return vector;
  }

  getVectorFromPhrase(phrase) {
    var vector = [];
    var token = this._tokenizer.tokenize(phrase);

    for (let i = 0; i < this._token.length; i++) {
      vector[i] = token.indexOf(this._token[i]) > -1 ? 1 : 0;
    }

    return vector;
  }

}

export default Vocabulary;
