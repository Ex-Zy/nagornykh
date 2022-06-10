class Canvas {
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

export default Canvas;