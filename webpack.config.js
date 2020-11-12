const path = require('path');
const DIST_DIR = path.resolve(__dirname, 'client', 'dist');
const SRC_DIR = path.resolve(__dirname, 'client', 'src', 'index.js');

module.exports = {
  entry: SRC_DIR,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },

  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$|jsx/,
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      }
    ]
  },

  devServer: {
    contentBase: DIST_DIR
  }
};
