const HtmlWebpackPlugin = require('html-webpack-plugin');
const injectConfig = new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body'
});
const path = require('path');

module.exports = {
    context: __dirname + '/app',

    entry: './index.js',

    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }]
            },
        ],
    },

    plugins: [injectConfig],

    resolve: {
        extensions: [" ", ".js", ".jsx", ".css", ".json"]
    },

    devServer: {
        historyApiFallback: true,
        inline: false,
    }
}
