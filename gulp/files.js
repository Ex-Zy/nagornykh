import { src, dest } from "gulp";

function files() {
  return src(["src/files/**", "src/styles/**"])
    .pipe(dest("public/"))
}

export default files;