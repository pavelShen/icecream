const path = require('path')

const config = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd',
    library: '[name]',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.js[x]$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['transform-react-jsx'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
}

module.exports = config
