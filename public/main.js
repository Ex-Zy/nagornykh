"use strict";

const isMobileUserAgent = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

class Screen {
  constructor({ width, height }) {
    this.screen = { width, height };
  }
}

class BrowserScreen extends Screen {
  constructor({ width, height }) {
    super({ width, height });
    this.mouse = { x: 0, y: 0 };
  }

  setMouseCoords = (event) => {
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;
  };

  trackMousePosition() {
    window.addEventListener("mousemove", this.setMouseCoords);
  }
}

class Svg {
  constructor(svg) {
    this.svg = svg;
  }

  setupSvgViewBox = ({ width, height }) => {
    this.svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  };
}

class Circle extends Svg {
  constructor(svg) {
    super(svg);
    this.circle = svg.querySelector("circle");
  }

  setupCircleTranformOrigin = (transformOrigin) => {
    gsap.set(this.circle, { transformOrigin });
  };
}

class CircleAnimation {
  constructor({ screen, circle }) {
    this.screen = screen;
    this.circle = circle;
    this.mouseStored = { ...this.screen.mouse };

    this.init();
  }

  init = () => {
    // Stop using animation for mobile
    if (isMobileUserAgent()) {
      return this.removeSvg();
    }

    const { screen } = this.screen;
    const { width, height } = screen;

    this.setupSvg({ width, height, transformOrigin: "50% 50%" });
    this.trackMousePosition();
    this.runAnimation();
  };

  runAnimation = () => {
    gsap.ticker.add(this.animateCircle);
  };

  animateCircle = () => {
    if (this.isStoredMousePosition()) return;

    const { circle } = this.circle;
    const { mouse } = this.screen;
    const animationConfig = {
      ...CircleAnimation.baseAnimationConfig,
      ...mouse,
    };

    gsap.to(circle, animationConfig);
    this.mouseStored = { ...mouse };
  };

  setupSvg = ({ width, height, transformOrigin }) => {
    this.circle.setupSvgViewBox({ width, height });
    this.circle.setupCircleTranformOrigin(transformOrigin);
  };

  removeSvg = () => {
    this.circle.svg.remove();
  };

  trackMousePosition = () => {
    this.screen.trackMousePosition();
  };

  isStoredMousePosition = () => {
    return (
      this.mouseStored.x === this.screen.mouse.x &&
      this.mouseStored.y === this.screen.mouse.y
    );
  };
}

CircleAnimation.baseAnimationConfig = {
  ease: Elastic.easeOut.config(1.25, 1),
  duration: 0.5,
  delay: 0.1,
  opacity: 1,
};

new CircleAnimation({
  screen: new BrowserScreen({
    width: window.innerWidth,
    height: window.innerHeight,
  }),
  circle: new Circle(document.querySelector("svg")),
});
