import { english } from 'stopwords';
import { LINQ } from 'node-linq';

class StopwordFilter {

  constructor() {
    this._stopwords = new LINQ(english);
  }

  filter(token) {
    return !this._stopwords.Contains(token);
  }

}

export default StopwordFilter;
