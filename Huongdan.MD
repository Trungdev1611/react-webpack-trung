1. tạo folder public chứa file index.html
2. Tạo folder src chứa file index.js
3. trong src tạo file App.js
4. Trong file App

import React from "react";
const App = () => {
return <div>HELLO REACT + WEBPACK</div>;
};
export default App;

5. trong file index.js
   import React from "react";
   import ReactDOM from "react-dom/client";
   import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);

6.  cài đặt webpack, webpack-cli(commandline) trong project: npm i -D webpack webpack-cli
7.  cài đặt loader babel để chuyển đổi code sau ES5 về ES5: npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react
8.  config file .babelrc
    {
    "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
    ]
    // ,
    // "plugins": [
    // "@babel/plugin-proposal-class-properties"
    // ]
    }

9.  tạo file webpack.config.js
    const path = require("path");
    module.exports = {
    entry: "./src/index.js",
    output: {
    filename: "bundle.js",
    path: path.resolve(\_\_dirname, "build"),
    },
    module: {
    rules: [
    {
    test: /\.(js|jsx)$/, //những đuôi file js, jsx
    exclude: /node_modules/,
    use: {
    loader: "babel-loader",
    },
    },
    ],
    },
    };

10. chạy lệnh webpack in terminal sẽ được 1 file build bundle, link script nó vào index.html, và chạy html
11. Bây giờ ta đã có thể lên được file App.js.
12. Ta không muốn file index.html ta phải tự link script mà muốn khi bundle sẽ tạo ra file html tự link cho ta thì ta sẽ sử dụng HtmlWebpackPlugin
13. Sau khi cài đặt xong npm i -D html-webpack-plugin và thêm cấu hình plugin cho nó trong webpack.config thì ta chạy webpack sẽ tự động tạo file index.html cho ta

14. nhưng vấn đề là plugin trên chưa tạo cho ta thẻ div với id="root". Ta có thể sử dụng 1 template như ở đây https://github.com/jantimon/html-webpack-plugin#writing-your-own-templates hoặc https://stackoverflow.com/questions/49227613/div-id-root-div-not-transfering-in-webpack-build
    15 .tôi lựa chọn với 1 template html là src/index.html với việc tạo trước 1 id root bên trong template
15. bây giờ tôi không muốn chạy câu lệnh webpack trên cmd nữa mà thay vào đó ta sẽ cài đặt trong package.json để chạy với câu lệnh npm start trên môi trường dev và npm run build trên môi trường product
    Để làm được vậy ta phải cài: npm install --save-dev webpack-dev-server, và sửa trong
    Change your configuration file to tell the dev server where to look for files:
    thêm trong file config webpack
    devServer: {
    static: './build',
    },

    cấu hình lại nhiều entrypoin như này

        entry: {

    index: "./src/index.js",
    },

output: {
filename: "[name].bundle.js",
path: path.resolve(\_\_dirname, "build"),
},

18. cài style-loader và css-loader để có thể sử dụng css in App
