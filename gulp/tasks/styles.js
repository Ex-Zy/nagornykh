import { src, dest } from "gulp";
import rename from "gulp-rename";
import postcss from "gulp-postcss";
import postcssPresetEnv from "postcss-preset-env";
import nested from "postcss-nested";
import gulpPlumber from "gulp-plumber";
import configGulp from "../config";
import changed from "gulp-changed";

const plugins = [
  postcssPresetEnv({
    stage: 2,
    features: {
      "nesting-rules": true,
    },
  }),
  nested,
];

function styles() {
  return src(configGulp.src.css + "*.{pcss,css}")
    .pipe(changed(configGulp.public.root))
    .pipe(gulpPlumber())
    .pipe(postcss(plugins))
    .pipe(rename({ extname: ".css" }))
    .pipe(dest(configGulp.public.root));
}

export default styles;