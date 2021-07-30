const AbstractWebpack = require("../abstract-webpack");
const StyleLintPlugin = require("stylelint-webpack-plugin");

class StyleLint extends AbstractWebpack {
  configureWebpack(config) {
    config.plugins.push(new StyleLintPlugin([{
      files: ["src/**/*.{html,vue,css,less,sass,scss}"],
      fix: false,
      cache: true,
    }]));
    return super.configureWebpack(config);
  }
}

module.exports = StyleLint;
