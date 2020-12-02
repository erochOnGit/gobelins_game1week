import "../styles/index.scss";
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
            picurl: "",
            value: 5,
          },
          {
            content: "bonne",
            picurl: "",
            value: 4,
          },
          {
            content: "contour",
            picurl: "",
            value: 3,
          },
          {
            content: "jour",
            picurl: "",
            value: 2,
          },
        ],
        [
          { content: "je", picurl: "", value: 5 },
          { content: "tu", picurl: "", value: 4 },
          { content: "j'y", picurl: "", value: 3 },
          { content: "jus", picurl: "", value: 2 },
        ],
        [
          { content: "voudrai", picurl: "", value: 5 },
          { content: "prendrai", picurl: "", value: 4 },
          { content: "mangerai", picurl: "", value: 3 },
          { content: "hourra", picurl: "", value: 2 },
        ],
        [
          { content: "du", picurl: "", value: 5 },
          { content: "dis", picurl: "", value: 4 },
          { content: "dans", picurl: "", value: 3 },
          { content: "de", picurl: "", value: 2 },
        ],
        [
          { content: "pain", picurl: "", value: 5 },
          { content: "pan", picurl: "", value: 4 },
          { content: "pour", picurl: "", value: 3 },
          { content: "pendre", picurl: "", value: 2 },
        ],
      ],
    },
  ],
};

// APP //

import App from "./App/App";

const app = new App();
app.init();
