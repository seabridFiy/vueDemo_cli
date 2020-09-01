/***
 * 项目环境地址及环境变量统一管理文件
 */
const ENV = {
  development: {
    // 开发环境
    BaseURl: "www.dev.com",
    environment: "开发"
  },
  test: {
    // 测试环境
    BaseURl: "www.test.com",
    environment: "测试"
  },
  experience: {
    // 体验环境
    BaseURl: "www.experience.com",
    environment: "体验"
  },
  production: {
    // 生产环境
    BaseURl: "www.production.com",
    environment: "生产"
  }
};
export default ENV[process.env.VUE_APP_TITLE];
