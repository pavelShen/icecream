const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackBase = require('./webpack.config.base.js')

const devConfig = {
  entry: path.resolve(__dirname, '../example/index.js'),
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../example/index.html'),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'example'),
    compress: true,
    port: 9000,
  },
}
module.exports = merge(webpackBase,devConfig);