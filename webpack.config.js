const path = require('path');
// const webpack = require('webpack');

const config = {

	// entry: './resources/assets/js/index.jsx',
	entry: {
		// config: './resources/assets/js/config.js',
		index: ['./resources/assets/js/index.jsx', './resources/assets/sass/app.scss']	
	},

	output: {
	    path: path.resolve(__dirname, 'public/js/'),
		publicPath: '/public/js/',
	    filename: '[name].min.js' // Archivo de salida
	},

	resolve: {
	    extensions: ['.js', '.jsx', '.scss']
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
			},
			{
				test: /\.scss$/,
				use: [{
					loader: 'style-loader', // inject CSS to page
				  }, {
					loader: 'css-loader', // translates CSS into CommonJS modules
				  }, {
					loader: 'postcss-loader', // Run post css actions
					options: {
					  plugins: function () { // post css plugins, can be exported to postcss.config.js
						return [
						  require('precss'),
						  require('autoprefixer')
						];
					  }
					}
				  }, {
					loader: 'sass-loader' // compiles Sass to CSS
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