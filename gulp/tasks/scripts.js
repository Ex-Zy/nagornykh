import { dest, src } from "gulp";
import gulpPlumber from "gulp-plumber";
import webpack from "webpack-stream";
import configWebpack from "../webpack/config";
import configGulp from "../config";

function scripts() {
  return src(configGulp.src.javascript + "main.js", { allowEmpty: true })
    .pipe(gulpPlumber())
    .pipe(webpack(configWebpack))
    .pipe(dest(configGulp.public.root));
}

export default scripts;