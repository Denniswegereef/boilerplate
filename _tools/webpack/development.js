const webpack = require("webpack");
const merge = require("webpack-merge");

const common = require("./common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: "../../_sources/",
    watchContentBase: true,
    hot: true,
    open: true,
    port: process.env.PORT || 8080,
    host: process.env.HOST || "localhost",
    stats: "errors-only"
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
