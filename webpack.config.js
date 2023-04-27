// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const EslintPlugin = require("eslint-webpack-plugin");
var request = require('request');
var webpack = require('webpack');
// const isProduction = process.env.NODE_ENV == "production";

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		publicPath: "js/",
		libraryTarget: "this",
	},
	devServer: {
		open: true,
		host: "localhost",
	},
	plugins: [
		new EslintPlugin({
			overrideConfigField: path.resolve(__dirname, ".eslintrc.js"),
			files: path.resolve(__dirname, "./src/js/"),
		}),
		new HTMLWebpackPlugin({
			minify: {
				collapseWhitespace: false,
			}
		})
		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [
			"node_modules",
		]
	}
};

// module.exports = () => {
// 	if (isProduction) {
// 		config.mode = "production";
// 	} else {
// 		config.mode = "development";
// 	}
// 	return config;
// };
