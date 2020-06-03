const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.base.js');
const TerserPlugin = require('terser-webpack-plugin');


const config = merge.smart(baseConfig, {

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.[chunkhash].js',
    },

    optimization: {
        minimize: true,
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),
            new TerserPlugin({extractComments: false})
        ],
    },
    mode: 'production',

    plugins:[
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify('production'),
        }),
        new MiniCssExtractPlugin({
            path:  path.resolve(__dirname, 'dist'),
            filename: "styles/style.[contenthash].css",
            chunkFilename: "styles/style.[contenthash].css",
        }),
    ],
});

module.exports = config;