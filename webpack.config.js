var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require
('path')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: '自动测试',
    template: 'src/assets/index.html'
  })]
}