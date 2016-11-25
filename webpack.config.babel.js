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

const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >=4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1'
];

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

  postcss: () => ([autoprefixer({ browsers: AUTOPREFIXER_BROWSERS })]),

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

  resolve: {
    root: [
      path.normalize(`${__dirname}/src`)
    ]
  },

  devtool: 'eval-source-map'
};
