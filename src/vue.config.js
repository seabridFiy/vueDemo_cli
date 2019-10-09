
module.exports = {
  publicPath: '/',
  // 生产构建禁用eslint检查
  // lintOnSave: process.env.NODE_ENV !== 'production',
  lintOnSave: false,
  //禁用生产环境的 source map
  productionSourceMap: false,
  devServer: {
    port: 4399,
    proxy: {
      '/chen-service': {
        target: 'http://127.0.0.1',
        changeOrigin: true
      }
    }
  }
}