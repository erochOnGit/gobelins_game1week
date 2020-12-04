const Sentence = require("./Sentence/Sentence");

class Game {
  constructor(router, gui) {
    this.router = router;
    this.sentences = [];
    this.step = 0;
    this.bubbles = [];
    this.bubbleCount = 10;
    this.wordCount = 0;
    this.transitioning = false;
    this.gui = gui;
    this.guiItem = [];
  }
  init({ data, gameStep, levelStep }) {
    this.app = data;
    this.gameStep = gameStep;
    this.levelStep = levelStep;
    const content = data.games[this.gameStep].levels.map((lvl) => {
      return lvl.content.sentences[0];
    });
    for (let i = 0; i < content.length; i++) {
      let stce = new Sentence(this.router);
      stce.init({ data: content[i] });
      this.sentences.push(stce);
    }
    console.log("INIT", this.sentences);
    this.obj = {
      size: 23,
      speed: 2,
    };

    // String field
    this.guiItem.push(this.gui.add(this.obj, "speed"));
    this.guiItem.push(this.gui.add(this.obj, "size"));
  }
  reset() {
    console.log("RESET");
    this.sentences = [];
    this.step = 0;
    this.bubbles = [];
    this.bubbleCount = 10;
    this.wordCount = 0;
    this.transitioning = false;
  }
  updateStep(gameStep, levelStep) {
    this.gameStep = gameStep;
    this.levelStep = levelStep;
  }
  setUpContainer() {
    console.log(this.levelStep, this.sentences);
    this.$container = document.querySelector(
      `.games_${this.gameStep}_levels_${this.levelStep}`
    );
    const wordHTML = `
    <div id="game">
      <div id="scene"></div>
      <div id="sentence"></div>
    </div>`;
    this.$container.innerHTML = this.$container.innerHTML + wordHTML;
    this.$game = document.querySelector(
      `.games_${this.gameStep}_levels_${this.levelStep} #game`
    );
    this.$scene = document.querySelector(
      `.games_${this.gameStep}_levels_${this.levelStep} #scene`
    );
    this.sentences[this.levelStep].updateContainer(
      `.games_${this.gameStep}_levels_${this.levelStep}`
    );
  }
  generateBubbles() {
    let currentSentence = this.sentences[this.levelStep];
    let currentWordList =
      currentSentence.words[currentSentence.listIdWordsSentence.length];
    console.log(this.obj);
    for (let i = 0; i < this.bubbleCount; i++) {
      let currentWord = currentWordList[i % currentWordList.length];
      let wordHTML = currentWord.picUrl
        ? `<div class="bubble" data-position=0,0 data-direction=${Math.random()},${Math.random()} id="${
            currentWord.content + i
          }">
            <div class="bubble_relativeContainer">
              ${currentWord.picUrl}
            </div>
          </div>`
        : `<div id="${
            currentWord.content + i
          }"  class="bubble" data-position=0,0 data-direction=${Math.random()},${Math.random()}>${
            currentWord.content
          }</div>`;

      this.bubbles.push(currentWord.content + i);
      this.$scene.innerHTML = this.$scene.innerHTML + wordHTML;
    }
    let bubble = document.querySelectorAll(".bubble");
    let svg = document.querySelectorAll(".bubble_relativeContainer svg");
    let handleclick = ({ wordListId, wordId }) => {
      return () => {
        currentSentence.addWord(wordListId, wordId);
        if (this.sentences[this.levelStep].isFinish) {
          this.$game.remove();
          if (this.sentences[this.levelStep].isSuccess) {
            if (
              this.levelStep ==
              this.app.games[this.gameStep].levels.length - 1
            ) {
              this.router.navigate(`/games/${this.gameStep}/ending`);
            } else {
              // this.levelStep += 1;
              // this.router.navigate(`/games/${this.gameStep}/levels/${this.levelStep}`);
              this.router.navigate(`/games/${this.gameStep}/questionning`);
            }
          } else {
            this.router.navigate(`/games/${this.gameStep}/repeating`);
          }

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
      svg[k] &&
        svg[k].addEventListener(
          "click",
          handleclick({
            wordListId: currentSentence.listIdWordsSentence.length,
            wordId: k % currentWordList.length,
          }).bind(this),
          false
        );
    }
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
      bubble[i].remove();
      this.generateBubbles();
    }
  }
  update() {
    if (this.transitioning) {
      return;
    }
    let speed = this.obj.speed;
    let bubbles = document.querySelectorAll(".bubble");
    for (let i = 0; i < bubbles.length; i++) {
      let bubble = bubbles[i];
      let direction = bubble.dataset.direction.split(",");
      direction[0] = parseFloat(direction[0]);
      direction[1] = parseFloat(direction[1]);
      let position = bubble.dataset.position.split(",");
      position[0] = parseFloat(position[0]) + speed * direction[0];
      position[1] = parseFloat(position[1]) + speed * direction[1];
      //boundariesbouncing
      //X
      if (position[0] + bubble.clientWidth >= window.innerWidth) {
        direction[0] *= -1;
        position[0] = parseFloat(position[0]) + speed * direction[0];
      }
      if (position[0] < 0) {
        direction[0] *= -1;
        position[0] = parseFloat(position[0]) + speed * direction[0];
      }
      //Y
      if (position[1] + bubble.clientHeight >= window.innerHeight) {
        direction[1] *= -1;
        position[1] = parseFloat(position[1]) + speed * direction[1];
      }
      if (position[1] < 0) {
        direction[1] *= -1;
        position[1] = parseFloat(position[1]) + speed * direction[1];
      }
      bubble.style.left = position[0] + "px";
      bubble.style.top = position[1] + "px";
      bubble.dataset.position = position.join();
      bubble.dataset.direction = direction.join();
    }
  }
}

export default Game;
