const Word = require("./Word/Word");

class Sentence {
  constructor(sentence) {
    this.words = [];
    
    this.$sentence = document.querySelector('#sentence');
    this.sizeMaxSentence = 6;
    this.sizeCurrentSentence = 0;
    this.listIdWordsSentence = [];
    this.scoreSuccess = 2;
    this.isSuccess = false;
    this.isFinish = false;
  }
  init({ data }) {
    console.log(data);
    for (let i = 0; i < data.words.length; i++) {
      let wrd = new Word();
      wrd.init({ data: data.words[i] });
      this.words.push(wrd);
    }
  }
  addWord(id) {
    this.listIdWordsSentence.push(id);
    this.sizeCurrentSentence++;
    this.appendWord(id);
    this.controlIsFinish();
  }
  appendWord(id) {
    let wordHTML = null;
    if (this.words[id].picurl) {
      const wordUrl = this.words[id].picurl;
      wordHTML = `<img src="${wordUrl}"/>`;  
    } else {
      const wordText = this.words[id].picurl;
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
      const scoreWord = this.words[idWordSentence].value;
      scoreSentence += scoreWord;
    }
    this.isSuccess = scoreSentence > this.scoreSuccess ? true : false;
  }
}

module.exports = Sentence;
