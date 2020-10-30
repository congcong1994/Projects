// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ["plugin:vue/essential"],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": [2, { vars: "all", args: "after-used" }], //不能有声明后未被使用的变量或参数
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always"
      }
    ],
    eqeqeq: ["off"],
    quotes: [0, "single"],
    semi: [2, "always"], //语句强制分号结尾
    "semi-spacing": [0, { before: false, after: true }],
    "vue/no-use-v-if-with-v-for": "off"
  }
};
