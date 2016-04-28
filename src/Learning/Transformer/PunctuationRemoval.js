class PunctuationRemoval {

  transform(token) {
    return token.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  }

}

export default PunctuationRemoval;
