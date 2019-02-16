const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack .NET meetup",
        }),
    ],
    devServer: {
        stats: 'errors-only',
        host: process.env.HOST, // Defaults to localhost
        port: process.env.PORT, // Defaults to 8080
        open: true, // Open the page in browser
        //writeToDisk: true, // If we e.g. wanna see our output in dist/ folder, uncomment if you wanna try it
    },
};