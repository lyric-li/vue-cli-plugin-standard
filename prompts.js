// 将 `package.json` 作为参数传入函数
module.exports = (pkg) => {
  const prompts = [
    {
      type: "input",
      name: "name",
      required: true,
      message: "Your project name",
      default: pkg.name,
    },
    {
      type: "input",
      name: "description",
      required: false,
      message: "Project description",
      default: pkg.description || "",
    },
  ];

  return prompts;
};
