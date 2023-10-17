const html = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './input/eventListeners.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './output',
    open: true,
    hot:true,
  },
  plugins: [ new html({ template: './input/index.html' }), ],
  output: {
    filename: '[name]-[contenthash].js',
    path: path.resolve(__dirname, 'output'),
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  module: {
    rules: [{ test: /\.css$/i, use: ['style-loader', 'css-loader'] }, { test: /\.(svg|ttf|otf)$/i, type: 'asset/resource' }]

  }

}
