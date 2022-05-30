"use strict";

const isMobileUserAgent = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

class MouseCircleAnimation {
  constructor({ svg, circle, width, height }) {
    // Only one instance can be on page
    if (!MouseCircleAnimation._instance) {
      MouseCircleAnimation._instance = this;
    }

    this.svg = svg;
    this.circle = circle;
    this.screen = { width, height };
    this.mouse = { x: 0, y: 0 };
    this.mouseStored = Object.assign({}, this.mouse);

    this.init();

    return MouseCircleAnimation._instance;
  }

  init = () => {
    // Stop using animation for mobile
    if (isMobileUserAgent()) {
      return this.svg.remove();
    }

    const { width, height } = this.screen;

    // Set up svg attributes
    gsap.set(this.circle, {transformOrigin: "50% 50%"});
    this.svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

    window.addEventListener("mousemove", this.setMouseCoords);

    // And use the ticker to update the rotation accordingly
    gsap.ticker.add(this.animateCircle);
  };

  setMouseCoords = (event) => {
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;
  };

  animateCircle = () => {
    if (
      this.mouseStored.x === this.mouse.x &&
      this.mouseStored.y === this.mouse.y
    )
      return;

    const animationConfig = {
      x: this.mouse.x,
      y: this.mouse.y,
      ease: Elastic.easeOut.config(1.25, 1),
      duration: 0.5,
      delay: 0.1,
      opacity: 1,
    };

    gsap.to(this.circle, animationConfig);

    // Store the mouse position for the next tick
    this.mouseStored.x = this.mouse.x;
    this.mouseStored.y = this.mouse.y;
  };
}

new MouseCircleAnimation({
  svg: document.querySelector("svg"),
  circle: document.querySelector("circle"),
  width: window.innerWidth,
  height: window.innerHeight,
});