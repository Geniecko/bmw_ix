const path = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: path(__dirname, '..', 'src', 'index.js'),
  },
  output: {
    filename: '[name].[contenthash:6].js',
    path: path(__dirname, '..', 'dist'),
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path(__dirname, '..', 'public', 'index.html'),
    }),
    new CopyPlugin({
      patterns: [{ from: 'public/assets', to: 'assets' }],
    }),
  ],
};
