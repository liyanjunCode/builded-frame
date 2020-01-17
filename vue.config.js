const CompressionWebpackPlugin = require('compression-webpack-plugin')
const ErudaWebpackPlugin = require('eruda-webpack-plugin')
const multi = require('./src/assets/js/multiPage')
const aliasConfig = require('./alias.config')
const pages = multi.setPages({})
const isPro = process.env.NODE_ENV == 'production'

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    lintOnSave: "error", // eslint-loader 是否在保存的时候检查
    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
    productionSourceMap: true,
    parallel: require("os").cpus().length > 1,
    pages,
    chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true);
        // 別名配置
        const aliasMap = aliasConfig.resolve.alias
        Object.keys(aliasMap).forEach(key => {
            config.resolve.alias.set(key, aliasMap[key])
        })
    },
    configureWebpack: config => {
        if (isPro) {
            return {
                plugins: [

                    // 开启 Gzip 压缩
                    new CompressionWebpackPlugin({
                        filename: '[path].br[query]',
                        algorithm: 'gzip',
                        test: new RegExp(
                            '\\.(js|css)$'
                        ),
                        threshold: 10240,
                        minRatio: 0.8
                    })
                ]
            }
        } else {
            return {
                plugins: [

                    // 调试工具
                    new ErudaWebpackPlugin({
                        force: true
                    })
                ]
            }
            
        }
    },
    css: {
        // requireModuleExtension: false, // 启用 CSS modules
        extract: process.env.NODE_ENV !== 'development', // 提取CSS在开发环境不开启，因为它和CSS热重载不兼容, 
        sourceMap: false, // 开启 CSS source maps，一般不建议开启
        loaderOptions: {}
    },
    devServer: {
        open: true, // 是否自动打开浏览器页面
        host: '0.0.0.0', // 指定使用一个 host。默认是 localhost
        port: 8080, // 端口地址
        https: false, // 使用https提供服务

        // string | Object 代理设置
        proxy: false,
        progress: true
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: []
        }
    }
}