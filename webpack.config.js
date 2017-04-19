var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src') + '/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                loader: 'style-loader!sass-loader'
            }
        ]
    }
}