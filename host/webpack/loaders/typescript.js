const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-runtime'
    ]
  }
}

module.exports = {
  develop: {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: 'ts-loader',
  },
  production: {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [babelLoader, 'ts-loader'],
  },
};
