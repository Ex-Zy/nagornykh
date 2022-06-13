import { random, setRoot } from "./helpers";

class UiTheme {
  constructor({ themes, active, enableStorage, storageParam }) {
    this.themes = themes;
    this.active = active;
    this.enableStorage = enableStorage;
    this.storageParam = storageParam;
  }

  getActiveTheme = () => {
    return this.enableStorage ? this.getStorage() : this.active;
  };

  setTheme = (name) => {
    this.active = name;
    this.enableStorage && this.setStorage(name);
  };

  setStorage = (name) => {
    localStorage.setItem(this.storageParam, name);
  };

  getStorage = () => {
    localStorage.getItem(this.storageParam);
  };

  randomTheme = () => {
    const min = 0;
    const max = Object.keys(this.themes).length - 1;
    const sortedKeys = Object.keys(this.themes).sort();

    return sortedKeys[random(min, max)];
  };

  turnRandomTheme = (time) => {
    setInterval(() => {
      this.setTheme(this.randomTheme());
      setRoot(this.themes[this.active]);
    }, time);
  };

  render = ({ enableRandom, time } = { enableRandom: false, time: 3000 }) => {
    setRoot(this.themes[this.active]);

    if (enableRandom) {
      this.turnRandomTheme(time);
    }
  };
}

export { UiTheme };
