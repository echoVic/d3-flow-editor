var path = require('path')

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './dist',
    inline: true,
    historyApiFallback: true
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }]
  }
}