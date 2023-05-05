// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
require("request");
const EslintPlugin = require("eslint-webpack-plugin");
const webpack = require("webpack");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
import('jest').Config
// const isProduction = process.env.NODE_ENV == "production";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    compareBeforeEmit: true, // проверяет существует ли файл и его содержимое 
    publicPath: "./js/",

    libraryTarget: "this",
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new ESLintWebpackPlugin({
      overrideConfigFile: path.resolve(__dirname, ".eslintrc.js"),
      files: path.resolve(__dirname, "./src/js/")
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        minimize: false,
      }
    }),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
      'bower_components',
    ],
  },
};

// module.exports = () => {
// 	if (isProduction) {
// 		config.mode = "production";
// 	} else {
// 		config.mode = "development";
// 	}
// 	return config;
// };
