import Canvas from "./canvas";
import { gsap, Elastic } from "gsap";

const config = {
  ease: Elastic.easeOut.config(1.25, 1),
  duration: 0.5,
  delay: 0.1,
  opacity: "var(--circle-alpha)",
};

class Animation extends Canvas {
  constructor({ screenInstance, svgCircleInstance }) {
    super({ screenInstance, svgCircleInstance });
  }

  #screenHandler = () => {
    if (this.screenInstance.isStoredMousePosition()) return;

    const { circle } = this.svgCircleInstance;
    const { mouse } = this.screenInstance;

    gsap.to(circle, { x: mouse.x, y: mouse.y, ...config });
    this.screenInstance.updateMouseStored({ ...mouse });
  };

  runAnimation = () => {
    gsap.ticker.add(this.#screenHandler);
  };

  stopAnimation = () => {
    gsap.ticker.remove(this.#screenHandler);
  };
}

export default Animation;
