const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    index: "./src/index.js",
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "HTML autorender",
      template: "src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //những đuôi file js, jsx
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i, // kiểm tra với mọi file có đuôi .css
        use: ["style-loader", "css-loader"], //module loader được sử dụng, chúng được load và thực thi theo thứ tự trong mảng
      },
    ],
  },
  devServer: {
    static: "./build",
  },
  optimization: {
    runtimeChunk: "single",
  },
};
