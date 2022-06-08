import { parallel, series } from "gulp";
import clean from "./clean";
import buildHtml from "./html";
import scripts from "./scripts";
import files from "./files";

function build(done) {
  series(
    clean, 
    parallel(
      buildHtml, 
      scripts, 
      files
    )
  )(done);
}

export default build;