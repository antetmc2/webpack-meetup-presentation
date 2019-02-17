const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

exports.minimizeCss = {
    optimization: {
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin({}),
        ]
    }
};