const path = require('path');
const config = {
  entry: {
    app: './index.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      }
    ]
  },
  resolve: {
    extensions: [ '.web.js', '.js' ]
  }
};

module.exports = config;
