"use strict";

import { ScreenInstance } from "./modules/screen";
import { SvgCircleInstance } from "./modules/svg";
import Animation from "./modules/animation";

const screenInstance = new ScreenInstance({
  width: window.innerWidth,
  height: window.innerHeight,
});

const svgCircleInstance = new SvgCircleInstance(document.querySelector("svg"));

new Animation({ screenInstance, svgCircleInstance });