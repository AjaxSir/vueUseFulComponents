const exp = require('express')
const express = exp()
const render = require('vue-server-renderer').createRenderer()
const createApp = require('./dist/bundle.server.js')['default']

express.use('/', exp.static(__dirname + '/dist'))

const clientUrl = '/bundle.client.js'

// 响应路由请求
express.get('*', (req, res) => {
	const context = {
		url: req.url
	}
	// 创建vue实例，传入请求路由信息
	createApp(context).then(app => { // 根据url 返回相应的路由html
		render.renderToString(app, (err, html) => {
			if (err) {	
					return  res.state(500).end('运行时错误')
				}
				// script 标签放在head中先加载，并且设置window的onload事件，当body的内容加载完毕后再触发脚本，虽然有了白屏时间，但是时间短暂，用户体验相比之下会更好
			res.send(`
				<!DOCTYPE html>
	            <html lang="en">
	                <head>
	                    <meta charset="UTF-8">
	                    <title>Vue2.0 SSR渲染页面</title>
	                    <script src="${clientUrl}"></script>
	                </head>
	                <body>
	                     <div id="app">${html}</div>
	                </body>
	            </html>
				`)
			}, err => {
				if (err.code === '404')  res.status(404).end('不存在')
			})
		}).catch(err => {
			if(err.code === 404) { res.status(404).end('所请求的页面不存在') }
		})
	
})
express.listen('3030', () => {
	console.log('服务启动')
})
