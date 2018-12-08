const ClearWebpackPlugin = require('clean-webpack-plugin') // 引入ClearWebpackPlugin插件
const merge = require('webpack-merge')
const base = require('./webpack.base')
const dev = require('./config/prod')
const webpack = require('webpack')
const path = require('path')
const PurifyCssWebpack = require('purifycss-webpack')
const glob = require('glob') // 引入glob模块,用于扫描全部html文件中所引用的css

module.exports = merge(base, {
  devtool: 'source-map', // 会生成对于调试的完整的.map文件，但同时也会减慢打包速度
  plugins: [
    new ClearWebpackPlugin(['dist']), // 清理所要清理的文件夾名称
    new PurifyCssWebpack({
      paths: glob.sync(path.join(__dirname, 'src/*.html')) // 同步扫描所有html文件中所引用的css
    }),
    new webpack.DefinePlugin({
      'process.env': dev
    })
  ]
})
