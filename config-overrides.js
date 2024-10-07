const webpack = require('webpack');

module.exports = {
  webpack: function (config, env) {
    config.resolve.fallback = {
      process: require.resolve('process/browser'),
      // 其他需要的模块
    };
    return config;
  },
};
