const path = require('path')
const webpack = require('webpack')
const webpackBase = require('./webpack.config.base.js')
const merge = require('webpack-merge')

const buildConfig = {
  entry: path.resolve(__dirname, '../index.js'),
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
}
module.exports = merge(webpackBase, buildConfig)
