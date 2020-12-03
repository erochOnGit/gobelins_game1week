export default class Timer {
  constructor() {
    this.limitTime = {
      minutes: 0,
      seconds: 10,
    };
  }
  getTime() {
    const currentTime = new Date().getTime();
    const distanceTime = this.limitTime.value - currentTime;
    this.time = {
      distance: 0 + (100 - 0) * (distanceTime - 0) / ((this.limitTime.value - this.beginTime) - 0),
      minutes: this.convertTime(
        Math.floor((distanceTime % (1000 * 60 * 60)) / (1000 * 60))
      ),
      seconds: this.convertTime(
        Math.floor((distanceTime % (1000 * 60)) / 1000)
      ),
    };
    this.controlIsFinish();
    return this.time;
  }
  controlIsFinish() {
    const currentTime = new Date().getTime();
    if (this.limitTime.value < currentTime) {
      this.isFinish = true;
    }
    return this.isFinish;
  }
  convertTime(value) {
    let result = String(value);
    if (result < 10) {
      result = `0${result}`;
    }
    return result;
  }
  init() {
    this.beginTime = new Date().getTime();
    this.limitTime.value = new Date(
      Date.parse(new Date()) +
        (this.limitTime.minutes + 1) * this.limitTime.seconds * 1000
    ).getTime();
    this.isStop = false;
    this.isFinish = false;
    this.getTime();
  }
  stop() {
      this.isStop = true;
  }
  reset() {
    this.stop();
    this.init();
  }
}
