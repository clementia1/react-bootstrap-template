var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR = path.resolve(__dirname, './src');
let index = APP_DIR + '/index.js';

module.exports = {
    entry: {
        main: ['babel-polyfill', index]
    },
    output: {
        filename: 'bundle.js',
        path: BUILD_DIR,
    },
    module: {
        rules: [{
                test: /(\.css|.scss)$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        presets: ['react', 'env'],
                        plugins: ['transform-class-properties', 'transform-object-rest-spread']
                    }
                }]
            },
            {
                test: /\.(woff2?|ttf|otf|eot|svg|png)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: './static/[name].[ext]'
                    }
                }],
            }
        ],
    }
};