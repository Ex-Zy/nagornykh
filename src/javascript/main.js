"use strict";

import gsap from "gsap";

class Screen {
  constructor({ width, height }) {
    this.screen = { width, height };
  }

  isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };
}

class ScreenMouseTracker extends Screen {
  constructor({ width, height }) {
    super({ width, height });
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
}

class ScreenWithMouseStored extends ScreenMouseTracker {
  constructor({ width, height }) {
    super({ width, height });
    this.mouseStored = { ...this.mouse };
  }

  updateMouseStored({ x, y }) {
    this.mouseStored = { x, y };
  }

  isStoredMousePosition = () => {
    return (
      this.mouseStored.x === this.mouse.x && this.mouseStored.y === this.mouse.y
    );
  };
}

class Svg {
  constructor(svg) {
    this.svg = svg;
  }

  remove = () => {
    this.svg.remove();
  };
}

class SvgCircle extends Svg {
  constructor(svg) {
    super(svg);
    this.circle = svg.querySelector("circle");
  }

  setupSvgViewBox = ({ width, height }) => {
    this.svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  };

  setupCircleTranformOrigin = (transformOrigin) => {
    gsap.set(this.circle, { transformOrigin });
  };

  setupSvg = ({ width, height, transformOrigin }) => {
    this.setupSvgViewBox({ width, height });
    this.setupCircleTranformOrigin(transformOrigin);
  };
}

class BaseViewSetup {
  constructor({ screenInstance, svgCircleInstance }) {
    this.screenInstance = screenInstance;
    this.svgCircleInstance = svgCircleInstance;
    this.setup();
  }

  setup = () => {
    // Remove svg for mobile
    if (this.screenInstance.isMobile()) {
      return this.svgCircleInstance.remove();
    }

    const { width, height } = this.screenInstance.screen;
    const svgConfig = { width, height, transformOrigin: "50% 50%" };

    this.svgCircleInstance.setupSvg({ ...svgConfig });
    this.screenInstance.trackMousePosition();
  };
}

class Animation extends BaseViewSetup {
  constructor({ screenInstance, svgCircleInstance }) {
    super({ screenInstance, svgCircleInstance });
    this.runAnimation();
  }

  runAnimation = () => {
    gsap.ticker.add(() => {
      // stop animation
      if (this.screenInstance.isStoredMousePosition()) return;

      const { circle } = this.svgCircleInstance;
      const { mouse } = this.screenInstance;
      const animationConfig = {
        x: mouse.x,
        y: mouse.y,
        ease: Elastic.easeOut.config(1.25, 1),
        duration: 0.5,
        delay: 0.1,
        opacity: 1,
      };

      gsap.to(circle, animationConfig);
      this.screenInstance.updateMouseStored({ ...mouse });
    });
  };
}

const screenInstance = new ScreenWithMouseStored({
  width: window.innerWidth,
  height: window.innerHeight,
});

const svgCircleInstance = new SvgCircle(document.querySelector("svg"));

new Animation({ screenInstance, svgCircleInstance });
