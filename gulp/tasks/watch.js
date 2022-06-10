import { watch as _watch } from "gulp";
import configGulp from "../config";
import html from "./html";
import styles from "./styles";
import scripts from "./scripts";

function watch() {
  _watch(configGulp.src.html + "**/*.{njk,html}", html);
  _watch(configGulp.src.css + "**/*.{pcss,css}", styles);
  _watch(configGulp.src.js + "**/*.js", scripts);
}

export default watch;