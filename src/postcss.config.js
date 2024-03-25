module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      unitPrecision: 6,
      unitToConvert: 'px',
      viewportUnit: 'vmin',
      fontViewportUnit: 'vmin',
      propList: ['*'],
    }
  }
}

// module.exports = {
//   plugins: {
//     "postcss-px-to-viewport": {
//       // 需要转换的单位
//       unitToConvert: "px",
//       // 设计稿的视口宽度
//       viewportWidth: 375,
//       // 单位转换后保留的精度
//       unitPrecision: 4,
//     },
//   },
// }
