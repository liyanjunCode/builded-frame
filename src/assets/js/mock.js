import Mock from 'mockjs'
console.log(11111, Mock)
// 接口模拟形式， 可拦截接口请求
// Mock.mock(/\/game\/list/, function() {
//     return Mock.mock({
//         "ret":0,
//         "data":{}
//     })
// })

// 生成模拟数据， 自主在文件中引入数据模式
// var data = Mock.mock({
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'list|1-10': [{
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': 1
//     }]
// })

