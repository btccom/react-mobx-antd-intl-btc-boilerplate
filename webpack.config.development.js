const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://local.btcfe.com:8083',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    'whatwg-fetch',
    './src/index.js'
  ],
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: process.env.PORT || 8083,
    host: 'local.btcfe.com',
    publicPath: '/',
    historyApiFallback: true,
    disableHostCheck: true,
    proxy: {
      '/api/**': {
        target: 'https://explorer-web.api.btc.com/v1/eth/',
        pathRewrite: { '^/api': '' },
        //secure: false,
        logLevel: 'debug',
        changeOrigin: true
      }
    }
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.[hash].js'
  },
  devtool: 'eval',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        APP_VERSION: JSON.stringify(process.env.APP_VERSION),
        APP_COIN_TYPE: JSON.stringify(process.env.APP_COIN_TYPE)
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
