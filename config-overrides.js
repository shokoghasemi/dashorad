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
      "@primary-color": "#1ffffA",
      "@layout-body-background": "#f0f2f5",
      "@slider-rail-background-color":"#f56f",
    }
  })
);
