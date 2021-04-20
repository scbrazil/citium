const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const zlib = require('zlib');

module.exports = {
  entry: ['@babel/polyfill', path.join(__dirname, './src/index.js')],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
    // path: path.resolve(__dirname, '/dist'),
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|jsx)$/,
      //   // include: './src',
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-react', '@babel/preset-env'],
      //       plugins: [['@babel/plugin-proposal-class-properties']],
      //     },
      //   }
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: [['@babel/plugin-proposal-class-properties']],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.(jpe?g|png|webp|gif)$/,
        use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
      },
      {
        test: /.(eot|svg|ttf|woff|woff2)$/,
        use: [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './src/index.html'
    // })
    // new CompressionPlugin({
    //   filename: '[path][base].br',
    //   algorithm: 'brotliCompress',
    //   test: /\.(js|css|html|svg)$/,
    //   compressionOptions: {
    //     params: {
    //       [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
    //     },
    //   },
    //   threshold: 10240,
    //   minRatio: 0.8,
    //   deleteOriginalAssets: false,
    // }),
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Citium',
      template: './src/index.html',
    }),
  ],
  mode: 'development',
};