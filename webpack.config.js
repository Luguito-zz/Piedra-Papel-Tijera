const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/App.js',
    output: {
        path: path.resolve(__dirname + '/build'),
        filename: 'bundle.js',
    },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use:[
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'},
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader"
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Piedra',
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
}