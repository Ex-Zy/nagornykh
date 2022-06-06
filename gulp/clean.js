import del from "del"

function clean() {
  return del('public', {force: true});
}

export default clean;