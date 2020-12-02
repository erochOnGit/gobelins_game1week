import "../styles/index.scss";
import Game from "./App/Game/Game";
if (process.env.NODE_ENV === "development") {
  require("../index.html");
}

//gonna go in a file.json
const data = {
  sentences: [
    {
      words: [
        [
          {
            content: "bonjour",
            picUrl: "http://localhost:8080/public/words/p1_m1_1.svg",
            value: 5,
          },
          {
            content: "bonsoir",
            picUrl: "http://localhost:8080/public/words/p1_m1_2.svg",
            value: 4,
          },
          {
            content: "bon appetit",
            picUrl: "http://localhost:8080/public/words/p1_m1_3.svg",
            value: 3,
          },
        ],
        [
          {
            content: "madame",
            picUrl: "http://localhost:8080/public/words/p1_m2_1.svg",
            value: 5,
          },
          {
            content: "monsieur",
            picUrl: "http://localhost:8080/public/words/p1_m2_2.svg",
            value: 4,
          },
          {
            content: "grand-mère",
            picUrl: "http://localhost:8080/public/words/p1_m2_3.svg",
            value: 3,
          },
        ],
        [
          { content: "j'aimerais", picUrl: "http://localhost:8080/public/words/p1_m3_1.svg", value: 5 },
          { content: "je décide", picUrl: "http://localhost:8080/public/words/p1_m3_2.svg", value: 4 },
          { content: "je préfère", picUrl: "http://localhost:8080/public/words/p1_m3_3.svg", value: 3 },
        ],
        [
          { content: "bien cuite", picUrl: "http://localhost:8080/public/words/p1_m5_1.svg", value: 5 },
          { content: "croustillant", picUrl: "http://localhost:8080/public/words/p1_m5_2.svg", value: 4 },
          { content: "moelleux", picUrl: "http://localhost:8080/public/words/p1_m5_3.svg", value: 3 },
        ],
        [
          { content: "s'il vous plait", picUrl: "http://localhost:8080/public/words/p1_m6_1.svg", value: 5 },
          { content: "de rien", picUrl: "http://localhost:8080/public/words/p1_m6_2.svg", value: 4 },
          { content: "d'accord", picUrl: "http://localhost:8080/public/words/p1_m6_3.svg", value: 3 },
        ],
      ],
    },
  ],
};

// APP //

// import App from "./App/App";

// const app = new App();
// app.init();

const game = new Game();
game.init({ data });

function render(timestamp) {
  game.update();
  requestAnimationFrame(render);
}

requestAnimationFrame(render);
