const path = require("path");


module.exports = {
    publicPath: './',
    lintOnSave: false,// 是否在保存的时候检查
    configureWebpack: {
        resolve: {
            //配置路径别名
            alias: {
                'src': '@/src',

            }
        }
    },
    devServer: {
        overlay: { // 让浏览器 overlay 同时显示警告和错误
            warnings: true,
            errors: true
        },
        open: true, // 是否打开浏览器
        host: "localhost",
        port: "8080", // 代理断就
        https: false,
        hotOnly: true, // 热更新

    }
}
