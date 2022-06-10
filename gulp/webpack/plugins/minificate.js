import TerserPlugin from "terser-webpack-plugin";

const jsMinificatePlugin = new TerserPlugin({
  terserOptions: {
    format: {
      comments: false,
    },
  },
  extractComments: false,
});

export default jsMinificatePlugin;