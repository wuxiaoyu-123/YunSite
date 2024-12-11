const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/YunSite/'
    : '/',
  outputDir: 'docs',
  assetsDir: './',
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        return {
          ...options,
          limit: 8192,
          publicPath: process.env.NODE_ENV === 'production' ? '/YunSite/' : '/'
        }
      })
    
    // 设置页面标题
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '云深小站'
        return args
      })
  }
}) 