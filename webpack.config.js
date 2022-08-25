const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const config = {
  mode: "production",
  entry: './src/scripts.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        type: "asset/resource"
      },
      {
        test: /\.css$/,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'src/index.html' }, {
        context: path.resolve(__dirname, "src"),
        from: '*.css'
      }]
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      '...',
      new HtmlMinimizerPlugin(),
      new CssMinimizerPlugin()
    ]
  }
};

module.exports = config;
