import { ThemeSwitcher } from "./theme";
import { THEMES, ACTIVE_THEME } from "./config";

const themeSwitcher = new ThemeSwitcher({
  themes: THEMES,
  active: localStorage.getItem('theme') || ACTIVE_THEME,
  enableStorage: true,
  enableRandom: true,
  randomTime: 15000,
  storageParam: "theme",
});


export default themeSwitcher;