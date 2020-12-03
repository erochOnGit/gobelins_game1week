import Game from "./Game/Game";

import Router from "../Router/Router";

export default class App {
  constructor() {
    this.$app = document.querySelector("#app");
    const sliptHash = window.location.hash.split("/");
    if (sliptHash.length <= 2) {
      this.gameStep = 0;
      this.levelStep = 0;
    } else {
      for (let i = 0; i < sliptHash.length; i++) {
        const hash = sliptHash[i];
        if (hash == "games") {
          this.gameStep = parseInt(sliptHash[i + 1]);
        }
        if (hash == "levels") {
          this.levelStep = parseInt(sliptHash[i + 1]);
        }
      }
    }
    // this.app : si c'est pas dans content c'est que c'est une page (déso c'est sale mais j'ai pas le temps)
    this.app = {
      start: {
        content: {
          toto: "toto",
          message: {
            titi: "titi",
            tutu: "tutu",
          },
        },
      },
      games: [
        {
          begining: {
            content: {
              videoURL: "../public/videos/motion-introduction.mp4",
            },
          },
          levels: [
            {
              content: {
                sentences: [
                  {
                    words: [
                      [
                        {
                          content: "bonjour",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m1_1.svg",
                          value: 5,
                        },
                        {
                          content: "bonsoir",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m1_2.svg",
                          value: 4,
                        },
                        {
                          content: "bon appetit",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m1_3.svg",
                          value: 3,
                        },
                      ],
                      [
                        {
                          content: "madame",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m2_1.svg",
                          value: 5,
                        },
                        {
                          content: "monsieur",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m2_2.svg",
                          value: 4,
                        },
                        {
                          content: "grand-mère",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m2_3.svg",
                          value: 3,
                        },
                      ],
                      [
                        {
                          content: "j'aimerais",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m3_1.svg",
                          value: 5,
                        },
                        {
                          content: "je décide",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m3_2.svg",
                          value: 4,
                        },
                        {
                          content: "je préfère",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m3_3.svg",
                          value: 3,
                        },
                      ],
                      [
                        {
                          content: "bien cuite",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m5_1.svg",
                          value: 5,
                        },
                        {
                          content: "croustillant",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m5_2.svg",
                          value: 4,
                        },
                        {
                          content: "moelleux",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m5_3.svg",
                          value: 3,
                        },
                      ],
                      [
                        {
                          content: "s'il vous plait",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m6_1.svg",
                          value: 5,
                        },
                        {
                          content: "de rien",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m6_2.svg",
                          value: 4,
                        },
                        {
                          content: "d'accord",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m6_3.svg",
                          value: 3,
                        },
                      ],
                    ],
                  },
                ],
              },
            },
            {
              content: {
                sentences: [
                  {
                    words: [
                      [
                        {
                          content: "SALUT",
                          picUrl: "",
                          value: 5,
                        },
                        {
                          content: "bonsoir",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m1_2.svg",
                          value: 4,
                        },
                        {
                          content: "bon appetit",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m1_3.svg",
                          value: 3,
                        },
                      ],
                      [
                        {
                          content: "madame",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m2_1.svg",
                          value: 5,
                        },
                        {
                          content: "monsieur",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m2_2.svg",
                          value: 4,
                        },
                        {
                          content: "grand-mère",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m2_3.svg",
                          value: 3,
                        },
                      ],
                      [
                        {
                          content: "j'aimerais",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m3_1.svg",
                          value: 5,
                        },
                        {
                          content: "je décide",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m3_2.svg",
                          value: 4,
                        },
                        {
                          content: "je préfère",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m3_3.svg",
                          value: 3,
                        },
                      ],
                      [
                        {
                          content: "bien cuite",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m5_1.svg",
                          value: 5,
                        },
                        {
                          content: "croustillant",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m5_2.svg",
                          value: 4,
                        },
                        {
                          content: "moelleux",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m5_3.svg",
                          value: 3,
                        },
                      ],
                      [
                        {
                          content: "s'il vous plait",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m6_1.svg",
                          value: 5,
                        },
                        {
                          content: "de rien",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m6_2.svg",
                          value: 4,
                        },
                        {
                          content: "d'accord",
                          picUrl:
                            "http://localhost:8080/public/words/p1_m6_3.svg",
                          value: 3,
                        },
                      ],
                    ],
                  },
                ],
              },
            },
          ],
          questionning: {
            content: {
              videoURL: "../public/videos/motion-suite.mp4",
            },
          },
          repeating: {
            content: {
              videoURL: "../public/videos/motion-repetition.mp4",
            },
          },
          ending: {
            content: {
              videoURL: "../public/videos/motion-fin.mp4",
            },
          },
        },
      ],
      finish: {},
    };
  }
  init() {
    this.addRoutes(this.app);
    this.paths = this.getRoutes(this.app);
    this.generatePages(this.app);

    this.router = new Router({
      mode: "hash",
      root: "/",
    });

    for (let i = 0; i < this.paths.length; i++) {
      const path = this.paths[i];
      this.router.add(path, (data) => {
        this.getPage();
      });
    }

    this.game = new Game(this.router);
    this.game.init({
      data: this.app,
      gameStep: this.gameStep,
      levelStep: this.levelStep,
    });
  }
  addRoutes(obj) {
    let nodes = [
      {
        obj: obj,
        path: [],
      },
    ];
    while (nodes.length > 0) {
      let n = nodes.pop();
      Object.keys(n.obj).forEach((k) => {
        if (typeof n.obj[k] === "object") {
          let path = n.path.concat(k);
          if (k !== "content") {
            if (!Array.isArray(n.obj[k])) {
              let pathFull = "";
              let nameFull = "";
              for (let j = 0; j < path.length; j++) {
                pathFull += `/${path[j]}`;
                nameFull += nameFull.length ? `_${path[j]}` : `${path[j]}`;
              }
              n.obj[k].name = nameFull;
              n.obj[k].path = pathFull;
            }
            nodes.unshift({
              obj: n.obj[k],
              path: path,
            });
          }
        }
      });
    }
  }
  getRoutes(root) {
    const paths = [];
    let nodes = [
      {
        obj: root,
        path: [],
      },
    ];
    while (nodes.length > 0) {
      let n = nodes.pop();
      Object.keys(n.obj).forEach((k) => {
        if (typeof n.obj[k] === "object") {
          let path = n.path.concat(k);
          if (k !== "content") {
            if (!Array.isArray(n.obj[k])) {
              let pathFull = "";
              for (let j = 0; j < path.length; j++) {
                pathFull += `/${path[j]}`;
              }
              paths.push(pathFull);
            }
            nodes.unshift({
              obj: n.obj[k],
              path: path,
            });
          }
        }
      });
    }
    return paths;
  }
  getPage() {
    const nameCurrentPage = this.generateClassName(window.location.hash);
    this.$pages = this.$app.querySelectorAll(".page");
    for (let i = 0; i < this.$pages.length; i++) {
      const page = this.$pages[i];
      page.classList.add("is-hide");
    }
    this.$el = this.$app.querySelector(`.${nameCurrentPage}`);
    this.$el.classList.remove("is-hide");

    switch (nameCurrentPage.replace(/_*[0-9]/g, "")) {
      case "start":
        this.getPageStart(nameCurrentPage);
        break;
      case "finish":
        this.getPageFinish(nameCurrentPage);
        break;
      case "games_begining":
        this.getPageGameBegining(nameCurrentPage);
        break;
      case "games_levels":
        this.getPageGameLevel(nameCurrentPage);
        break;
      case "games_questionning":
        this.getPageGameQuestionning(nameCurrentPage);
        break;
      case "games_repeating":
        this.getPageGameRepeating(nameCurrentPage);
        break;
      case "games_ending":
        this.getPageGameEnding(nameCurrentPage);
        break;
    }
  }
  getPageStart(page) {
    const $page = this.$app.querySelector(`.${page}`);
    const $button = $page.querySelector("button");
    $button.addEventListener("click", () => {
      this.router.navigate(`/games/${this.gameStep}/begining`);
    });
  }
  getPageFinish(page) {
    const $page = this.$app.querySelector(`.${page}`);
    const $button = $page.querySelector("button");
    $button.addEventListener("click", () => {
      this.gameStep = 0;
      this.router.navigate(`/start`);
    });
  }
  getPageGameBegining(page) {
    const $page = this.$app.querySelector(`.${page}`);
    const $video = $page.querySelector("video");
    $video.play();
    $video.addEventListener("ended", () => {
      this.router.navigate(`/games/${this.gameStep}/levels/${this.levelStep}`);
    });
  }

