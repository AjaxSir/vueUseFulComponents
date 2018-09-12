1 query 传递参数
(1) 路由为静态路由
发送参数
 <router-link :to="{ path:'/main/child', query: { name: 'haha'} }"> 跳转</router-link>
 接受参数
 <h3>{{ this.$route.query.name }}</h3> 想当于url拼接参数
 2 params 
 (1) 路由为动态路由
path: "/main/child/:name",
<router-link to="/main/child/haha"> 跳转</router-link>  
<router-link :to="{ name: 'child', params: { name: 'haha' }}"> 跳转</router-link>
接收参数
this.$route.params.name