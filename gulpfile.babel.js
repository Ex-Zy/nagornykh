import { parallel, series } from "gulp";
import build from "./gulp/build";
import server from "./gulp/server";
import watcher from "./gulp/watcher";

function defaultTask(cb) {
  parallel(series(build, watcher), server)(cb);
}

export {defaultTask as default};