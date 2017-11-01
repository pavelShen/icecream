const process = require('process')
const devConfig = require('./config/webpack.config.dev.js')
const buildConfig = require('./config/webpack.config.build.js')

let config
if (process.env.NODE_ENV === 'production') {
  config = buildConfig
} else {
  config = devConfig
}

module.exports = config
