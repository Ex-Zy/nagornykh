import { series } from "gulp";
import build from "./gulp/build";
import watcher from "./gulp/watcher";

export default series(
  build, 
  watcher
);
