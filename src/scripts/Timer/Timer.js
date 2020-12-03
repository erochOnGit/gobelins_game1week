export default class Timer {
  constructor() {
    this.limitTime = {
      minutes: 0,
      seconds: 4,
    };
    this.reset();
  }
  getTime() {
    const currentTime = new Date().getTime();
    const distanceTime = currentTime - this.beginTime;
    this.time = {
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
      this.finish = true;
    }
  }
  convertTime(value) {
    let result = String(value);
    if (result < 10) {
      result = `0${result}`;
    }
    return result;
  }
  reset() {
    this.beginTime = new Date().getTime();
    this.limitTime.value = new Date(
      Date.parse(new Date()) +
        (this.limitTime.minutes + 1) * this.limitTime.seconds * 1000
    ).getTime();
    this.finish = false;
    this.getTime();
  }
}
