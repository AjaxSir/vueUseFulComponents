module.exports = {
	devtool: 'source-map', 
	// cheap-module-source-map 
	//eval-source-map 
	//cheap-module-eval-source-map 打包速度越来越快 也更不容易调试
	entry: __dirname + '/app/main.js', // 入口地址
	output: {
		path: __dirname + '/public', // 输出位置
		filename: 'build.js'
	},
	devServer: {
		contentBase: './public', // 本地服务器所加载的页面所在的目录
		historyApiFallback: true,//不跳转
		inline: true//实时刷新
	}
}