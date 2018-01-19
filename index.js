module.exports = {
  "extends": "airbnb",
  "rules": {
    "prop-types": 0,
    "react/forbid-prop-types": ["error", { "forbid": ["any", "array"] }],
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "global-require": 0,
    "strict": 0,
    "no-console": 1,
    "react/no-unused-state": 1,
    "react/no-unused-prop-types": 1,
    "no-unused-vars": 1,
    "no-trailing-spaces": 0,
    "object-curly-newline": ["error", { "consistent": true }],
    "function-paren-newline": ["error", "consistent"],
    "max-len": [2, 120, 2, { "ignoreUrls": true, "ignoreComments": false }],
    "react/prefer-stateless-function": 0,
    "prefer-destructuring": 0,
    "comma-dangle": ["error", "never"],          // do not allow dangling commas.
    "no-use-before-define": 0,                   // allow using variables before they are defined.
    "arrow-body-style": 0,                       // allow curly braces with single line arrow functions.
    "object-shorthand": 0,                       // allow same name key/value syntax: e.g. { username: username }
    "padded-blocks": 0,                          // allow a space after a block declaration.
    "no-underscore-dangle": 0,                   // allow private methods/properties to start with an underscore.
    "import/prefer-default-export": 0,           // allow single non-default export.
    "camelcase": 0                               // allow non-camelcase variables/properties.
  },
  "globals": {
    "fetch": false
  },
  "parser": "babel-eslint"
};
