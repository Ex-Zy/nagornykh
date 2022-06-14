import { random, setRoot } from "./helpers";

class ThemeSwitcher {
  constructor({ themes, active, enableStorage, storageParam }) {
    this.themes = themes;
    this.enableStorage = enableStorage;
    this.storageParam = storageParam;
    this.setTheme(active);
  }

  render = ({ enableRandom, time } = { enableRandom: false, time: 10000 }) => {
    setRoot(this.themes[this.active]);

    if (enableRandom) {
      this.#turnRandomTheme(time);
    }
  };

  setTheme = (name) => {
    this.active = name;
    this.enableStorage && this.#setStorage(name);
  };

  getActiveTheme = () => {
    return this.enableStorage && this.#getStorage()
      ? this.#getStorage()
      : this.active;
  };

  #setStorage = (name) => {
    localStorage.setItem(this.storageParam, name);
  };

  #getStorage = () => {
    return localStorage.getItem(this.storageParam);
  };

  #randomTheme = () => {
    const min = 0;
    const max = Object.keys(this.themes).length - 1;
    const themes = Object.keys(this.themes).sort();

    return themes[random(min, max)];
  };

  #turnRandomTheme = (time) => {
    setInterval(() => {
      this.setTheme(this.#randomTheme());
      setRoot(this.themes[this.active]);
    }, time);
  };
}

export { ThemeSwitcher };
