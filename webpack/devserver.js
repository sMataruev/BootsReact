module.exports = function () {
    return {
        devServer: {
            stats: 'errors-only',
            port: 11000,
            inline: true,
            // hot: true,
           // historyApiFallback: true,
        }
    }
};

