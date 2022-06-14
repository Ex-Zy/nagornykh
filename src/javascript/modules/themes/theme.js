import { random, setRoot } from "./helpers";

class ThemeSwitcher {
  #timerID;

  constructor({
    themes,
    active,
    enableStorage,
    storageParam,
    enableRandom,
    randomTime,
  }) {
    this.themes = themes;
    this.enableStorage = enableStorage;
    this.storageParam = storageParam;
    this.enableRandom = enableRandom;
    this.randomTime = randomTime;
    this.setTheme(active);
  }

  render = () => {
    setRoot(this.themes[this.active]);

    if (this.enableRandom) {
      this.#turnRandomTheme(this.randomTime);
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

  #turnRandomTheme = () => {
    this.#timerID = setInterval(this.#intervalHandler, this.randomTime);
    this.#setTabVisibilityListener();
  };

  #setTabVisibilityListener = () => {
    document.addEventListener("visibilitychange", this.#toggleIntervalHandler);
  };

  #toggleIntervalHandler = () => {
    if (document.visibilityState === "visible") {
      this.#timerID = setInterval(this.#intervalHandler, this.randomTime);
    } else {
      clearInterval(this.#timerID);
    }
  };

  #intervalHandler = () => {
    this.setTheme(this.#randomTheme());
    setRoot(this.themes[this.active]);
  };
}

export { ThemeSwitcher };
