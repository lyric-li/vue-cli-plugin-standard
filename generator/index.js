module.exports = (api, options) => {
  api.extendPackage({
    name: options.name,
    description: options.description,
    browserslist: undefined,
  });

  // 创建新模板
  api.render("./template");
};
