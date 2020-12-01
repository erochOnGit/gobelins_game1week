const Sentence = require("./Sentence/Sentence");

class Game {
  constructor(toto) {
    this.sentences = [];
    this.step = 0;
  }
  getStep() {
    console.log("meh");
  }
  init({ data }) {
    for (let i = 0; i < data.sentences.length; i++) {
      let stce = new Sentence();
      stce.init({ data: data.sentences[i] });
      this.sentences.push(stce);
    }
  }
}

module.exports = Game;
