import { parallel, series } from "gulp";
import clean from "./gulp/tasks/clean";
import build from "./gulp/tasks/build";
import server from "./gulp/tasks/server";
import watch from "./gulp/tasks/watch";
import html from "./gulp/tasks/html";
import scripts from "./gulp/tasks/scripts";
import styles from "./gulp/tasks/styles";
import copy from "./gulp/tasks/copy";

function defaultTask(cb) {
  parallel(build, watch, server)(cb);
}

export { 
  clean,
  copy,
  html,
  scripts,
  styles,
  build, 
  server, 
  watch, 
  defaultTask as default
};