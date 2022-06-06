import { src, dest, series } from "gulp";
import nunjucks from "gulp-nunjucks";
import prettyHtml from "gulp-pretty-html";

function html() {
  return src("src/templates/index.njk")
    .pipe(nunjucks.compile())
    .pipe(prettyHtml({ indent_size: 2 }))
    .pipe(dest("public/"));
}

export default html;