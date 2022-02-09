const ReactRefreshTypeScript = require('react-refresh-typescript');

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
  base: {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: 'ts-loader'
  },
  develop: {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [ReactRefreshTypeScript()],
          }),
          transpileOnly: true,
        },
      },
    ],
  },
  production: {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [babelLoader, 'ts-loader'],
  },
};
