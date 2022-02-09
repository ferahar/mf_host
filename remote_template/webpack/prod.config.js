const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const cssLoader = require('./loaders/css');
const tsLoader = require('./loaders/typescript');
const ENV = require('./env');
const moduleFederation = require('./federation').moduleFederation;

module.exports = {
  mode: 'development',
  entry: `${ENV.SRC_DIR}/index.js`,

  optimization: {
    runtimeChunk: false
  },
  output: {
    uniqueName: 'app_kfa',
    publicPath: 'auto',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      tsLoader.base,
      cssLoader.develop,
    ]
  },

  plugins: [
    moduleFederation,
    new HtmlWebpackPlugin({
      template: './webpack/templates/index.html',
      chunks: ['main'],
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
      ignoreOrder: true,
    }),
  ].filter(Boolean)
};
