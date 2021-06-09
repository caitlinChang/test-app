const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  overrideDevServer,
  addBabelPlugins,
} = require("customize-cra");

const devProxy = () => {
  return (config) => {
    console.log("配置 = ", config);
    debugger;
    config.proxy = {
      "/apps/chatbot-api": {
        target: `http://apollo-portal.test.shopee.io`,
        changeOrigin: true,
        secure: false,
        // cookieDomainRewrite: {
        //   "*": "localhost",
        // },
      },
    };

    return config;
  };
};

module.exports = {
  webpack: override(
    fixBabelImports("import", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: true,
    }),
    addWebpackAlias({
      ["@"]: require("path").resolve(__dirname, "src"),
    })
  ),
  devServer: overrideDevServer(devProxy()),
};
