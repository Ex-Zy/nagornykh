import { dest, src } from "gulp";
import babel from "gulp-babel";
import webpack from "webpack-stream";
import TerserPlugin from "terser-webpack-plugin";

const jsMinificatePlugin = new TerserPlugin({
  terserOptions: {
    format: {
      comments: false,
    },
  },
  extractComments: false,
});

const webpackConfig = {
  mode: "development",
  optimization: {
    minimize: true,
    minimizer: [jsMinificatePlugin],
  },
};

function scripts() {
  return src("src/javascript/main.js")
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(webpack(webpackConfig))
    .pipe(dest("public/"));
}

export default scripts;