module.exports = (api, options) => {
  api.extendPackage({
    name: options.name,
    description: options.description,
    browserslist: undefined,
    eslintConfig: undefined,
    scripts: undefined,
    dependencies: {
      "vue-router": "^3.5.2",
      "vuex": "^3.6.2",
      "vant": "^2.12.21",
      "nprogress": "^0.2.0",
      "axios": "^0.21.1",
    },
    devDependencies: {
      "@vue/eslint-config-airbnb": "^5.0.2",
      "stylelint": "^13.13.1",
      "stylelint-config-standard": "^22.0.0",
      "stylelint-order": "^4.1.0",
      "stylelint-webpack-plugin": "^3.0.1",
      "babel-plugin-import": "^1.13.3",
      "less": "^3.11.3",
      "less-loader": "^6.1.3",
      "postcss-px-to-viewport": "^1.1.1",
      "svg-sprite-loader": "^6.0.8",
      "url-loader": "^4.1.1",
      "compression-webpack-plugin": "^6.0.5",
    },
  });

  api.extendPackage({
    scripts: {
      "serve": "vue-cli-service serve",
      "build:testing": "vue-cli-service build --mode testing",
      "build:prod": "vue-cli-service build --mode prod",
      "eslint": "vue-cli-service lint",
      "eslint:fix": "vue-cli-service lint --fix",
      "stylelint": "vue-cli-service stylelint",
      "stylelint:fix": "vue-cli-service stylelint --fix",
      "lint": "npm run eslint && npm run stylelint",
      "lint:fix": "npm run eslint:fix && npm run stylelint:fix",
    },
  });

  // 创建新模板
  api.render("./template", options);
  api.injectImports(api.entryFile, "import router from './router'");
  api.injectImports(api.entryFile, "import store from './store'");
  api.injectImports(api.entryFile, "import \"./plugins/vant\";");
  api.injectImports(api.entryFile, "import \"./assets/styles/reset.less\";");
  api.injectImports(api.entryFile, "import \"./icons\";");
  api.injectRootOptions(api.entryFile, [
    "router",
    "store",
  ]);
};

module.exports.hooks = (api) => {
  api.afterInvoke(() => {
    const cp = require("child_process");
    const cpe = cp.exec("yarn && yarn run lint:fix");
    cpe.stdout.on("data", function(data) {
      console.log(data);
    });
    cpe.stderr.on("data", function(data) {
      console.error(data);
    });
  });
};
