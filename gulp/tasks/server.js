import browserSync from "browser-sync";

function server() {
  const bs = browserSync.create();

  bs.init({server: {baseDir: 'public'}});

  bs.watch("public/*.{html,css,js}").on("change", bs.reload);
}

export default server;