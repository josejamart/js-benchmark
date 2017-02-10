///////////////////////////////////////////////////////////////////////////////////////////////////
//  WebPack Development Config
///////////////////////////////////////////////////////////////////////////////////////////////////
//
//  author: Jose Quinto - https://blogs.josequinto.com
//
//  More webpack examples: https://github.com/jquintozamora/react-es6-webpack-minimal-starter-template/tree/master/webpack
//
///////////////////////////////////////////////////////////////////////////////////////////////////

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    // To enhance the debugging process. More info: https://webpack.js.org/configuration/devtool/
    devtool: 'source-map',
    // Using webpack multiple entry point
    entry: {
        'js-benchmark': './src/index.ts',
        'backbone_react': './src/backbone_react/app/src/index.tsx',
        'backbone.t1':'./src/backbone/T1-bigPainting/index.ts'
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
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
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new ExtractTextPlugin('./styles/bundle.css'),
        new CopyWebpackPlugin([
           { from: 'src/app/index.html', to:'index.html' },
           { from: 'src/data/*.json', to: 'data/[name].[ext]'},
           // {output}/file.txt
           { from: 'src/backbone/T1-bigPainting/index.html', to:'backbone/T1-bigPainting/index.html' },
         ])
    ],
    module: {
        loaders: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2016&presets[]=es2015&presets[]=react!ts-loader'
            },
            {
                test: /\.scss$/i,
                loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
            }
        ]
    },
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 3000,
      host: "0.0.0.0"
    },
    watch: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/
    }
};
