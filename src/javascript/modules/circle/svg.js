import { gsap } from "gsap";

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

export { SvgCircle as SvgCircleInstance };
