const path = require("path");

// 绝对路径
function resolve(dir) {
  return path.join(__dirname, "", dir);
}

module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          globalVars: {
            // 引用 theme.less 文件（文件路径为绝对路径）
            hack: `true; @import "${resolve("src/assets/styles/theme.less")}";`,
          },
          modifyVars: {
            // 通过 modify.less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "${resolve("src/assets/styles/modify.less")}";`,
          },
        },
      },
    },
  },
};
