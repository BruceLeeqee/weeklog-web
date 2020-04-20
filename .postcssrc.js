// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
      browsers: [
      'last 5 version', //兼容到上五个版本
      '> 1%' //兼容到大于1%的用户
    ]}
  }
}
