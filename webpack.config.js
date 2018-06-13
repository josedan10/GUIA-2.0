const path = require('path');
// const webpack = require('webpack');

const config = {

	// entry: './src/js/index.jsx',
	entry: {
		config: './src/js/config.js',
		index: './src/js/index.jsx'		
	},

	output: {
	    path: path.resolve(__dirname, 'dist'),
		// publicPath: '/dist/',
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
		              	presets: ['react', 'env', 'es2015']
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
};

module.exports = config;