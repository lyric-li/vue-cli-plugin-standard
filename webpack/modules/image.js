const path = require("path");
const AbstractWebpack = require("../abstract-webpack");

class Image extends AbstractWebpack {
  chainWebpack(config) {
    super.chainWebpack(config);

    const imagesRule = config.module.rule("images");
    imagesRule
      .use("url-loader")
      .loader("url-loader")
      .tap((options) => Object.assign(options, {limit: 8192}));
  }
}

module.exports = Image;
