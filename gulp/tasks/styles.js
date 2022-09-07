import { src, dest } from "gulp";
import rename from "gulp-rename";
import postcss from "gulp-postcss";
import postcssPresetEnv from "postcss-preset-env";
import nested from "postcss-nested";
import gulpPlumber from "gulp-plumber";
import configGulp from "../config";
import changed from "gulp-changed";
import atImport from "postcss-import";
import simpleVars from "postcss-simple-vars";

const plugins = [
  postcssPresetEnv({
    stage: 2,
    features: {
      "nesting-rules": true,
    },
  }),
  nested,
  atImport,
  simpleVars,
];

function styles() {
  return src(configGulp.src.css + "style.pcss")
    .pipe(changed(configGulp.public.root))
    .pipe(
      gulpPlumber({
        errorHandler(err) {
          console.log(`
            Compile style error
              Reason: ${err.reason}
              File: ${err.file}
              Plugin: ${err.plugin}
              lineNumber: ${err.lineNumber}
          `);
          this.emit("end");
        },
      })
    )
    .pipe(postcss(plugins))
    .pipe(rename({ extname: ".css" }))
    .pipe(dest(configGulp.public.root));
}

export default styles;
