//파싱에러로 추가함 "Parsing error: No Babel config file detected for..." 에러
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  rules: {
    "no-console": "off",//console.log 사용 시 경고
    "no-unused-vars": "warn",//할당되지 않은 변수 있을 시 경고
  },
}
