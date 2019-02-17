exports.devServer = ({host, port} = {}) => ({
    devServer: {
        stats: 'errors-only',
        host, // Defaults to localhost
        port, // Defaults to 8080
        open: true, // Open the page in browser
        //writeToDisk: true, // If we e.g. wanna see our output in dist/ folder, uncomment if you wanna try it
    }
});