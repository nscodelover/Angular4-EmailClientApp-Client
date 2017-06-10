const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const ENV_TYPE = {
  dev: 'development',
  prod: 'production'
};

const NODE_ENV = process.env.NODE_ENV || ENV_TYPE.dev;

console.info(NODE_ENV + ' environment');

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    polyfills: './polyfills.ts',
    index: './index.ts',
    vendor: './vendor.ts'
  },
  output: {
    path: 'distr',
    filename: '[name]-[hash].js',
    library: '[name]'
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html?-minimize'
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(['css', 'less'])
      },
      {
        test: /\.(jpg|svg|png)$/i,
        loader: 'url-loader?limit=1&name=assets/img/[name]-[hash].[ext]'
      },
      {
        test: /\.scss$/,
        loaders: [
          'css-loader?sourceMap',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf)(\?.*$|$)/,
        loader: 'url-loader?limit=1000&name=assets/fonts/[name]-[hash].[ext]'
      },
      {
        test: /\.(svg\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=1000&name=assets/fonts/[name]-[hash].[ext]"
      }
    ]

  },

  devtool: NODE_ENV === ENV_TYPE.dev ? 'eval' : null,

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.ts', '.js'],
    root: path.resolve('./'),
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*'],
    extensions: ['', '.js']
  },

  plugins: [
    new CleanWebpackPlugin(['distr/*'], {
      verbose: true,
      dry: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: 'assets/favicon.png'
    }),
    new ExtractTextPlugin('[name]-[hash].css')
  ]
};

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {unused: true, dead_code: true}
    })
  );
}