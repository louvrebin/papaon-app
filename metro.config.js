const path = require('path');
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);
  config.resolver.extraNodeModules = {
    ...config.resolver.extraNodeModules,
    config: path.resolve(__dirname, "config"),
    utils: path.resolve(__dirname, "utils"),
  };
  return config;
})();
