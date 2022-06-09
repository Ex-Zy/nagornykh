import { watch as gulpWatch } from "gulp";
import build from "./build";

function watch() {
  gulpWatch(
    [
      "src/files/*",
      "src/javascript/*",
      "src/styles/*",
      "src/templates/*",
      "src/templates/layouts/*",
      "src/templates/partials/*",
    ],
    build
  );
}

export default watch;
