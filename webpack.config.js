const path = require('path');//se sabe donde esta ubicado el proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {//objeto de configuracion
	entry: './src/index.js', //punto de entrada de la app
	output: {//donde vive el proyecto
		path: path.resolve(__dirname, 'dist'),//crea carpeta donde vive el proyecto
		filename: 'bundle.js',//nombre al empaquetado
	},
    mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {//reglas
		rules: [
			{
				test: /\.(js|jsx)$/,//entiende todo lo js y jsx
				exclude: /node_modules/,//excluye lo que no se quiere leer
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
	]
}