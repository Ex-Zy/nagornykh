import { parallel } from "gulp";
import html from "../tasks/html";
import scripts from "../tasks/scripts";
import copy from "../tasks/copy";
import styles from "../tasks/styles";

function build(done) {
  parallel(
    html, 
    styles, 
    scripts, 
    copy,
  )(done);
}

export default build;