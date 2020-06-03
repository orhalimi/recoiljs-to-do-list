const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

const config = {
    entry:   
    {
        index: [
        './index.js',
        './styles/main.css',
      ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react'
                            ],
                            plugins: ['@babel/plugin-transform-runtime']
                        },
                    }
                ],
            },
            {
                exclude: path.join(__dirname, '/assets/'),
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,    
                    },      
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    }, 
                    'postcss-loader'
                ],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader'],
            }
        ]
    },
    
    plugins: [

        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: 'index.html'
        }),

        new RemovePlugin({
            before: {
                root: './dist',
                include: [
                    'js/main.js',
                    'styles/style.css',
                ],
                test: [
                        {
                            folder: './js',
                            method: (absPath) => new RegExp(/(.*)\.([^-\\\/]+)\.js/).test(absPath)
                        },
                        {
                            folder: './styles',
                            method: (absPath) => new RegExp(/(.*)\.([^-\\\/]+)\.css/).test(absPath)
                        }
                    ]
                }
        }),
    ],

    resolve: {
        modules: [
            path.resolve('./'),
            path.resolve('./node_modules'),
          ],
          extensions: ['.js', '.jsx', '.json', '.css'] 
    }
}

module.exports = config;