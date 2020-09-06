const { name } = require("../package.json");

module.exports = {
	devServer: {
		port: 3300,
	},
	chainWebpack: (config) => {
		config.plugin("html").tap((args) => {
			args[0].title = name.replace("-", " ");
			return args;
		});
	},
};
