var debug = process.env.NODE_ENV === "production";
var path = require('path');
var webpack = require('webpack');
// var BundleTracker = require('webpack-bundle-tracker'); // only for django

module.exports = {
    devServer: {
        historyApiFallback: true,
        contentBase: "./client",
        inline: true,
        port: 5050
    },
    devtool: 'eval',
    entry: {
        bundle: './client/src/index.js',
        vendor: ['react']
    },
    output: {
        path: path.resolve(__dirname, "./client/build/js"),
        publicPath: '/build/js',
        filename: '[name].min.js'
    },
    resolve: {
      modulesDirectories: ["node_modules", "bower_components"],
      extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel'],
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader?includePaths[]=' +
                path.resolve(__dirname, "./node_modules/compass-mixins/lib") +
                "&includePaths[]=" + path.resolve(__dirname, "./mixins/app_mixins")
            },
            {
              test: /\.(png|jpg)$/,
              loader: "url-loader?limit=300000"
            },
            {
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    plugins: debug ? [] : [
        // new BundleTracker({filename: '../webpack-stats.json'}),        // python django only!
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
        compress: {warnings: false},
        // sourceMap: false,
        mangle: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity
        }),
        new webpack.optimize.DedupePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};
