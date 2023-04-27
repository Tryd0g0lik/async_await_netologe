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
    "no-sequences": 0,
    "no-undef": 0,
    "indent": 0,
    "no-unused-expressions": 0,
    "class-methods-use-this": 0,
    "import/no-named-default": 0,
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
