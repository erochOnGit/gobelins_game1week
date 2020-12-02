class Word {
  constructor() {
    this.picUrl = "";
    this.content = "";
    this.value;
  }
  init({ data }) {
    this.content = data.content || "";
    this.picUrl = data.picUrl || "";
    this.value = data.value;
  }
  getContent() {
    return this.content;
  }
}

module.exports = Word;
