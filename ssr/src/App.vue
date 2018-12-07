<template>
	<div>
		<div>ssr 渲染页面</div>
		<router-link to='/home'>home</router-link>	
		<router-link to='/animal'>animal</router-link>	
		<router-link to='/people'>people</router-link>	
		 <router-view></router-view>
	</div>
</template>
<script>
	export default {
		mounted() {

		}
	}
</script>
<style scoped>
	
</style>