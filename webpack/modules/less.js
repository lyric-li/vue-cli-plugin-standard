const path = require("path");
const AbstractWebpack = require("../abstract-webpack");

class Less extends AbstractWebpack {
  chainWebpack(config) {
    super.chainWebpack(config);

    [
      ...config.module.rule("less").oneOfs.values(),
    ].forEach((rule) => {
      rule.use("less-loader").options({
        lessOptions: {
          globalVars: {
            // 引用 theme.less 文件（文件路径为绝对路径）
            hack: `true; @import "${path.resolve(process.cwd(), "src/assets/styles/theme.less")}";`,
          },
          modifyVars: {
            // 通过 modify.less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "${path.resolve(process.cwd(), "src/assets/styles/modify.less")}";`,
          },
        }
      });
    });
  }
}

module.exports = Less;
