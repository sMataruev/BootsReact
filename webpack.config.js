"use strict";
const path               = require('path');
const webpack            = require('webpack');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const merge              = require('webpack-merge');

const images             =require('./webpack/images');
const pug                = require('./webpack/pug');
const devServer          = require('./webpack/devserver');
const sass               = require('./webpack/scss');
const css                = require('./webpack/css');
const extracktCSS        = require('./webpack/css.extrackt');
// const uglifyJS           = require('./webpack/js.uglify');
const babel              = require('./webpack/js.babel');


const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

const common = merge([{
    entry: {
        'index': PATHS.source + '/index.js'
    },
    output: {
        path: PATHS.build,
        filename: 'js/[name].js'
    },
    watchOptions:{
        aggregateTimeout: 100
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index','common'],
            template: PATHS.source + '/react.pug'
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
},
    pug(),
    images()

]);


module.exports = function (env) {

    if (env === 'production') {
        return merge([
            common,
            extracktCSS(),
            // uglifyJS(),
            babel(),

        ]);
    }
    if (env === 'development') {
        return merge([
            common,
            devServer(),
            sass(),
            css(),
            babel(),

        ]);
    }
};