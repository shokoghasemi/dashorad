const { override, fixBabelImports, addLessLoader } = require("customize-cra");
//const darkThemeVars = require("antd/dist/dark-theme");
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      hack: `true;@import "${require.resolve(
        "antd/lib/style/color/colorPalette.less"
      )}";`,
      //   ...darkThemeVars,
      "@primary-color": "#00cec9",
      "@error-color": "#ffbe76",
      "@layout-body-background": "#f0f2f5",
      "@layout-sider-background": "#636e72"
      // "@layout-sider-min-width":"160px",
      // "@layout-sider-width":"160px",
    }
  })
);
