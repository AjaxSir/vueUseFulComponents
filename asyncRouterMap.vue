1 首先在路由里面定义一个几个不同权限能够进入的路由 以及普通用户能够进入的路由 
这是admin能够访问的路由
export const adminRouterMap = [
  {
    path: '/role',
    component: Layout,
    redirect: '/role/groupManage',
    alwaysShow: true,
    meta: {
      title: '权限管理',
      icon: 'role'
    },
    children: [{
      path: 'groupManage',
      component: roleManage,
      name: 'groupManage',
      meta: {
        title: '用户组管理',
        icon: 'userGroup'
      }
    }]
  }
]
2 在main.js里面
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>',
  beforeCreate() { // 前提是你之前就已经存入了role
    if (Cookie.get('role')) {
      switch (Cookie.get('role')) {
        case 'true' :
          this.$router.options.routes = this.$router.options.routes.concat(adminRouterMap)
          this.$router.options.routes = this.$router.options.routes.concat(aboutRouterMap) // this.$router.options.routes 不是响应式的。 所以需要下一步添加
          this.$router.addRoutes(adminRouterMap)
          this.$router.addRoutes(aboutRouterMap)
          break
        default :
          this.$router.options.routes = this.$router.options.routes.concat(aboutRouterMap)
          this.$router.addRoutes(aboutRouterMap)
          break
      }
    }
  }
})
