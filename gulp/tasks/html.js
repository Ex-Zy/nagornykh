import { src, dest } from "gulp";
import nunjucks from "gulp-nunjucks";
import prettyHtml from "gulp-pretty-html";
import gulpPlumber from "gulp-plumber";
import configGulp from "../config";
import changed from "gulp-changed";

function html() {
  return src(configGulp.src.html + "*.{njk,html}")
    .pipe(changed(configGulp.public.root))
    .pipe(gulpPlumber())
    .pipe(nunjucks.compile())
    .pipe(prettyHtml({ indent_size: 2 }))
    .pipe(dest(configGulp.public.root));
}

export default html;