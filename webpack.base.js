const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '/src/index.js'), // 入口文件
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/, // 正则匹配以.css结尾的文件
      use: ExtractTextPlugin.extract({ // 这里我们需要调用分离插件内的extract方法
        fallback: 'style-loader', // 相当于回滚，经postcss-loader和css-loader处理过的css最终再经过style-loader处理
        use: [{
          loader: 'css-loader'
        },
        {
          loader: 'postcss-loader'
        } // 使用postcss-loader
        ], // 需要用的loader，一定是这个顺序，因为调用loader是从右往左编译的
        publicPath: '../' // 给背景图片设置一个功能路径
      })
    },
    {
      test: /\.(scss|sass)$/, // 正则匹配以.scss和.sass结尾的文件
      use: ['style-loader', 'css-loader', 'sass-loader'] // 需要用的loader，一定是这个顺序，因为调用loader是从右往左编译的
    },
    {
      test: /\.(js|jsx)$/,
      use: { // 注意use选择如果有多项配置，可写成这种对象形式
        loader: 'babel-loader'
        // options: { // 后续Babel配置会单独提取到.babelrc文件中
        //   presets: [ 'env' ] // 支持最新JS语法(ES6、ES7、ES8。。。)
        // }
      },
      exclude: /node_modules/ // 排除匹配node_modules模块
    },
    {
      test: /\.(png|jpg|svg|gif)$/, // 正则匹配图片格式
      use: [{
        loader: 'url-loader', // 使用url-loader
        options: {
          limit: 1000, // 限制只有小于1kb的图片才转为base64，例子图片为384kb,所以不会被转化
          outputPath: 'images' // 设置打包后图片存放的文件夹名称
        }
      }]
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html') // new一个这个插件的实例，并传入相关的参数
    }),
    new webpack.HotModuleReplacementPlugin(), // 热更新插件
    new ExtractTextPlugin('css/index.css') // 将css分离
  ]
}
