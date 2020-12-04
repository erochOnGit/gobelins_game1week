const Word = require("./Word/Word");

class Sentence {
  constructor(router) {
    this.words = [];
    this.router = router;
    this.sizeMaxSentence = 6;
    this.sizeCurrentSentence = 0;
    this.listIdWordsSentence = [];
    this.scoreSuccess = 5;
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
    let wordHTML = "";
    let active = "";
    this.words.forEach((w, index) => {
      if (index === 0) {
        active = "active";
      } else {
        active = "";
      }
      wordHTML =
        wordHTML +
        `<div class="selectedWord w${this.words.length} ${active}"></div>`;
    });
    this.$sentence.innerHTML = this.$sentence.innerHTML + wordHTML;
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
      wordHTML = `${wordUrl}`;
    } else {
      const wordText = this.words[wordListId][wordId].content;
      wordHTML = `<p>${wordText}</p>`;
    }
    this.$sentence.children[wordListId].innerHTML = wordHTML;
    this.$sentence.children[wordListId].classList.remove("active");
    this.$sentence.children[wordListId + 1] &&
      this.$sentence.children[wordListId + 1].classList.add("active");
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

export default Sentence;
