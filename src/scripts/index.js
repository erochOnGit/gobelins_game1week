import "../styles/index.scss";

if (process.env.NODE_ENV === "development") {
  require("../index.html");
}
//gonna go in a file.json
const data = {
  sentences: [
    {
      words: [
        {
          content: "bonjour",
          picurl: "",
          similarWords: ["bonne", "contour", "jour"],
        },
        { content: "je", picurl: "", similarWords: ["tu", "j'y", "jus"] },
        {
          content: "voudrai",
          picurl: "",
          similarWords: ["hourra", "prendrai", "mangerai"],
        },
        { content: "du", picurl: "", similarWords: ["dis", "dans", "de"] },
        {
          content: "pain",
          picurl: "",
          similarWords: ["pan", "pour", "pendre"],
        },
      ],
    },
  ],
};

const Game = require("./Game/Game");

const game = new Game();
game.init({ data });
console.log(game);

console.log("webpack starterkit");
