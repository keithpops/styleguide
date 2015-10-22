var Webpack = require('webpack');
var path = require('path');

var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public');
var mainPath = path.resolve(__dirname, 'src', 'js', 'index.js');

var config = {
  devtool: 'eval',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    mainPath,
  ],
  output: {
    path: buildPath,
    filename: "app.js",
    publicPath: '/build/'
  },
  module: {
    preLoaders: [
      {
        test: /\.json$/,
        exclude: [nodeModulesPath],
        loader: 'json'
      },
    ],
    loaders: [

      {
        test: /\.js/,
        exclude: [nodeModulesPath],
        loaders: ["babel-loader"],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ],
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()]
}

module.exports = config;
