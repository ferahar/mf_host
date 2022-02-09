const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const ENV = require('./env');
const tsLoader = require('./loaders/typescript');
const cssLoader = require('./loaders/css');
const moduleFederation = require('./federation').moduleFederation;

module.exports = {
  mode: 'production',
  entry: `${ENV.SRC_DIR}/index.js`,

  output: {
    uniqueName: 'main_shell',
    publicPath: 'auto',
    clean: true,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      tsLoader.develop,
      cssLoader.production,
    ]
  },

  plugins: [
    new Dotenv({
      systemvars: true,
      silent: true,
    }),
    moduleFederation,
    new HtmlWebpackPlugin({
      template: './webpack/templates/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
      ignoreOrder: true,
    })
  ].filter(Boolean)
};

