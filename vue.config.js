// const path = require('path')

// function resolve (dir) {
//   return path.join(__dirname, dir)
// }

module.exports = {
  // baseUrl: './', // 默认值
  // publicPath: 'http://oss.liqunchina.com/',
  lintOnSave: true,
  // configureWebpack: (config) => {
  //   // externals
  //   config.externals = {
  //     'vue': 'Vue',
  //     'element-ui': 'ELEMENT',
  //     'echarts': 'echarts'
  //   }
  // },
  // configureWebpack: (config) => {
  //   config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
  // },
  productionSourceMap: false,
  devServer: {
    port: 8000,
    proxy: {
      // 前端开发环境
      '/api': {
        target: 'http://10.154.119.196:19051',
        changeOrigin: true,
        pathRewrite: (path, req) => {
          let p = path.replace(/^\/api/, '')
          if (p.indexOf('?') >= 0) {
            return p.replace('?', '.json?')
          } else {
            return p + '.json'
          }
        }
      }
      // 与后端同学联调，用下面一段：
      // '/api': {
      //   target: 'http://localhost:8080',
      //   changeOrigin: true,
      //   pathRewrite: (path, req) => {
      //     let p = path.replace(/^\/api/, '')
      //     return p
      //   }
      // }
    }
  }
}
