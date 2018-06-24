const { injectBabelPlugin } = require('react-app-rewired');
const babelConfig = require('.babelrc');

module.exports = function override ( config ) {
  config = injectBabelPlugin(
    babelConfig.plugins,
    config
  );
  return config;
};
