const path = require('path')

function resolve(dir) {
  // return path.join(__dirname, '..', dir)
  return path.join(__dirname, dir)
}

module.exports = {
  // 添加webpack的配置
  configureWebpack: {
    resolve: {
      alias: { // 别名
        'vue$': 'vue/dist/vue.esm.js', // 使用vue库带编译器的es版本
        'components': resolve('src/components'),
      }
    }
  },
  // 代理配置
   devServer: {
     proxy: {
       '/api': {
         target: 'http://localhost:5000',
         changeOrigin: true,
         pathRewrite: {
           '^/api': '', // 去掉path前面的/api
         },
       }
     }
   }
}