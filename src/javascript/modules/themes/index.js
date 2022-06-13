import { UiTheme } from "./theme";
import { THEMES, ACTIVE_THEME } from "./config";

const themeSwitcher = new UiTheme({
  themes: THEMES,
  active: ACTIVE_THEME,
  enableStorage: true,
  storageParam: "theme",
});

export default themeSwitcher;