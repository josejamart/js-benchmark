///////////////////////////////////////////////////////////////////////////////////////////////////
//  WebPack PROD Config
///////////////////////////////////////////////////////////////////////////////////////////////////

const { resolve } = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    // To enhance the debugging process. More info: https://webpack.js.org/configuration/devtool/
    devtool: 'source-map',
    target: 'web',
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
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')      // Reduces 78 kb on React library
            },
            'DEBUG': false,                                 // Doesn´t have effect on my example
            '__DEVTOOLS__': false                           // Doesn´t have effect on my example
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
                drop_console: true,
                drop_debugger: true
            },
            minimize: true,
            debug: false,
            sourceMap: true,
            output: {
                comments: false
            },

        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new CopyWebpackPlugin([
            { from: 'src/benchmarkFramework/index.html', to: 'index.html' },
            { from: 'src/data/*.json', to: 'data/[name].[ext]' },
            // {output}/file.txt
            { from: 'src/backbone/T1-bigPainting/index.html', to: 'backbone/T1-bigPainting/index.html' },
            { from: 'src/backbone/T1-bigPainting-underscore-template/index.html', to: 'backbone/T1-bigPainting-underscore-template/index.html' },
            { from: 'src/backbone/T1-bigPainting-handlebars/index.html', to: 'backbone/T1-bigPainting-handlebars/index.html' },
            { from: 'src/backbone/T2-settingEvents/index.html', to: 'backbone/T2-settingEvents/index.html' },
            { from: 'src/backbone/T3-settingEvents-rerender/index.html', to: 'backbone/T3-settingEvents-rerender/index.html' }
        ])
    ],
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
