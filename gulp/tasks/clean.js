import del from "del"
import configGulp from "../config";

function clean() {
  return del(configGulp.public.root, { force: true });
}

export default clean;