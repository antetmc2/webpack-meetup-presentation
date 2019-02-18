const merge = require('webpack-merge');

const commonParts = require('./config/webpack/common.js');
const devParts = require('./config/webpack/dev.js');
const prodParts = require('./config/webpack/prod.js');

const common = merge(commonParts.loaders, commonParts.html, commonParts.splitChunks, commonParts.entry);

const prod = merge(common, prodParts.minimizeCss);

const dev = merge(common, devParts.devServer({
    host: process.env.HOST, // Defaults to localhost
    port: process.env.PORT, // Defaults to 8080
}));

module.exports = mode => {
    console.log(`Environment is: ${mode}.`);

    if (mode === 'development')
        return merge(dev, { mode });

    return merge(prod, { mode });
}