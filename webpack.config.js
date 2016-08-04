'use strict';

var path = require('path');
var webpack = require('webpack');

var isProduction = process.env.NODE_ENV === 'production';
var publicPath = path.resolve(__dirname, 'build');
var outputPath = isProduction ?
	path.resolve(__dirname, 'dist') : publicPath;
var entry = isProduction ?
	[
		'./src/index.js'
	] : [
		'webpack-dev-server/client',
		'webpack/hot/dev-server',
		'./src/index.js'
	];
var plugins = isProduction ? [] : [
		new webpack.HotModuleReplacementPlugin()
	]

module.exports = {
	entry: entry,
	output: {
		path: outputPath,
		publicPath: publicPath,
		filename: 'panner.js',
		library: 'Panner',
		libraryTarget: 'var'
	},
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loaders: ['eslint']
			}
		],
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: [
						'es2015',
						'react'
					]
				}
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.json']
	},
	plugins: plugins
};