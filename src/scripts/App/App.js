import Game from "./Game/Game";

import Router from "../Router/Router";

export default class App {
    constructor() {
        this.$app = document.querySelector("#app")
        this.gameStep = 0;
        this.levelStep = 0;
        // this.app : si c'est pas dans content c'est que c'est une page (déso c'est sale mais j'ai pas le temps)
        this.app = {
            start: {
                content: {
                    toto: "toto",
                    message: {
                        titi: "titi",
                        tutu: "tutu"
                    }
                }
            },
            games: [
                {
                    begining: {
                        content: {
                            videoURL: "../public/videos/motion-introduction.mp4"
                        }
                    },
                    levels: [
                          {
                            content: {
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
                          },
                        ],
                    ending: {
                        content: {
                            videoURL: "../public/videos/motion-fin.mp4"
                        }
                    },
                }
            ],
            finish: {}
        }
    }
    init() {
        this.addRoutes(this.app);
        this.paths = this.getRoutes(this.app);
        this.generatePages(this.app);

        this.router = new Router({
            mode: 'hash',
            root: '/'
        });

        for (let i = 0; i < this.paths.length; i++) {
            const path = this.paths[i];
            this.router
            .add(path, (data) => {
                this.getPage()
            });
        }
    }
    addRoutes(obj) {
        let nodes = [{
            obj: obj,
            path: []
        }];
        while (nodes.length > 0) {
            let n = nodes.pop();
            Object.keys(n.obj).forEach(k => {
                if (typeof n.obj[k] === 'object') {
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
                            path: path
                        });
                    }
                }
            });
        }
    }
    getRoutes(root) {
        const paths = [];
        let nodes = [{
            obj: root,
            path: []
        }];
        while (nodes.length > 0) {
            let n = nodes.pop();
            Object.keys(n.obj).forEach(k => {
                if (typeof n.obj[k] === 'object') {
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
                            path: path
                        });
                    }
                }
            });
        }
        return paths;
    }
    getPage() {
        const nameCurrentPage = this.generateClassName(window.location.hash);
        this.$pages = this.$app.querySelectorAll('.page');
        for (let i = 0; i < this.$pages.length; i++) {
            const page = this.$pages[i];
            page.classList.add("is-hide");
        }
        this.$el = this.$app.querySelector(`.${nameCurrentPage}`);
        this.$el.classList.remove("is-hide");
        
        switch(nameCurrentPage.replace(/_*[0-9]/g, '')) {
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
            case "games_ending":
                this.getPageGameEnding(nameCurrentPage);
                break;
        }
    }
    getPageStart(page) {
        const $page = this.$app.querySelector(`.${page}`);
        const $button = $page.querySelector('button');
        $button.addEventListener('click', ()=>{
            this.router.navigate(`/games/${this.gameStep}/begining`)
        })
    }
    getPageFinish(page) {
        const $page = this.$app.querySelector(`.${page}`);
    }
    getPageGameBegining(page) {
        const $page = this.$app.querySelector(`.${page}`);
        const $video = $page.querySelector('video');
        $video.play();
        $video.addEventListener("ended", ()=>{
            this.router.navigate(`/games/${this.gameStep}/levels/${this.levelStep}`)
        });
    }
    getPageGameLevel(page) {
        const $page = this.$app.querySelector(`.${page}`);
    }
    getPageGameEnding(page) {
        const $page = this.$app.querySelector(`.${page}`);
        const $video = $page.querySelector('video');
        $video.play();
        $video.addEventListener("ended", ()=>{
            if (this.gameStep == this.app.games.length) {
                this.router.navigate('/finish')
            } else {
                this.gameStep += 1;
                this.router.navigate(`/games/${this.gameStep}/levels/${this.levelStep}`)
            }
        });
    }
    generateClassName(str) {
        return str
        .toString()
        .replace(/#\//g, '')
        .replace(/\//g, '_');
    }
    generatePageName(str) {
        return str
        .toString()
        .replace(/#\//g, '')
        .replace(/\//g, '_')
        .replace(/_*[0-9]/g, '');
    }
    generatePages(app) {
        let nodes = [{
            obj: app,
            path: []
        }];
        while (nodes.length > 0) {
            let n = nodes.pop();
            Object.keys(n.obj).forEach(k => {
                if (typeof n.obj[k] === 'object') {
                    let path = n.path.concat(k);
                    if (k !== "content") {
                        if (!Array.isArray(n.obj[k])) {
                            this.generatePage(n.obj[k])
                        }
                        nodes.unshift({
                            obj: n.obj[k],
                            path: path
                        });
                    }
                }
            });
        }
    }
    generatePage(page) {
        switch(page.name.replace(/_*[0-9]/g, '')) {
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
                <p>Page ${page.name}</p>
            </div>
        `;
    }
    generatePageGame(page) {
        if (!this.$games) {
            this.$app.innerHTML += `
                <div class="gamesList">
                </div>
            `;
            this.$games = this.$app.querySelector('.gamesList')
        }

        this.$games.innerHTML += `
            <div class="games ${page.name}">
            </div>
        `;
    }
    generatePageGameBegining(page) {
        const $games = this.$games.querySelectorAll('.games')
        for (let i = 0; i < $games.length; i++) {
            const $game = $games[i];
            if (page.name.match($game.className.split(' ')[1])) {
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
        const $games = this.$games.querySelectorAll('.games')
        for (let i = 0; i < $games.length; i++) {
            const $game = $games[i];
            if (page.name.match($game.className.split(' ')[1])) {
                if (!this.$levels) {
                    this.$levels = [];
                }

                if (!this.$levels[i]) {
                    $game.innerHTML += `
                        <div class="levelsList">
                        </div>
                    `;
                    this.$levels[i] = $game.querySelector('.levelsList')
                }

                this.$levels[i].innerHTML += `
                    <div class="is-hide page levels ${page.name}">
                        <p>Page ${page.name}</p>
                    </div>
                `;
            }
        }
    }
    generatePageGameEnding(page) {
        const $games = this.$games.querySelectorAll('.games')
        for (let i = 0; i < $games.length; i++) {
            const $game = $games[i];
            if (page.name.match($game.className.split(' ')[1])) {
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
