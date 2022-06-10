import { watch as _watch } from "gulp";
import configGulp from "../config";
import html from "./html";
import styles from "./styles";
import scripts from "./scripts";

function watch() {
  _watch(configGulp.src.html + "**", html);
  _watch(configGulp.src.css + "**", styles);
  _watch(configGulp.src.js + "**", scripts);
}

export default watch;