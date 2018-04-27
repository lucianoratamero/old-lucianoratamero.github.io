module.exports = {
    "extends": "airbnb",
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/prefer-stateless-function": [0],
      "react/no-unescaped-entities": [0],
      "react/no-array-index-key": [0],
      "react/prop-types": [0],
      "jsx-a11y/anchor-is-valid": [0],
      "react/no-multi-comp": [0]
    },
    "globals": {
      "document": false,
      "window": false
    }
};
