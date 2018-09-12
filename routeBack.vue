First:
<script>
export default {
	//activated
    //keep-alive 组件激活时调用。
    //该钩子在服务器端渲染期间不被调用。
    //当页面存在缓存的时候执行该函数。
	//deactivated
    //keep-alive 组件停用时调用。
    //该钩子在服务器端渲染期间不被调用。
    //在页面结束时触发该方法，可清除掉滚动方法等缓存。
	// 在页面一开始加上一个全局的函数：
	activated: function () {
	  this.$setgoindex()
	}
}
</script>
这个函数是这样的，判断当前页面的历史记录是不是小于等于1，
如果小于等于1，说明这个页面没有可以返回的上一页，
如果没有可以返回的上一页，就给地址栏加上一个goindex=true的参数，
这样你从这个页面在往下一个页面跳转在返回，这个参数就一直加上的

Vue.prototype.$setgoindex = function () {
  if (window.history.length <= 1) {
    if (location.href.indexOf('?') === -1) {
      window.location.href = location.href + '?goindex=true'
    } else if (location.href.indexOf('?') !== -1 && location.href.indexOf('goindex') === -1) {
      window.location.href = location.href + '&goindex=true'
    }
  }
}
然后在左上角返回按钮加上这个逻辑：
if (this.$route.query.goindex === 'true') {
  this.$router.push('/')
} else {
  this.$router.back(-1)
}

Second: 
methods: {
        back(){
            if (window.history.length <= 1) {
                this.$router.push({path:'/'})
                return false
            } else {
                this.$router.go(-1)
            }
            //上面都没执行就说明卡在当前页不是最后一条， histroy记录数量大于1，又没有回退记录，只能返回首页，
         //如果上面都执行了 页面都跳走了，这个也就不用管了   
            setTimeout(() => {
                this.$router.push({path:'/'})      
            },500)
        }
    },