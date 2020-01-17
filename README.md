# meijie-h5

## Project setup
```
npm install
```

### development 本地开发模式
```
npm run start
```
### mock 本地开发数据模拟模式
```
npm run mock
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### 1. 引入vantjs，taost已全局挂在， 其他组件可按需加载

### 2. assets下js文件

##### 1. assets文件夹下js中 rem.js为设置根字节大小

##### 2. assets文件夹下js中 multiPage.js为多页面配置

##### 3. assets文件夹下js中 utils.js为工具类函数

##### 4. assets文件夹下js中 mock.js为接口数据模拟文件，只在mock模式下加载，mockjs使用请自行观看官方文档

##### 5. assets文件夹下js中 base.js为vue初始化文件及所需全局配置引入

##### 6. assets文件夹下js中 mixin.js为全局混合函数，可将所有页面公用方法写入

##### 7. assets文件夹下js中 filters.js为全局过滤器，可将所有页面公用方法写入

##### 8. assets文件夹下js中 axios.js为封装get和post方法

### 3. components/common 下组件说明
##### 1. common下组件以A-Z的大写字母开头命名自动全局注册，可直接调用，为基础通用组件

### 4. 多页面结构说明
##### get和post请求已挂在vue原型，通过this.$post和this.$get进行调用

### 5. 多页面结构说明
##### pages下的每个文件夹为单独一个页面， 页面中必须存在index.js、index.html和App.vue
##### pages下可按需求是否引入vuex和vue-router， 在index.js中进行相关配置

### 6. 路径映射在src下的alias.config.js
    


