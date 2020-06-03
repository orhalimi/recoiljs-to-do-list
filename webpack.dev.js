

const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.base.js');

const config = merge(baseConfig, {
    devtool: 'inline-module-source-map',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        historyApiFallback: true,
        open: true,
      },
    plugins:[
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify('dev'),
        }),

        new MiniCssExtractPlugin({
            path:  path.resolve(__dirname, 'dist'),
            filename: "styles/style.css",
            chunkFilename: "styles/style.css",
        }),
    ]
});



module.exports = config;