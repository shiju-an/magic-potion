const path = require('path');
const DIST_DIR = path.resolve(__dirname, 'client', 'dist');
const SRC_DIR = path.resolve(__dirname, 'client', 'src', 'App.js');

module.exports = {
  entry: SRC_DIR,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },

  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },

  devServer: {
    contentBase: DIST_DIR
  }
};
