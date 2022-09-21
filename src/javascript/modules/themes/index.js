import { ThemeSwitcher } from "./setup";
import { THEMES, ACTIVE_THEME } from "./config";

const themeSwitcher = new ThemeSwitcher({
  themes: THEMES,
  active: ACTIVE_THEME,
  randomTime: 15000,
});

export default themeSwitcher;
