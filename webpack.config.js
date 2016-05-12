/*eslint-disable no-var*/
// var subscript = require('markdown-it-sub');
// var superscript = require('markdown-it-sup');

var path = require('path');
var AureliaWebpackPlugin = require('aurelia-webpack-plugin');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');

module.exports = {
  devServer: {
    host: 'localhost',
    port: 3000
  },
  entry: {
    main: [
      './src/main'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new AureliaWebpackPlugin(),
    new ProvidePlugin({
      Promise: 'bluebird'
    }),
    new ProvidePlugin({
      $:"jquery",
      jQuery:"jquery"
    }),
    new ProvidePlugin({
      "jquery-ui/mouse":"jquery.ui",
      "jquery-ui/draggable":"jquery.ui"
    }),
  ],
  module: {
    noParse:[/autoit.js/],
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: { presets: ['es2015-loose', 'stage-1'], plugins: ['transform-decorators-legacy'] } },
      { test: /\.css?$/, loader: 'style!css' },
      { test: /\.html$/, loader: 'html' },
      { test: /\.(png|gif|jpg)$/, loader: 'url?limit=8192' },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&minetype=application/font-woff2' },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&minetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' },
      { test: require.resolve('snapsvg'), loader: 'imports-loader?this=>window,fix=>module.exports=0'}
      // { test:   /\.md/, loader: 'markdown-it'}
    ]
  }
  // },
  // 'markdown-it': {
  //     preset: 'default',
  //     typographer: true,
  //     use: [subscript, superscript]
  //   }
};
