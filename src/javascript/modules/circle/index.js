import { ScreenInstance } from "./screen";
import { SvgCircleInstance } from "./svg";
import Animation from "./animation";

// create animation instance
const screenInstance = new ScreenInstance({width: window.innerWidth, height: window.innerHeight});
const svgCircleInstance = new SvgCircleInstance(document.querySelector("svg"));
const animationInstance = new Animation({ screenInstance, svgCircleInstance });

// public api
const circle = {
  runAnimation: animationInstance.runAnimation,
  stopAnimation: animationInstance.stopAnimation,
};

export default circle;