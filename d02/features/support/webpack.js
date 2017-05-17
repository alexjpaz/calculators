const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');


const webpackConfig = require('../../webpack/default.js');
const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
  noInfo: true,
  hot: false
});

module.exports = server;
