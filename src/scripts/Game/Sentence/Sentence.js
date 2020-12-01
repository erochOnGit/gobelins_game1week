const Word = require("./Word/Word");

class Sentence {
  constructor(sentence) {
    this.words = [];
    this.wordsFound = [];
  }
  init({ data }) {
    console.log(data);
    for (let i = 0; i < data.words.length; i++) {
      let wrd = new Word();
      wrd.init({ data: data.words[i] });
      this.words.push(wrd);
    }
  }
}

module.exports = Sentence;
