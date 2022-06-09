import { src, dest } from "gulp";

function copy() {
  return src(["src/files/**", "src/styles/**"])
    .pipe(dest("public/"))
}

export default copy;