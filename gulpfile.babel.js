import { parallel, series } from "gulp";
import clean from "./gulp/clean";
import buildHtml from "./gulp/html";
import scripts from "./gulp/scripts";
import files from "./gulp/files";

export default series(
  clean, 
  parallel(
    buildHtml, 
    scripts, 
    files
  )
);
