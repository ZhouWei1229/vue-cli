const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // port:3000,
    proxy: {
      '': {
        target: 'http://localhost:3000', // Express 服务器的地址
        changeOrigin: true,
        pathRewrite: {
          '^': '/api' // 将前缀 /api 替换为空
        }
      }
    }
  }
});
