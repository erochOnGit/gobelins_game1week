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
            picurl: "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2019/04/eso1644bsmall.jpg",
            value: 1,
          },
          {
            content: "bonjour",
            picurl: "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2019/04/eso1644bsmall.jpg",
            value: 1,
          }
        ],
        { content: "je", picurl: "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2019/04/eso1644bsmall.jpg", similarWords: ["tu", "j'y", "jus"] },
        {
          content: "voudrai",
          picurl: "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2019/04/eso1644bsmall.jpg",
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

// APP //

import App from "./App/App";

const app = new App();
app.init();
