const Sentence = require("./Sentence/Sentence");

class Game {
  constructor(toto) {
    this.sentences = [];
    this.step = 0;
  }
  getStep() {
    console.log("meh");
  }
  init(data) {
    // let stce = new Sentence();
    // stce.init({ data: data });
    if (data.levels.length) {
      for (let i = 0; i < data.levels.length; i++) {
        // console.log(data.levels.length)
        // let stce = new Sentence();
        // stce.init({ data: data.levels[i] });
        // this.sentences.push(stce);
      }
  
      // this.sentences[0].addWord(1)
    }
  }
}

module.exports = Game;
