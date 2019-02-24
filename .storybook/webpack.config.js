const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.stories\.tsx?$/,
        loader: require.resolve('@storybook/addon-storysource/loader'),
        enforce: 'pre'
      },
      {
        test: /\.(sass|scss)$/,
        loader: 'sass-loader'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../src')
    }
  }
};
