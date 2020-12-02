// const Game = require("./Game/Game");

// const game = new Game();
// game.init({ data });
// console.log(game);

// const game = new Game();
// game.init({ data });
// console.log(game);

// function render(timestamp) {
//   game.update();
//   requestAnimationFrame(render);
// }

// requestAnimationFrame(render);

// const app = {
//     routes: {
//         "home": "/",
//         "introduction": "/introduction/",
//         "games": {
//             "begin": "",
//             "sentence": {

//             }
//         }
//     }
// }
// const app = {
//     routes: {
//         games: [
//             [
//                 "/games/0/sentence/0",
//                 "/games/0/sentence/1"
//             ],
//             [
//                 "/games/1/sentence/0"
//             ]
//         ]
//     }
// }

// console.log(getRoutes(routes));

import Router from "../Router/Router";

export default class App {
  constructor() {
    this.routes = {
      start: {},
      games: [
        {
          begining: {},
          levels: [{}],
          ending: {},
        },
      ],
      finish: {},
    };
  }
  init() {
    this.addRoutes(this.routes);
    const paths = this.getRoutes(this.routes);

    const router = new Router({
      mode: "history",
      root: "/",
    });

    // for (let i = 0; i < paths.length; i++) {
    //     const path = paths[i];
    //     console.log(path);
    //     router
    //     .add(path, () => {
    //         console.log("ok");
    //     });
    // }

    router.add(/start/, () => {
      console.log("ok");
    });

    // router
    // .add("/about", () => {
    //     console.log('welcome in about page');
    // })
    // .add(/products\/(.*)\/specification\/(.*)/, (id, specification) => {
    //     alert(`products: ${id} specification: ${specification}`);
    // })
    // .add('', () => {
    //     // general controller
    //     console.log('welcome in catch all controller');
    // });

    router.navigate(/start/);
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
          if (!Array.isArray(n.obj[k])) {
            let pathFull = "";
            for (let j = 0; j < path.length; j++) {
              pathFull += `/${path[j]}`;
            }
            n.obj[k].path = pathFull;
          }
          nodes.unshift({
            obj: n.obj[k],
            path: path,
          });
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
      });
    }
    return paths;
  }
}
