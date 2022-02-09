const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatoscopeWebpackPlugin = require('@statoscope/webpack-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const ENV = require('./env');
const tsLoader = require('./loaders/typescript');
const cssLoader = require('./loaders/css');
const fileLoader = require('./loaders/file');
const path = require("path");
const moduleFederation = require('./federation').moduleFederation;

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  entry: `${ENV.SRC_DIR}/index.js`,

  output: {
    uniqueName: 'main_shell',
    publicPath: '/',
    clean: true,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      tsLoader.develop,
      cssLoader.develop,
      fileLoader.develop,
    ]
  },

  devServer: {
    hot: false,
    static: path.join(__dirname, 'dist'),
    port: ENV.PORT,
    historyApiFallback: true,
  },

  plugins: [
    new Dotenv(),
    moduleFederation,
    new StatoscopeWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './webpack/templates/index-dev.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
      ignoreOrder: true,
    }),
    new LiveReloadPlugin({
      port: 35729,
    }),
  ]
};
