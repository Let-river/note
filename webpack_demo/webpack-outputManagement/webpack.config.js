const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 根据配置入口起点的名称，生成新的 index.html 文件
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 在每次构建前清理 `/dist` 文件夹

module.exports = {
    // entry: './src/index.js',
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
};