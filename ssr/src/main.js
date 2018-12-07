import Vue from 'vue'
import createRoute from './route.js'
import App from './App.vue'

// 导出一个工厂函数
export function createApp() {
	const router = createRoute()
	const app = new Vue({
		router,
		render: h => h(App)
	})
	return app
}