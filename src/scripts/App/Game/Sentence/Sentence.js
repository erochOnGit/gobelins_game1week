const Word = require("./Word/Word");

class Sentence {
  constructor(router) {
    this.words = [];
    this.router = router;
    this.sizeMaxSentence = 6;
    this.sizeCurrentSentence = 0;
    this.listIdWordsSentence = [];
    this.scoreSuccess = 2;
    this.isSuccess = false;
    this.isFinish = false;
  }

  init({ data }) {
    for (let i = 0; i < data.words.length; i++) {
      let wordList = [];
      for (let j = 0; j < data.words[i].length; j++) {
        let wrd = new Word(this.router);
        wrd.init({ data: data.words[i][j] });
        wordList.push(wrd);
      }
      this.words.push(wordList);
    }
    this.sizeMaxSentence = data.words.length;
  }
  updateContainer(pageRoute) {
    this.$sentence = document.querySelector(pageRoute + " #sentence");
  }
  addWord(wordListId, wordId) {
    this.listIdWordsSentence.push(wordId);
    this.sizeCurrentSentence++;
    this.appendWord(wordListId, wordId);
    this.controlIsFinish();
  }
  appendWord(wordListId, wordId) {
    let wordHTML = null;
    if (this.words[wordListId][wordId].picUrl) {
      const wordUrl = this.words[wordListId][wordId].picUrl;
      wordHTML = `<img src="${wordUrl}"/>`;
    } else {
      const wordText = this.words[wordListId][wordId].content;
      wordHTML = `<p>${wordText}</p>`;
    }

    this.$sentence.innerHTML = this.$sentence.innerHTML + wordHTML;
  }
  controlIsFinish() {
    if (this.sizeCurrentSentence >= this.sizeMaxSentence) {
      this.isFinish = true;
      this.controlIsSuccess();
    }
  }
  controlIsSuccess() {
    let scoreSentence = 0;
    for (let i = 0; i < this.listIdWordsSentence.length; i++) {
      const idWordSentence = this.listIdWordsSentence[i];
      const scoreWord = this.words[i][idWordSentence].value;
      scoreSentence += scoreWord;
    }
    this.isSuccess = scoreSentence > this.scoreSuccess ? true : false;
  }
}

module.exports = Sentence;
