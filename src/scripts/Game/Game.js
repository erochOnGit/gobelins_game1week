const Sentence = require("./Sentence/Sentence");

class Game {
  constructor(toto) {
    this.sentences = [];
    this.step = 0;
    this.$scene = document.getElementById("scene");
    this.bubbles = [];
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
    this.$scene = document.getElementById("scene");
    for (let i = 0; i < 10; i++) {
      let currentSentence = this.sentences[this.step];
      let currentWordList = this.sentences[this.step].words[
        currentSentence.listWordsSentence.length
      ];
      let currentWord = currentWordList[i % currentWordList.length];
      let wordHTML = currentWord.picUrl
        ? `<img id="${currentWord.content + i}" class="bubble" src="${
            currentWord.picUrl
          }">`
        : `<div id="${
            currentWord.content + i
          }" class="bubble" data-position=0,0 data-direction=${Math.random()*2},${Math.random()*2}>${
            currentWord.content
          }</div>`;
      this.bubbles.push(currentWord.content + i);
      this.$scene.innerHTML = this.$scene.innerHTML + wordHTML;
    }
  }
  update() {
    for (let i = 0; i < this.bubbles.length; i++) {
      let bubble = document.getElementById(this.bubbles[i]);
      let direction = bubble.dataset.direction.split(",");
      direction[0] = parseFloat(direction[0]);
      direction[1] = parseFloat(direction[1]);
      let position = bubble.dataset.position.split(",");
      position[0] = parseFloat(position[0]) + 2 * direction[0];
      position[1] = parseFloat(position[1]) + 2 * direction[1];
      //boundariesbouncing
      //X
      if (position[0] + bubble.clientWidth >= window.innerWidth) {
        direction[0] *= -1;
        position[0] = parseFloat(position[0]) + 2 * direction[0];
      }
      if (position[0] < 0) {
        direction[0] *= -1;
        position[0] = parseFloat(position[0]) + 2 * direction[0];
      }
      //Y
      if (position[1] + bubble.clientHeight >= window.innerHeight) {
        direction[1] *= -1;
        position[1] = parseFloat(position[1]) + 2 * direction[1];
      }
      if (position[1]  < 0) {
        direction[1] *= -1;
        position[1] = parseFloat(position[1]) + 2 * direction[1];
      }
      bubble.style.left = position[0] + "px";
      bubble.style.top = position[1] + "px";
      bubble.dataset.position = position.join();
      bubble.dataset.direction = direction.join();
    }
  }
}

export default Game;
