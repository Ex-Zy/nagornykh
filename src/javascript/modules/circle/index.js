import { Animation } from "./setup";

const circleAnimation = new Animation();

// public api
const circle = {
  runAnimation: circleAnimation.runAnimation,
  stopAnimation: circleAnimation.stopAnimation,
};

export default circle;
