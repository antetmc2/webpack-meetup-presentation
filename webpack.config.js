const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /.(js|jsx)?$/,
                exclude: [path.join(__dirname, 'node_modules'),
                          path.join(__dirname, 'src', 'styles')],
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
                test: /.css$/,
                include: [path.join(__dirname, 'src', 'styles')],
                use: [MiniCssExtractPlugin.loader, 'css-loader']
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack .NET meetup",
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],
    optimization: {
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin({}),
        ]
    },
    devServer: {
        stats: 'errors-only',
        host: process.env.HOST, // Defaults to localhost
        port: process.env.PORT, // Defaults to 8080
        open: true, // Open the page in browser
        //writeToDisk: true, // If we e.g. wanna see our output in dist/ folder, uncomment if you wanna try it
    },
};