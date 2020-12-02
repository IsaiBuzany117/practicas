const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      index : './src/resources/index.js',
      crearPregunta: './src/resources/crearPregunta.js',
      leerPregunta: './src/resources/leerPregunta.js',
      modificarPregunta: './src/resources/modificarPregunta.js',
      eliminarPregunta: './src/resources/eliminarPregunta.js'
    } , 
  //entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        port: 7070,
        historyApiFallback: true
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/resources/index.html',
        filename: 'index.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/resources/crearPregunta.html',
        filename: 'crearPregunta.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/resources/leerPregunta.html',
        filename: 'leerPregunta.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/resources/modificarPregunta.html',
        filename: 'modificarPregunta.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/resources/eliminarPregunta.html',
        filename: 'eliminarPregunta.html'
      }),
    ]
}