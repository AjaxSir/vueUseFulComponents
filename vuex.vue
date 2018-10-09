取vuex的state
1. 新建getters.js 文件在 store文件夹index.js引入 
（const store = new Vuex.Store({
  modules: {
    app,
    user
  },
  getters
})）
写法 
const getters = {
  sidebar: state => state.app.sidebar,
  name: state => state.user.name,
  role: state => state.user.role
}

export default getters

引用时
import store from './store'
调用时
store.getters.role

2 就在某个模块内写入
 getters: {
    userid (state) {
      return state.id
    }
}
引用时
import {mapGetters} from 'vuex'
调用时
在 computed 内
...mapGetters(['sign'])


调用vuex内的 actions
1.this.$store.dispatch()
2.
import {mapActions} from 'vuex'
在methods 内
...mapActions(['login'])
调用时就直接 this.login