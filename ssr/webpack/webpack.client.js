const path = require('path')
const projectRoot = path.resolve(__dirname, '..'); // 获取绝对路径

module.exports = {
	entry: ['babel-polyfill', path.join(projectRoot, 'entry/entry-client.js')],
	output: {
		path: path.join(projectRoot, 'dist'),
		filename: 'bundle.client.js'
	},
	// devtool: 'source-map',
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader'
		},
		{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: '/node_modules/',
			options: {
				presets: ['es2015']
			},
			include: projectRoot
		}]
	},
	plugins: [],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.runtime.esm.js'
		}
	}
}