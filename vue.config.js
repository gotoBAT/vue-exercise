module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    devServer: {
        proxy: {
          '/michael': {
            target: 'http://localhost:5000',
            pathRewrite:{'^/michael':''},
            ws: true,
            changeOrigin: true
          },
          '/durant': {
            target: 'http://localhost:5001',
            pathRewrite:{'^/durant':''},
            ws: true, //用于支持websocket
            changeOrigin: true //用于控制请求头中的host值
          }
        }
      }

}