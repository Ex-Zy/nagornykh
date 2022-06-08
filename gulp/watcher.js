import { watch } from "gulp";
import build from "./build";

function watcher() {
  watch([
    "src/files/*",
    "src/javascript/*",
    "src/styles/*",
    "src/templates/*",
    "src/templates/layouts/*",
    "src/templates/partials/*",
  ], build);
}

export default watcher;
