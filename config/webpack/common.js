const rootPath = require('app-root-path').path;
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

exports.entry = {
    entry: {
        main: path.join(rootPath, 'src', 'index.js'),
        anotherFile: path.join(rootPath, 'src', 'anotherFile.js'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(rootPath, 'public')
    },
};

exports.loaders = {
    module: {
        rules: [
            {
                test: /.(js|jsx)?$/,
                exclude: [path.join(rootPath, 'node_modules'),
                          path.join(rootPath, 'src', 'styles')],
                use: [{ // 'babel-loader' enough if we are not using any options
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }]
            },
            {
                test: /\.css$/,
                include: [path.join(rootPath, 'src', 'styles')],
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)(\?.*$|$)$/i,
                include: [path.join(rootPath, 'src', 'assets')],
                use: [{
                  loader: 'url-loader',
                  options: {
                    limit: 10000,
                    publicPath: '../',
                    name: '[name].[ext]', // If we wanna encode it, e.g. '[sha512:hash:hex:9999].[ext]'
                  }
                }]
              }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
};

exports.html = {
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack .NET meetup",
            chunks: ['main', 'vendors']
        })
    ]
}

exports.splitChunks = {
    optimization: {
        splitChunks: {
            chunks: 'initial',
            cacheGroups: {
                default: false,
                vendors: {
                    test: /node_modules/,
                    name: "vendors",
                },
            },
        },
    }
};