const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src') + '/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    plugins: [new HtmlWebpackPlugin()],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
              test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
              loader: 'file-loader'
            },
            {
              test: /\.html$/,
              loader: 'raw-loader'
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                loader: 'style-loader!sass-loader'
            }
        ]
    }
}
