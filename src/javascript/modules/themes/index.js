import { ThemeSwitcher } from "./setup";
import { THEMES, ACTIVE_THEME } from "./config";

const themeSwitcher = new ThemeSwitcher({
  themes: THEMES,
  active: ACTIVE_THEME,
  enableStorage: true,
  enableRandom: true,
  randomTime: 15000,
  storageParam: "theme",
});


export default themeSwitcher;