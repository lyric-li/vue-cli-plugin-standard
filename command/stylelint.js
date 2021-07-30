module.exports = (api, options) => {
  api.registerCommand(
    "stylelint",
    {
      description: "A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.",
      usage: "vue-cli-service stylelint",
      options: { "--fix": "automatically fixes the majority of stylistic violations" },
    },
    (args) => {
      let shell = "stylelint \"**/*.{vue,css,less,scss}\" --ignore-path .gitignore";
      if (args.fix) {
        shell += " --fix";
      }
      const cp = require("child_process");
      const cpe = cp.exec(shell);
      cpe.stdout.on("data", function(data) {
        console.log(data);
      });
      cpe.stderr.on("data", function(data) {
        console.error(data);
      });
    }
  );
};
