import Canvas from "./canvas";
import { gsap, Elastic } from "gsap";

class Animation extends Canvas {
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

export default Animation;
