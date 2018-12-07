import { createApp } from '../src/main.js'
// 通过传入的url获取组件信息
export default context => {
	return new Promise((resolve, reject) => {
		const app = createApp()
		// 更改路由
		app.$router.push(context.url)
		// 获取路由下的组件信息
		const components = app.$router.getMatchedComponents()

		if (!components.length) return reject({code: 404})
			resolve(app)
	})
}