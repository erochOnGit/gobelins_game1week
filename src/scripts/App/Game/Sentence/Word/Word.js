class Word {
  constructor(router) {
    this.picUrl = "";
    this.backgroundUrl = "";
    this.content = "";
    this.value;
    this.routeur = router;
  }
  init({ data }) {
    this.content = data.content || "";
    this.picUrl = data.picUrl || "";
    this.backgroundUrl = data.backgroundUrl || "";
    this.value = data.value;
  }
  getContent() {
    return this.content;
  }
}

module.exports = Word;
