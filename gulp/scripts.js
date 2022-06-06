import { dest, src } from "gulp";
import babel from "gulp-babel";

function scripts() {
  return src("src/javascript/main.js")
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(dest("public/"));
}

export default scripts;