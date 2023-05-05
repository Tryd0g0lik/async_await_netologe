module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "max-classes-per-file": 0,
    "no-undef": 0,
    "no-tabs": 0,
    "indent": 0,
    "no-sequences": 0,
    "prefer-promise-reject-errors": 0,
    "lines-between-class-members": ["error", "always"],
    "operator-linebreak": 0,
    "import/newline-after-import": ["error", { "count": 2 }],
    "import/no-named-default": 0,
    "no-unused-expressions": ["warn", { "allowShortCircuit": true, "allowTernary": true }],
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "quote-props": ["error", "always"],
    "spaced-comment": ["error", "always"],
    "no-restricted-syntax": [
      "error",
      "LabeledStatement",
      "WithStatement",
    ],
    "new-cap": 0,
    "class-methods-use-this": "warn",
    "arrow-parens": ["error", "as-needed", { "requireForBlockBody": false }],
    "array-callback-return": 0,
    "linebreak-style": 0,
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1, "maxBOF": 0 }]
  },
};
