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
      'backbone.t1': './src/backbone/T1-bigPainting/index.ts',
      'backbone.t1b': './src/backbone/T1-bigPainting-underscore-template/index.ts',
      'backbone.t1c': './src/backbone/T1-bigPainting-handlebars/index.ts',
      'backbone.t2': './src/backbone/T2-settingEvents/index.ts',
      'backbone.t3': './src/backbone/T3-settingEvents-rerender/index.ts',
      'backbone.t4': './src/backbone/T4-Asynch-update/index.ts',
      'backbone.t5': './src/backbone/T5-Asynch-update-random/index.ts',
      'backbone.t5b': './src/backbone/T5-Asynch-update-random-underscore-template/index.ts',
      'backbone_react.t1': './src/backbone_react/T1-bigPainting/index.tsx',
      'backbone_react.t1b': './src/backbone_react/T1-bigPainting-one-component/index.tsx',
      'backbone_react.t2': './src/backbone_react/T2-settingEvents/index.tsx',
      'backbone_react.t3': './src/backbone_react/T3-settingEvents-rerender/index.tsx',
      'backbone_react.t4': './src/backbone_react/T4-Asynch-update/index.tsx',
      'backbone_react.t4b': './src/backbone_react/T4-Asynch-update-react-mode/index.tsx',
      'backbone_react.t5a': './src/backbone_react/T5-Asynch-update-random/index.tsx',
      'backbone_react.t5b': './src/backbone_react/T5-Asynch-update-random-react-mode/index.tsx'
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
          { context: './src', from: 'backbone/**/index.html',  to:'[path][name].[ext]' },
          { context: './src', from: 'backbone_react/**/index.html',  to:'[path][name].[ext]' }
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
