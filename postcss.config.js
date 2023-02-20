module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      unitToConvert: "px", // 要转化的单位
      viewportWidth: 1920, // 设置成设计稿宽度
      unitPrecision: 5, // 转换后的精度，即小数点位数
      propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
      fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
      selectorBlackList: [], // 指定不转换为视窗单位的类名，
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false,这点可以用来写固定弹窗类的样式
      replace: true, // 是否转换后直接更换属性值
      exclude: [/antd-mobile/], // 设置忽略文件，用正则做目录名匹配
      include: undefined,
      landscape: false, // 是否处理横屏情况
      landscapeUnit: "vw",
      landscapeWidth: 568,
    },
  },
};
