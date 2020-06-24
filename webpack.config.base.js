const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '自动测试',
      template: 'src/assets/index.html'
    })
  ]
}

