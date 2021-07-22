const path = require("path");
const { readDirSync } = require("./shared/util");
const AbstractWebpack = require("./webpack/abstract-webpack");

module.exports = (api, options) => {
  const commandFiles = readDirSync(path.resolve(__dirname, './command'), filename => /\.js$/.test(filename));
  commandFiles.map(file => require(file)).forEach(f => f(api, options));

  const webpackFiles = [
    ...readDirSync(path.resolve(__dirname, "./webpack/modules")),
    ...readDirSync(api.resolve("./webpack/modules")),
  ];
  const webpackConfigs = webpackFiles
    .map((file) => require(file))
    .filter((f) => f.constructor === AbstractWebpack.constructor)
    .map((f) => Reflect.construct(f, [options, api]))
    .filter((c) => c instanceof AbstractWebpack)
    .filter((c) => c.enable());

  api.configureWebpack((config) => webpackConfigs.forEach((c) => c.configureWebpack(config)));
  api.chainWebpack((config) => webpackConfigs.forEach((c) => c.chainWebpack(config)));
};
