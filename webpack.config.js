const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './main.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './example'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, './example'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
        }]
      }
    ]
  },
  plugins: [
    new Dotenv()
  ]
};
