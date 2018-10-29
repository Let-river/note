const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 根据配置入口起点的名称，生成新的 index.html 文件
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 在每次构建前清理 `/dist` 文件夹
const webpack = require('webpack');


module.exports = {
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
};
