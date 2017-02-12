///////////////////////////////////////////////////////////////////////////////////////////////////
//  WebPack Development Config
///////////////////////////////////////////////////////////////////////////////////////////////////

const { resolve } = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    // To enhance the debugging process. More info: https://webpack.js.org/configuration/devtool/
    devtool: 'inline-source-map',
    target: 'web',
    devServer: {
        // All options here: https://webpack.js.org/configuration/dev-server/
        hot: false,
        contentBase: resolve(__dirname, '../dist'),
        publicPath: '/',
        port: 3000,
        host:"0.0.0.0",
        historyApiFallback: true,
        // All the stats options here: https://webpack.js.org/configuration/stats/
        stats: {
            colors: true, // color is life
            chunks: false, // this reduces the amount of stuff I see in my terminal; configure to your needs
            'errors-only': true
        }
    },
    context: resolve(__dirname, '../'),
    // Using webpack multiple entry point
    entry: {
        'js-benchmark': './src/index.ts',
        'backbone_react': './src/backbone_react/app/src/index.tsx',
        'backbone.t1': './src/backbone/T1-bigPainting/index.ts',
        'backbone.t1b': './src/backbone/T1-bigPainting-underscore-template/index.ts',
        'backbone.t1c': './src/backbone/T1-bigPainting-handlebars/index.ts',
        'backbone.t2': './src/backbone/T2-settingEvents/index.ts',
        'backbone.t3': './src/backbone/T3-settingEvents-rerender/index.ts'
    },
    output: {
        path: resolve(__dirname, './../dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            'handlebars': 'handlebars/dist/handlebars.js'
        }
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/benchmarkFramework/index.html', to: 'index.html' },
            { from: 'src/data/*.json', to: 'data/[name].[ext]' },
            { from: 'src/backbone/T1-bigPainting/index.html', to: 'backbone/T1-bigPainting/index.html' },
            { from: 'src/backbone/T1-bigPainting-underscore-template/index.html', to: 'backbone/T1-bigPainting-underscore-template/index.html' },
            { from: 'src/backbone/T1-bigPainting-handlebars/index.html', to: 'backbone/T1-bigPainting-handlebars/index.html' },
            { from: 'src/backbone/T2-settingEvents/index.html', to: 'backbone/T2-settingEvents/index.html' },
            { from: 'src/backbone/T3-settingEvents-rerender/index.html', to: 'backbone/T3-settingEvents-rerender/index.html' }
        ])
    ],
    watchOptions: {
      poll: true
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: 'awesome-typescript-loader'
            }
        ]
    }
};