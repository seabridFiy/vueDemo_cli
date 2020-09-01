import serverMsg from "./config/serve";

const { BaseURl: target, environment } = serverMsg;
console.log(`这是${environment}环境`);
module.exports = {
  publicPath: "/",
  lintOnSave: false,
  // 禁用生产环境的 source map
  productionSourceMap: false,
  devServer: {
    port: 4399,
    proxy: {
      "/chen-service": {
        target,
        changeOrigin: true,
        pathRewrite: {
          "^/chen-service": "/"
        }
      }
    }
  }
};
