const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src') + '/app/app.module.js',
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body'
      }),
      new DotenvPlugin({
        sample: './.env.default',
        path: './.env'
      })
    ],
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
              test: /\.(png|jpg|jpeg|gif|svg|eot|woff2|woff|ttf)$/,
              loader: 'file-loader'
            },
            {
              test: /\.html$/,
              loader: 'raw-loader'
            },
            {
              test: /\.scss$/,
              exclude: /(node_modules)/,
              loader: 'style-loader!css-loader!sass-loader!'
            },
            {
              test: /\.css$/,
              loader: 'style-loader!css-loader'
            }
        ]
    }
}
