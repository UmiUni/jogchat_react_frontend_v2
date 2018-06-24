/* eslint-disable */

const { injectBabelPlugin } = require('react-app-rewired');
// $FlowFixMe
const babelConfig = require('./.babelrc.json');

module.exports = function override ( config ) {
  config = injectBabelPlugin(
    babelConfig.plugins[0],
    config
  );
  return config;
};
