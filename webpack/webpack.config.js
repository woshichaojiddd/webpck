// 导入path
var path = require('path')

// 导入html-webpack-plugin
var htmlWebpackPlugin = require('html-webpack-plugin')

var hwp = new htmlWebpackPlugin({
    // 设置生成预览页面的模板文件
    template: './src/index.html',
    filename: 'index.html'
})

// 导入vue配置文件
const VueLoaderPlugin = require("vue-loader/lib/plugin")

var vuePlugin = new VueLoaderPlugin()

module.exports = {
    mode: "development",
    //设置入口文件路径
    entry: path.join(__dirname, './src/index.js'),
    // 设置出口文件路径
    output: {
        // 设置路径
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    // 向外暴露插件
    plugins: [hwp, vuePlugin],
    // 默认情况下，webpack只能打包js文件，如果想要打包非js文件，需要调用loader加载器才能打包
    // 此处配置不同文件的打包
    module: {
        rules: [{
            // css 文件的load配置  css浏览器兼容性配置
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }, {
            // less文件的load配置
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
            //limit用来设置字节数，只有小于limit值的图片，才会转换为base64图片
            use: "url-loader?limit=16939"
        }, {
            test: /\.js$/,
            use: "babel-loader",
            //exclude为排除项，意思是不要处理node_modules中的js文件
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            loader: "vue-loader"
        }]
    }

}