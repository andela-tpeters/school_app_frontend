// module.exports = require('./webpack.dev.js');
var path = require('path');
var ETP = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
	entry: {
		app: './app.js'
	},
	output: {
		path: path.resolve('build'),
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loaders: ['awesome-typescript-loader', 'angular2-template-loader']
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				exclude: /node_modules/,
				loader: 'file?name=assets/[name].[hash].[ext]'
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				loader: 'html-loader'
			},
			{
		      test: /\.css$/,
		      exclude: helpers.root('src', 'app'),
		      loader: ETP.extract('style', 'css?sourceMap')
		    },
		    {
		      test: /\.css$/,
		      include: helpers.root('src', 'app'),
		      loader: 'raw'
		    }
		]
	},
	resolve: { extensions: ['','.js','.ts'] },
	plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new ETP('[name].css'),
    new webpack.ProvidePlugin({'$': 'jquery', 'jQuery': 'jquery'})
  ]
}