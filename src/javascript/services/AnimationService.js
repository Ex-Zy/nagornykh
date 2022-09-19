import { gsap, Elastic } from "gsap";

const config = {
  ease: Elastic.easeOut.config(1.25, 1),
  duration: 0.5,
  delay: 0.1,
  opacity: "var(--circle-alpha)",
};

class AnimationService {
  static defineInitialParams = (element, params) => {
    gsap.to(element, { ...params, ...config });
  };
  static runAnimation = (cb) => {
    gsap.ticker.add(cb);
  };
  static stopAnimation = (cb) => {
    gsap.ticker.remove(cb);
  };
}

export default AnimationService;
