/*
 *
 * Webpack DEVELOPMENT configuration file
 *
 */

import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  entry: path.normalize(`${__dirname}/demo/index.js`),

  output: {
    path: path.normalize(`${__dirname}/demo/build.js`),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!postcss-loader')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css!postcss!sass?outputStyle=extended')
      }
    ]
  },

  postcss: () => ([autoprefixer({ browsers: ['last 3 versions', '> 1%'] })]),

  plugins: [
    new HtmlWebpackPlugin({ template: path.normalize(`${__dirname}/demo/index.html`) }),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: path.normalize(`${__dirname}/demo`),
    historyApiFallback: true,
    port: 8000,
    host: '0.0.0.0',
    colors: true,
    noInfo: false,
    inline: true,
    hot: true,
    stats: 'erros-only'
  },

  devtool: 'eval-source-map'
};
