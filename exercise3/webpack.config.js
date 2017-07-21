module.exports = {
//Id the entry file
entry:'./main.js',
	output:{
		path: __dirname,
		filename: 'index.js'
	},

	resolve:{
		extensions:['.js','.jsx']
	},

	devServer:{
		inline:true,
		port: 8080
	},

	module:{
		loaders:[
			{
				//All files that end with '.js' and '.jsx'
				test: /\.jsx?$/,
				
				//do not include node_modules
				exclude:/node_modules/,
				
				//use babel as loader
				loader: 'babel-loader',
				
				//pass queries and arguments
				query:{
					presets:['es2015','react']
				}
			}
		]
	}
}