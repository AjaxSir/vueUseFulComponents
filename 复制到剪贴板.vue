copy () {
      document.addEventListener('copy', e => {
        e.clipboardData.setData('text/plain', this.addr)
        e.preventDefault() // 阻止默认行为
      })
      document.execCommand('copy') // 使文档处于可编辑状态，否则无效
      this.$toast('已复制到剪贴板')
    }