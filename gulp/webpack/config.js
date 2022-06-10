import jsMinificatePlugin from "./plugins/minificate";

const config = {
  mode: "development",
  optimization: {
    minimize: true,
    minimizer: [jsMinificatePlugin],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

export default config;
