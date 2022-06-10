import { src, dest } from "gulp";
import nunjucks from "gulp-nunjucks";
import prettyHtml from "gulp-pretty-html";
import gulpPlumber from "gulp-plumber";
import configGulp from "../config";

function html() {
  return src(configGulp.src.templates + "index.njk")
    .pipe(gulpPlumber())
    .pipe(nunjucks.compile())
    .pipe(prettyHtml({ indent_size: 2 }))
    .pipe(dest(configGulp.public.root));
}

export default html;