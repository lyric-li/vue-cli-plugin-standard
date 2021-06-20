module.exports = (api, options) => {
  api.extendPackage({
    name: options.name,
    description: options.description,
  });
  // 创建新模板
  // api.render("./template");
};
