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
        'backbone.t1': './src/backbone/T1-bigPainting/index.ts',
        'backbone.t1b': './src/backbone/T1-bigPainting-underscore-template/index.ts',
        'backbone.t1c': './src/backbone/T1-bigPainting-handlebars/index.ts',
        'backbone.t2': './src/backbone/T2-settingEvents/index.ts',
        'backbone.t3': './src/backbone/T3-settingEvents-rerender/index.ts',
        'backbone.t4': './src/backbone/T4-Asynch-update/index.ts',
        'backbone.t5': './src/backbone/T5-Asynch-update-random/index.ts',
        'backbone.t5b': './src/backbone/T5-Asynch-update-random-underscore-template/index.ts',
        'backbone.t6a': './src/backbone/T6-manualRendering-with-external-properties/index.ts',
        'backbone.t6b': './src/backbone/T6-manualRendering-with-external-properties-b/index.ts',
        'backbone_react.t1': './src/backbone_react/T1-bigPainting/index.tsx',
        'backbone_react.t1b': './src/backbone_react/T1-bigPainting-one-component/index.tsx',
        'backbone_react.t2': './src/backbone_react/T2-settingEvents/index.tsx',
        'backbone_react.t3': './src/backbone_react/T3-settingEvents-rerender/index.tsx',
        'backbone_react.t4': './src/backbone_react/T4-Asynch-update/index.tsx',
        'backbone_react.t4b': './src/backbone_react/T4-Asynch-update-react-mode/index.tsx',
        'backbone_react.t5a': './src/backbone_react/T5-Asynch-update-random/index.tsx',
        'backbone_react.t5b': './src/backbone_react/T5-Asynch-update-random-react-mode/index.tsx',
        'backbone_react.t6a': './src/backbone_react/T6-manualRendering-with-external-properties/index.tsx'
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
            { context: './src', from: 'backbone/**/index.html',  to:'[path][name].[ext]' },
            { context: './src', from: 'backbone_react/**/index.html',  to:'[path][name].[ext]' }
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
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};
