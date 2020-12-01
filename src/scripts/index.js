import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

// CLASSES //

// Words

class Words {
  constructor() {
    this.listWords = ["toto", "titi", "tata"];
  }
  addWord() {
    
  }
}

// Sentence

class Sentence {
  constructor() {
    this.$sentence = document.querySelector('#sentence');
    this.sizeMaxSentence = 6;
    this.sizeCurrentSentence = 0;
    this.listWordsSentence = [];
    this.dictWordsPoint = { "toto": 1 };
    this.dictWordsUrl = { "toto": "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2019/04/eso1644bsmall.jpg" };
    this.scoreSuccess = 2;
    this.isSuccess = false;
    this.isFinish = false;
  }
  addWord(word) {
    this.listWordsSentence.push(word);
    this.sizeCurrentSentence++;
    this.appendWord(word);
    this.controlIsFinish();
  }
  appendWord(word) {
    const wordUrl = this.dictWordsUrl[word];
    const wordHTML = `<img src="${wordUrl}"></p>`;    
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
    
    for (let i = 0; i < this.listWordsSentence.length; i++) {
      const wordSentence = this.listWordsSentence[i];
      const scoreWord = this.dictWordsPoint[wordSentence];
      scoreSentence += scoreWord;
    }
  
    this.isSuccess = scoreSentence > this.scoreSuccess ? true : false;
  }
}


// APP //

const sentence = new Sentence();

sentence.addWord("toto");
sentence.addWord("toto");
sentence.addWord("toto");
sentence.addWord("toto");
sentence.addWord("toto");
sentence.addWord("toto");
sentence.addWord("toto");
console.log(sentence.isFinish);
console.log(sentence.isSuccess);
