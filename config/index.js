'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',   //静态资源文件夹(一般存放css,js,image等文件)
    assetsPublicPath: '/',          //根目录
    proxyTable: {},                 //API代理，解决跨域
    host: 'localhost',              //可被process.env.HOST
    port: 8080,                     //可被process.env.HOST
    autoOpenBrowser: true,          //自动打开浏览器
    errorOverlay: true,             //浏览器错误提示
    notifyOnErrors: true,           //跨平台错误提示
    poll: false,                    //监听文件改动通知
    devtool: 'cheap-module-eval-source-map',  //配置不同的调试模式
    cacheBusting: true,             //配合devtool，当文件改动导致清除缓存时，是否生成source-map
    cssSourceMap: true              //记录代码压缩前的位置信息，当产生错误时，定位未压缩前端额位置
  },

  build: {
    index: path.resolve(__dirname, '../dist/index.html'),  //编译后“首页面”生成的绝对路径和名字
    assetsRoot: path.resolve(__dirname, '../dist'),        //编译后代码的路径
    assetsSubDirectory: 'static',                          //静态资源文件夹(一般存放css,js,image等文件)
    assetsPublicPath: '/',                                 //发布的根目录(dist文件夹)
    productionSourceMap: true,                             //是否开启source-map
    devtool: '#source-map',                                
    productionGzip: false,                                 //是否压缩
    productionGzipExtensions: ['js', 'css'],               //gzip模式下需要压缩的文件的扩展名有js和css
    bundleAnalyzerReport: process.env.npm_config_report    //是否开启打包后的分析报告
  }
}
