module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true
	},
	extends: [
		'airbnb-base',
		'plugin:import/errors',
	],
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		"linebreak-style": [
			"error",
			"windows"
		],
		"no-restricted-syntax": [
			"error",
			"LabeledStatement",
			"WithStatement"
		],
		"no-multiple-empty-lines": [
			"error",
			{
				"max": 2,
				"maxEOF": 1,
				"maxBOF": 0
			}
		]
	},
};
