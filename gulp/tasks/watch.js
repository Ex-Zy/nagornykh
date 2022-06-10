import { watch as _watch } from "gulp";
import build from "./build";
import configGulp from "../config";

function watch() {
  _watch(
    [
      configGulp.src.files + "*",
      configGulp.src.javascript + "*",
      configGulp.src.styles + "*",
      configGulp.src.templates + "*",
    ],
    build
  );
}

export default watch;