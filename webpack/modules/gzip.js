const AbstractWebpack = require("../abstract-webpack");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];

class Gzip extends AbstractWebpack {
  configureWebpack(config) {
    const isprod = this.isProduction();
    if (isprod) {
      config.plugins.push(new CompressionWebpackPlugin([{
        algorithm: "gzip",
        test: new RegExp(`\\.(${productionGzipExtensions.join("|")})$`),
        threshold: 10240,
        minRatio: 0.8,
      }]));
    }
    return super.configureWebpack(config);
  }
}

module.exports = Gzip;
