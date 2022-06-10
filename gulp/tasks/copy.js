import { src, dest } from "gulp";
import configGulp from "../config";

function copy() {
  return src(configGulp.src.files + "**")
    .pipe(dest(configGulp.public.root));
}

export default copy;