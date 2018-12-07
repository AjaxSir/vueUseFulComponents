import { createApp } from '../src/main.js'

const app = createApp()
// 因为现在返回过来的只是一个页面的对应信息，
// 并且如果切换至另一个路由就会重新向服务端发起请求，
// 获取页面，还处于web1.0时代。这是因为我们的单页面应用没有加载导致的，
// 下面我们就来配置单页面应用，并将它引入到返回的html页面当中 配置前端的单页面
// 绑定根元素
window.onload = () => {
	app.$mount('#app')
}