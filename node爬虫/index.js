// http 模块创建服务端
// var http = require('http');
// http.createServer((req, res) => {
// 	res.writeHead(200, {'Content-Type': 'text/html'});
// 	res.write('hello');
// 	res.end();
// }).listen(3000);

// express 模块创建
var urls = [] // 存放需要爬的网址
var express = require('express');
var superagent = require('superagent'); // 主要拉取网页内容
var cheerio = require('cheerio'); // 行类似 Jquery 的 css 选择器操作
var eventproxy = require('eventproxy') // 异步请求并发 
var eq = new eventproxy(); // 一般小于10个源
var async = require('async') // 很多个源（100） 并且保持 10 个并发去请求
var app = express();
var url = require('url')

/******实现控制并发请求次数********/
// var cnodeUrl = 'https://cnodejs.org/'
// superagent
// 	.get(cnodeUrl)
// 	.end((err, data) => {
// 		if (err) {
// 			console.log('抓取失败')
// 		}
// 		var $ = cheerio.load(data.text)
// 		$('#topic_list .topic_title').each(function (idx, el) {
//         if (idx < 10) {
//             var $el = $(el);
//             var href = url.resolve(cnodeUrl, $el.attr('href')); // resolve 合并两个参数
//             urls.push(href);  
//         }
//     })
// 		var asynCount = 0
// async.mapLimit(urls, 4, (url, call)=>{
// 	console.time('耗时:');
// 	asynCount++;
// 	superagent
// 	.get(url)
// 	.end((err, data) => {
// 		console.log('并发数：' + asynCount-- + '抓取' + url )
// 		call(null, [url, data.text]) // 所有的data.text组合的数组是result
// 	})
// },(err, result)=>{
// 	result = result.map(item => {
// 		var $ = cheerio.load(item[1])
// 		return ({
// 			title: $('.topic_full_title').text().trim(),
//                 href: item[0],
//                 comment1: $('.reply_content').eq(0).text().trim(),
//                 author1: $('.reply_author').eq(0).text().trim() || "评论不存在"
// 		})
// 	})
// 	console.log(result)
// })
// })

// for (var i = 1000; i< 2000; i++) {
	
// }

// })
// urls.forEach((item) => {
// 	superagent.get(item)
// 	.end((err, data) => {
// 		if (err) {
// 			console.log('异步请求失败')
// 		}
// 		console.log('抓取' + item + '成功')
// 		eq.emit('topic_html', data.text)
// 	})
// })

app.get('/', (req, res) => {
		
// 	eq.after('topic_html', urls.length, (topic) => {
// 		topic = topic.map((item) => {
// 			var $ = cheerio.load(item)
// 			return $('.focus_pic li img').attr('src')
// 		})
// 	var str = ''
// 	topic.forEach(item => {
// 		str += `<img src=${item}>`
// 	})
// 	res.send(str)
// })
res.send('天气')

})
// })








app.listen('3000', () => {
	console.log('服务器已启用!')
})
// var ep = new EventProxy();
// ep.after('got_file', files.length, function (list) {
//   // 在所有文件的异步执行结束后将被执行
//   // 所有文件的内容都存在list数组中
// });
// for (var i = 0; i < files.length; i++) {
//   fs.readFile(files[i], 'utf-8', function (err, content) {
//     // 触发结果事件
//     ep.emit('got_file', content);
//   });
// }