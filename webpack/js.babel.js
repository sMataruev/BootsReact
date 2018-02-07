module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.js|jsx$/,
                    loader:  'babel-loader',
                    exclude: /node_modules/,
                    options: {
                        presets: ["es2015", 'react', 'stage-0' ]
                    },
                },
            ]

        }
    }
};
//,'react-hmre'