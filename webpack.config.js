const path = require('path');
const testPlugin = require("./src/myPlugin/testPlugin.js");

const config = {
  entry: './example/index.js',
  output: {
    filename: './mian.js'
  },
  mode:'development',
  module: {
    rules: [
      { test: /\.js$/, use:  [
          {
              loader: path.resolve(__dirname, "./src/myLoader/testLoader.js"),
              options: {
                name: "ming"
              }
          }
      ] }
    ]
  },
  plugins: [
    new testPlugin({
        title: "自定义插件运行了"
    })
 ]
};

module.exports = config;