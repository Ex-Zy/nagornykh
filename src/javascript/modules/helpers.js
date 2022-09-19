export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

export const setAttributes = (element, attributes) => {
  for (const attr of Object.keys(attributes)) {
    element.setAttribute(attr, attributes[attr]);
  }
};

export const removeAttributes = (element, attributes) => {
  for (const attr of Object.keys(attributes)) {
    element.removeAttribute(attr, attributes[attr]);
  }
};

export const random = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

export const styleString = (rules) =>
  Object.entries(rules)
    .map(([k, v]) => `${k}:${v}`)
    .join(";");

export const setRoot = (rules) =>
  (document.documentElement.style.cssText = styleString(rules));