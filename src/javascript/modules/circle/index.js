import { Animation, Svg, Screen } from "./setup";

const circleAnimation = new Animation({
  screenInstance: new Screen({width: window.innerWidth, height: window.innerHeight }),
  svgCircleInstance: new Svg(`<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true" viewBox="0 0 1600 900"><circle class="circle" r="80" cx="0" cy="0" /></svg>`),
});

// public api
const circle = {
  runAnimation: circleAnimation.runAnimation,
  stopAnimation: circleAnimation.stopAnimation,
};

export default circle;
