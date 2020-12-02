const Word = require("./Word/Word");

class Sentence {
  constructor(sentence) {
    this.words = [];
    this.wordsFound = [];
    this.listWordsSentence = [];
  }
  init({ data }) {
    for (let i = 0; i < data.words.length; i++) {
      let wordList = [];
      for (let j = 0; j < data.words[i].length; j++) {
        let wrd = new Word();
        wrd.init({ data: data.words[i][j] });
        wordList.push(wrd);
      }
      this.words.push(wordList);
    }
  }
}

module.exports = Sentence;
