var path = require('path');

var config = {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, "build"),
        hot: true,
        compress: true,
        host: '0.0.0.0',
        port: '8080',
        open: false,
        overlay: false,
    },

    entry: [
        path.resolve(__dirname, './react/app/entry.js'),
    ],
    output: {
        path: path.resolve(__dirname, './build/'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.js|jsx$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }

            }
        }]
    }
}

module.exports = config;