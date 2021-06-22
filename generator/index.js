module.exports = (api, options) => {
  api.extendPackage({
    name: options.name,
    description: options.description,
    browserslist: undefined,
    eslintConfig: undefined,
    dependencies: {
      "vant": "^2.12.21",
    },
    devDependencies: {
      "@vue/eslint-config-airbnb": "^5.0.2",
      "stylelint": "^13.13.1",
      "stylelint-config-standard": "^22.0.0",
      "stylelint-order": "^4.1.0",
      "babel-plugin-import": "^1.13.3",
      "less": "^3.11.3",
      "less-loader": "^6.1.3",
    },
  });

  // 创建新模板
  api.render("./template", options);
  api.injectImports(api.entryFile, "import \"./plugins/vant\";");
  api.injectImports(api.entryFile, "import \"./assets/styles/reset.less\"");
};

module.exports.hooks = (api) => {
  api.afterInvoke(() => {
    const cp = require("child_process");
    const cpe = cp.exec("yarn && npx vue-cli-service lint --fix");
    cpe.stdout.on("data", function(data) {
      console.log(data);
    });
    cpe.stderr.on("data", function(data) {
      console.error(data);
    });
  });
};
