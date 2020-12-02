class Word {
  constructor() {
    this.picUrl = "";
    this.content = "";
    this.similarWords = [];
  }
  init({ data }) {
    this.content = data.content || "";
    this.picUrl = data.picUrl || "";
    this.similarWords = data.similarWords || [];
  }
  getContent() {
    return this.content;
  }
}

module.exports = Word;
