/* eslint-disable */

const { injectBabelPlugin } = require('react-app-rewired');
// $FlowFixMe
const babelConfig = require('./.babelrc.json');
const _ = require('lodash');

module.exports = function override ( config ) {
  _.each(babelConfig.plugins, (plugin) => {
    config = injectBabelPlugin(plugin, config);
  })
  return config;
};
