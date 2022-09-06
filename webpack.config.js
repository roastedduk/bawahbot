const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  target: 'webworker',
  output: {
    filename: 'worker.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      fs: false,
    },
  },
  module: {
    rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
  },
  plugins: [new NodePolyfillPlugin()],
  performance: {
    hints: false,
  },
};