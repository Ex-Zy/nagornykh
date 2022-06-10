import { dest, src } from "gulp";
import gulpPlumber from "gulp-plumber";
import webpack from "webpack-stream";
import configWebpack from "../webpack/config";
import configGulp from "../config";
import changed from "gulp-changed";

function scripts() {
  return src(configGulp.src.js + "main.js", { allowEmpty: true })
    .pipe(changed(configGulp.public.root))
    .pipe(gulpPlumber())
    .pipe(webpack(configWebpack))
    .pipe(dest(configGulp.public.root));
}

export default scripts;