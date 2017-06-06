/*
 *
 * Webpack DEVELOPMENT configuration file
 *
 */

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const jsonImporter = require('node-sass-json-importer')

module.exports = {
  entry: path.resolve(__dirname, 'demo', 'index.js'),

  output: {
    path: path.resolve(__dirname, 'demo/build.js'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => ([autoprefixer({ browsers: ['last 3 versions', '> 1%'] })])
              }
            },
            {
              loader: 'sass-loader',
              options: {
                outputStyle: 'extended',
                importer: jsonImporter
              }
            }
          ]
        }))
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'demo', 'index.html') }),
    new ExtractTextPlugin({ filename: '[name].[contenthash].css' }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'demo'),
    publicPath: '/',
    historyApiFallback: true,
    port: 8000,
    host: '0.0.0.0',
    noInfo: false,
    inline: true,
    hot: true,
    stats: 'errors-only'
  },

  devtool: 'eval-source-map'
}
