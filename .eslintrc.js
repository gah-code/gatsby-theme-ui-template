module.exports = {
  parser: "@babel/eslint-parser",
  extends: ["react-app", "plugin:react/recommended"],
  rules: {
    "react/react-in-jsx-scope": "off", // Disable the rule that requires React in scope
  },
}
