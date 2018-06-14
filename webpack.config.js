const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const webpack = require('webpack');

module.exports = (env) => {
	return {
		// entry: './resources/assets/js/index.jsx',
		entry: {
			// config: './resources/assets/js/config.js',
			// styles: './resources/assets/sass/app.scss',
			index: './resources/assets/js/index.jsx'
		},

		output: {
			path: path.resolve(__dirname, 'public/js/'),
			publicPath: '/public/js/',
			filename: '[name].min.js' // Archivo de salida
		},

		resolve: {
			extensions: ['.js', '.jsx']
		},

		module: {
			rules: [
				{
					test: /\.jsx$/,
					exclude: /(node_modules|bower_components)/,
					use: [{
						loader: 'babel-loader',
						options: {
							presets: ['react', 'env', 'es2015', 'stage-0']
						}
					}]
				}
			]
		},

		devServer: {
			contentBase: path.join(__dirname, './'),
			historyApiFallback: true,	
			port: 8080
		},

		devtool: 'inline-source-map',
	}
	
};