  getPageGameLevel(page) {
    const $page = this.$app.querySelector(`.${page}`);
    console.log(this.levelStep);

    this.game.updateStep(this.gameStep, this.levelStep);
    this.game.setUpContainer();
    this.game.generateBubbles();

    const render = () => {
      this.game.update();
      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
  }

  getPageGameQuestionning(page) {
    const $page = this.$app.querySelector(`.${page}`);
    const $video = $page.querySelector("video");
    $video.play();
    $video.addEventListener("ended", () => {
      this.levelStep += 1;
      this.router.navigate(`/games/${this.gameStep}/levels/${this.levelStep}`);
    });
  }
  getPageGameRepeating(page) {
    const $page = this.$app.querySelector(`.${page}`);
    const $video = $page.querySelector("video");
    $video.play();
    $video.addEventListener("ended", () => {
      this.router.navigate(`/games/${this.gameStep}/levels/${this.levelStep}`);
    });
  }
  getPageGameEnding(page) {
    const $page = this.$app.querySelector(`.${page}`);
    const $video = $page.querySelector("video");
    $video.play();
    $video.addEventListener("ended", () => {
      this.levelStep = 0;
      if (this.gameStep == this.app.games.length - 1) {
        this.gameStep = 0;
        this.router.navigate("/finish");
      } else {
        this.gameStep += 1;
        this.router.navigate(
          `/games/${this.gameStep}/levels/${this.levelStep}`
        );
      }
    });
  }
  generateClassName(str) {
    return str.toString().replace(/#\//g, "").replace(/\//g, "_");
  }
  generatePageName(str) {
    return str
      .toString()
      .replace(/#\//g, "")
      .replace(/\//g, "_")
      .replace(/_*[0-9]/g, "");
  }
  generatePages(app) {
    let nodes = [
      {
        obj: app,
        path: [],
      },
    ];
    while (nodes.length > 0) {
      let n = nodes.pop();
      Object.keys(n.obj).forEach((k) => {
        if (typeof n.obj[k] === "object") {
          let path = n.path.concat(k);
          if (k !== "content") {
            if (!Array.isArray(n.obj[k])) {
              this.generatePage(n.obj[k]);
            }
            nodes.unshift({
              obj: n.obj[k],
              path: path,
            });
          }
        }
      });
    }
  }
  generatePage(page) {
    switch (page.name.replace(/_*[0-9]/g, "")) {
      case "start":
        this.generatePageStart(page);
        break;
      case "finish":
        this.generatePageFinish(page);
        break;
      case "games":
        this.generatePageGame(page);
        break;
      case "games_begining":
        this.generatePageGameBegining(page);
        break;
      case "games_levels":
        this.generatePageGameLevel(page);
        break;
      case "games_questionning":
        this.generatePageGameQuestionning(page);
        break;
      case "games_repeating":
        this.generatePageGameRepeating(page);
        break;
      case "games_ending":
        this.generatePageGameEnding(page);
        break;
    }
  }
  generatePageStart(page) {
    this.$app.innerHTML += `
            <div class="is-hide page ${page.name}">
                <button>Start</button>
            </div>
        `;
  }
  generatePageFinish(page) {
    this.$app.innerHTML += `
            <div class="is-hide page ${page.name}">
            <button>Retry</button>
            </div>
        `;
  }
  generatePageGame(page) {
    if (!this.$games) {
      this.$app.innerHTML += `
                <div class="gamesList">
                </div>
            `;
      this.$games = this.$app.querySelector(".gamesList");
    }

    this.$games.innerHTML += `
            <div class="games ${page.name}">
            </div>
        `;
  }
  generatePageGameBegining(page) {
    const $games = this.$games.querySelectorAll(".games");
    for (let i = 0; i < $games.length; i++) {
      const $game = $games[i];
      if (page.name.match($game.className.split(" ")[1])) {
        $game.innerHTML += `
                    <div class="is-hide page ${page.name}">
                        <div class="container-video">
                            <video>
                                <source src=${page.content.videoURL} type="video/mp4">
                            </video>
                        </div>
                    </div>
                `;
      }
    }
  }
  generatePageGameLevel(page) {
    const $games = this.$games.querySelectorAll(".games");
    for (let i = 0; i < $games.length; i++) {
      const $game = $games[i];
      if (page.name.match($game.className.split(" ")[1])) {
        if (!this.$levels) {
          this.$levels = [];
        }

        if (!this.$levels[i]) {
          $game.innerHTML += `
                        <div class="levelsList">
                        </div>
                    `;
          this.$levels[i] = $game.querySelector(".levelsList");
        }

        this.$levels[i].innerHTML += `
                    <div class="is-hide page levels ${page.name}">
                        <p>Page ${page.name}</p>
                    </div>
                `;
      }
    }
  }
  generatePageGameQuestionning(page) {
    const $games = this.$games.querySelectorAll(".games");
    for (let i = 0; i < $games.length; i++) {
      const $game = $games[i];
      if (page.name.match($game.className.split(" ")[1])) {
        $game.innerHTML += `
                    <div class="is-hide page ${page.name}">
                        <div class="container-video">
                            <video>
                                <source src=${page.content.videoURL} type="video/mp4">
                            </video>
                        </div>
                    </div>
                `;
      }
    }
  }
  generatePageGameRepeating(page) {
    const $games = this.$games.querySelectorAll(".games");
    for (let i = 0; i < $games.length; i++) {
      const $game = $games[i];
      if (page.name.match($game.className.split(" ")[1])) {
        $game.innerHTML += `
                    <div class="is-hide page ${page.name}">
                        <div class="container-video">
                            <video>
                                <source src=${page.content.videoURL} type="video/mp4">
                            </video>
                        </div>
                    </div>
                `;
      }
    }
  }
  generatePageGameEnding(page) {
    const $games = this.$games.querySelectorAll(".games");
    for (let i = 0; i < $games.length; i++) {
      const $game = $games[i];
      if (page.name.match($game.className.split(" ")[1])) {
        $game.innerHTML += `
                    <div class="is-hide page ${page.name}">
                        <div class="container-video">
                            <video>
                                <source src=${page.content.videoURL} type="video/mp4">
                            </video>
                        </div>
                    </div>
                `;
      }
    }
  }
}
