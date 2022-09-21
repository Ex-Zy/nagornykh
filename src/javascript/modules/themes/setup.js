import { random, setRoot } from "../helpers";

class ThemeSwitcher {
  #timerID;

  constructor({
    themes,
    active,
    enableStorage = true,
    storageParam = "theme",
    randomTime,
  }) {
    this.themes = themes;
    this.viewedThemes = [];
    this.enableStorage = enableStorage;
    this.storageParam = storageParam;
    this.randomTime = randomTime;
    this.setTheme(active);
  }

  setTheme = (name) => {
    this.active = name || "gotham";
    this.enableStorage && localStorage.setItem(this.storageParam, this.active);
    this.viewedThemes.push(this.active);
    setRoot(this.themes[this.active]);
  };

  turnRandomTheme = () => {
    this.#timerID = setInterval(this.#intervalHandler, this.randomTime);
    this.#setTabVisibilityListener();
  };

  #randomTheme = () => {
    const themes = Object.keys(this.themes).sort();
    const filteredThemes = themes.filter((t) => !this.viewedThemes.includes(t));
    const random = Math.floor(Math.random() * filteredThemes.length);

    if (filteredThemes.length > 1) {
      return filteredThemes[random];
    }

    if (filteredThemes.length === 1) {
      this.viewedThemes = [];
      return filteredThemes[random];
    }

    return null;
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
  };
}

export { ThemeSwitcher };
