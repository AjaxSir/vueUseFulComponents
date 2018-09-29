1 父组件调用子组员的方法
在父组件里通过$refs拿到子组件，然后调用$emit方法通知子组件

在子组件里通过$on方法监听上一步广播的事件名，然后在callback里发你的ajax就好了
子组件
created: function(){
    this.$on('click-child', function(){
      console.log('send ajax here');
    });
  },
  父组件
  clickParent: function(){
       this.$refs.child.$emit('click-child');
    }
	组件写法 <child v-ref:child></child>

不用去注册事件，有ref，就可以直接拿到子组件的所有的方法（vue2）：
this.$refs.child1.handleParentClick("ssss");
<child1 ref="child1"></child1>
子组件
methods: {
            handleParentClick(e) {
                console.info(e)
            }
        }
		
子组件调用父组件
1.直接用this.$parent.xxxx这样直接调用父组件的方法
2.父组件 
<hot-handicap @betSta="hide"></hot-handicap>
hide (msg) {
      this.betSta = msg
    },
子组件
this.$emit('betSta', this.matchList[index].showbox)