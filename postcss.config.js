module.exports = {
    'plugins': {
        'autoprefixer': {},
        'postcss-pxtorem': {
            rootValue: 75,   // 根字号
            // unitPrecision: 5,
            propList: ['*'],   // 设置为*允许所有属性单位转换
            // selectorBlackList: [],  // 设置黑名单， 忽略属性的单位转换
            replace: true,
            mediaQuery: false,
            minPixelValue: 0
        }
    }
};
  