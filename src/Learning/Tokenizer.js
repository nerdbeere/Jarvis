class Tokenizer {

  constructor(filter, transformer) {
    this._filter = filter;
    this._transformer = transformer;
  }

  tokenize(phrase) {
    let token = [];

    for (let t of phrase.split(' ')) {
      let keep = true;
      for (let filter of this._filter) {
        if (!filter.filter(t)) {
          keep = false;
          break;
        }
      }

      if (!keep)
          continue;

      for (let transformer of this._transformer) {
        t = transformer.transform(t);
      }

      token.push(t);
    }

    return token;
  }

}

export default Tokenizer;
