import { Animation, Svg, Screen } from "./setup";

const rawSvgTemplate = `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true" viewBox="0 0 1600 900"><circle class="circle" r="80" cx="0" cy="0" /></svg>`;

// create animation instance
const screenInstance = new Screen({width: window.innerWidth, height: window.innerHeight });
const svgCircleInstance = new Svg(rawSvgTemplate);
const animationInstance = new Animation({ screenInstance, svgCircleInstance });

// public api
const circle = {
  runAnimation: animationInstance.runAnimation,
  stopAnimation: animationInstance.stopAnimation,
};

export default circle;
