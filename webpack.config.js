'use strict'

const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'build.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: "body"
        })
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.tpl$/,
                use: [
                    'html-loader'
                ]
            },
            {
                 test:/\.(png|gif|jpg)$/,
                 use:[
                     {loader: 'url-loader', options: { limit : 5000}},
                     'image-webpack-loader'
                 ]
            },
            {
                test:/\.js$/,
                include:/src/,
                use:[
                    {
                        loader :"babel-loader",
                        options:{
                            presets:["es2015"],
                            plugins:["transform-runtime"]
                        }
                    }
                ]
            },
            // 配置vue文件的解析转换
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            }

        ]
    }
}