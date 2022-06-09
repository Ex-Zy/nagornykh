import { parallel } from "gulp";
import buildHtml from "./html";
import scripts from "./scripts";
import copy from "./copy";

function build(done) {
  parallel(buildHtml, scripts, copy)(done);
}

export default build;