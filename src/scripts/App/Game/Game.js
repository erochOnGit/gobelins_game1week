const Sentence = require("./Sentence/Sentence");

class Game {
  constructor(router) {
    this.router = router;
    this.sentences = [];
    this.step = 0;
    this.$scene = document.getElementById("scene");
    this.bubbles = [];
    this.bubbleCount = 10;
    this.wordCount = 0;
    this.transitioning = false;
  }
  getStep() {
    console.log("meh");
  }
  generateBubbles() {
    this.$scene = document.getElementById("scene");
    let currentSentence = this.sentences[this.step];
    let currentWordList =
      currentSentence.words[currentSentence.listIdWordsSentence.length];
    for (let i = 0; i < this.bubbleCount; i++) {
      let currentWord = currentWordList[i % currentWordList.length];
      console.log(currentWord);
      let wordHTML = currentWord.picUrl
        ? `<img id="${currentWord.content + i}" src="${
            currentWord.picUrl
          }" class="bubble" data-position=0,0 data-direction=${Math.random()},${Math.random()}>`
        : `<div id="${
            currentWord.content + i
          }"  class="bubble" data-position=0,0 data-direction=${Math.random()},${Math.random()}>${
            currentWord.content
          }</div>`;

      this.bubbles.push(currentWord.content + i);
      this.$scene.innerHTML = this.$scene.innerHTML + wordHTML;
    }
    let bubble = document.querySelectorAll(".bubble");
    let handleclick = ({ wordListId, wordId }) => {
      return () => {
        currentSentence.addWord(wordListId, wordId);
        if (this.sentences[this.step].isFinish) {
          let bubble = document.querySelectorAll(".bubble");
          for (let i = 0; i < bubble.length; i++) {
            bubble[i].remove();
          }
        } else {
          this.nextWord();
        }
      };
    };
    for (let k = 0; k < bubble.length; k++) {
      bubble[k].addEventListener(
        "click",
        handleclick({
          wordListId: currentSentence.listIdWordsSentence.length,
          wordId: k % currentWordList.length,
        }).bind(this),
        false
      );
    }
  }
  init({ data }) {
    for (let i = 0; i < data.sentences.length; i++) {
      let stce = new Sentence(this.router);
      stce.init({ data: data.sentences[i] });
      this.sentences.push(stce);
    }
    this.generateBubbles();
  }
  nextWord() {
    this.transitioning = true;
    let bubble = document.querySelectorAll(".bubble");
    for (let i = 0; i < bubble.length; i++) {
      bubble[i].remove();
    }
    this.generateBubbles();
    this.transitioning = false;
  }
  nextStep() {
    this.step++;
    let bubble = document.querySelectorAll(".bubble");
    for (let i = 0; i < bubble.length; i++) {
      console.log(i);
      bubble[i].remove();
      this.generateBubbles();
    }
  }
  update() {
    if (this.transitioning) {
      return;
    }
    let bubbles = document.querySelectorAll(".bubble");
    for (let i = 0; i < bubbles.length; i++) {
      let bubble = bubbles[i];
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
      if (position[1] < 0) {
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
