import AnimationService from "../../services/AnimationService";
import { isMobile } from "../helpers";

class Svg {
  constructor() {
    this.svg = document.querySelector("svg");
    this.circle = this.svg.querySelector("circle");
  }

  remove = () => {
    this.svg.remove();
  };

  setupSvgViewBox = ({ width, height }) => {
    this.svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  };

  setupCircleTranformOrigin = (transformOrigin) => {
    this.circle.style.transformOrigin = transformOrigin;
  };

  setupSvg = ({ width, height, transformOrigin }) => {
    this.setupSvgViewBox({ width, height });
    this.setupCircleTranformOrigin(transformOrigin);
  };
}

class Screen {
  constructor() {
    this.screen = { width: window.innerWidth, height: window.innerHeight };
    this.mouse = { x: 0, y: 0 };
    this.mouseStored = { ...this.mouse };
  }

  setMouseCoords = (event) => {
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;
  };

  trackMousePosition() {
    window.addEventListener("mousemove", this.setMouseCoords);
  }

  saveLastMousePosition({ x, y }) {
    this.mouseStored = { x, y };
  }

  isStoredMousePosition = () => {
    return (
      this.mouseStored.x === this.mouse.x && this.mouseStored.y === this.mouse.y
    );
  };
}

class Animation {
  constructor({ screenInstance, svgCircleInstance }) {
    this.screenInstance = screenInstance;
    this.svgCircleInstance = svgCircleInstance;
    this.setup();
  }

  setup = () => {
    // Remove svg for mobile
    if (isMobile()) {
      return this.svgCircleInstance.remove();
    }

    const { width, height } = this.screenInstance.screen;
    const svgConfig = { width, height, transformOrigin: "50% 50%" };

    this.svgCircleInstance.setupSvg({ ...svgConfig });
    this.screenInstance.trackMousePosition();
  };

  #screenHandler = () => {
    if (this.screenInstance.isStoredMousePosition()) return;

    const { circle } = this.svgCircleInstance;
    const { mouse } = this.screenInstance;

    AnimationService.defineInitialParams(circle, { x: mouse.x, y: mouse.y });
    this.screenInstance.saveLastMousePosition({ ...mouse });
  };

  runAnimation = () => {
    AnimationService.runAnimation(this.#screenHandler);
  };

  stopAnimation = () => {
    AnimationService.stopAnimation(this.#screenHandler);
  };
}

export { Animation, Svg, Screen };
