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
    config.proxy = {
      "/apps/chatbot-api/envs/TEST": {
        target: `http://apollo-portal.test.shopee.io`,
        changeOrigin: true,
        secure: false,
      },
      "/apps/chatbot-api/envs/UAT": {
        target: `http://apollo-portal.test.shopee.io`,
        changeOrigin: true,
        secure: false,
      },
      "/apps/chatbot-api/envs/LIVE": {
        target: `https://apollo-portal.shopee.io`,
        changeOrigin: true,
        secure: false,
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
