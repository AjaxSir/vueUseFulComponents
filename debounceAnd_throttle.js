// 防抖
export function debounce(fn, time) {
  let timeout = null // 创建一个标记用来存放定时器的返回值
  return function() {
    clearTimeout(timeout) // 每当用户输入的时候把前一个 setTimeout clear 掉
    timeout = setTimeout(() => { // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
      fn.apply(this, arguments)
    }, time)
  }
}
// 节流
export function _throttle(fn, interval = 200) {
  var last
  var timer
  return function() {
    var th = this
    var args = arguments
    var now = +new Date()
    if (last && now - last < interval) {
      clearTimeout(timer)
      timer = setTimeout(function() {
        last = now
        fn.apply(th, args)
      }, interval)
    } else {
      last = now
      fn.apply(th, args)
    }
  }
}


metgods: {
  getlocLat: debounce(function() {
      this.$axios({
        url: `/v2/`,
        params: {
          address: this.deviceform.address,
          ak: 'vCZU88Guz4BmAODWTm8k9BP0WlwId1V0',
          output: 'json'
        },
        method: 'get'
      }).then(res => {
        if (!res.data.status) {
          this.deviceform.longitude = res.data.result.location.lng
          this.deviceform.latitude = res.data.result.location.lat
        } else {
          this.$message({
            message: '没有找到对应的位置信息',
            type: 'error'
          })
          this.deviceform.longitude = ''
          this.deviceform.latitude = ''
        }
      })
    }, 500),
}