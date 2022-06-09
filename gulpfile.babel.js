import { parallel, series } from "gulp";
import clean from "./gulp/clean";
import build from "./gulp/build";
import server from "./gulp/server";
import watch from "./gulp/watch";

function defaultTask(cb) {
  parallel(build, watch, server)(cb);
}

export { 
  clean, 
  build, 
  server, 
  watch, 
  defaultTask as default
};