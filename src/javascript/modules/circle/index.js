import { Animation, Svg, Screen } from "./setup";

// create animation instance
const screenInstance = new Screen();
const svgCircleInstance = new Svg();
const animationInstance = new Animation({ screenInstance, svgCircleInstance });

// public api
const circle = {
  runAnimation: animationInstance.runAnimation,
  stopAnimation: animationInstance.stopAnimation,
};

export default circle;
