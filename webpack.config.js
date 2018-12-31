const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    module: {
        rules: [
            {test:/\.vue$/, use: 'vue-loader'},
            {test:/\.scss$/, 
            use: [
                'style-loader',
               // MiniCSSExtractPlugin,
                'css-loader',
                'sass-loader'
            ]},
            {
             test: /\.(png|svg|jpg|gif)$/,
             use: [
               {
                 loader: 'file-loader'
               }
             ]
           }
        ]
    },
    
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin()
    ]
}