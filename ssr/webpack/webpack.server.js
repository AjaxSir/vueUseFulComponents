const path = require('path')
const projectRoot = path.resolve(__dirname, '..');
module.exports = {
	// devtool: "source-map",
	target: 'node',
	entry: ['babel-polyfill', path.join(projectRoot, 'entry/entry-server.js')],
	output: {
		libraryTarget: 'commonjs2', // libraryTarget的配置，我们使用umd方式，这样便可以用任何一种引入方式，即支持cmd，amd，及全局
		path: path.join(projectRoot, 'dist'), // join 就是连接每个参数 
		// resolve console.log(path.resolve(__dirname,'/img/so')); //D:\img\so<br>
		//  console.log(path.resolve(__dirname,'./img/so')); //D:\myProgram\test\img\so
		filename: 'bundle.server.js' // filename:"js/[name].bundle.js"
	},
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader'
		},
		{
			test: /\.js$/,
			loader: 'babel-loader',
			include: projectRoot,
			exclude: /(node_modules|bower_components)/,
			options: {
				presets: ['es2015']
			}
		},
		{
			test:/\.less$/,
			loader: 'style-loader!css-loader!less-loader'
		}
		]
	},
	plugins:[],
	resolve:{
		alias: {
			'vue$': 'vue/dist/vue.runtime.esm.js'
		}
	}
}
// {
// 	"presets": [ // 预设
// 		"babel-preset-env" // 官方统一推荐使用env，全部替代了这些单一的插件功能，可以简化配置如下，也就是babel-preset-env：
// 	],
// 	"plugins": [ // 插件
// 		"transform-runtime" // 解决这种全局对象或者全局对象方法编译不足的情况 只会对es6的语法进行转换，而不会对新api进行转换
// 	]
// }
// babelrc  //"ignore": ["./module/a.js"]主要作用就是可以指定不编译那些代码
	// minified 主要设置编译后是否是压缩，boolean类型
	// babel-polyfill 的原理是当运行环境中并没有实现的一些方法，babel-polyfill会做兼容。
// babel-runtime它是将es6编译成es5去执行。我们使用es6的语法来编写，最终会通过babel-runtime编译成es5.也就是说，不管浏览器是否支持ES6，只要是ES6的语法，它都会进行转码成ES5.所以就//有很多冗余的代码。

// babel-polyfill 它是通过向全局对象和内置对象的prototype上添加方法来实现的。比如运行环境中不支持Array.prototype.find 方法，引入polyfill, //我们就可以使用es6方法来编写了，但是缺点就是会造成全局空间污染。

// babel-runtime: 它不会污染全局对象和内置对象的原型，比如说我们需要Promise，我们只需要import Promise from 'babel-runtime/core-js/ //promise'即可，这样不仅避免污染全局对象，而且可以减少不必要的代码。