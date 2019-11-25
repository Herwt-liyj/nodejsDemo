var path = require('path');

var config = {
    devServer: {
        contentBase: path.join(__dirname, "build")
    },

    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, './react/app/entry.js'),
    ],
    output: {
        path: path.resolve(__dirname, './build/'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    // module: {
    //     rules: [{
    //         test: /\.js|jsx$/,
    //         use: {
    //             loader: 'babel-loader'
    //         }
    //     }]
    // }
}

module.exports = config;