<template>
	<div>
		
		<!--顶部登录条-->
		<router-view name='ontop'></router-view>
	
	<!--中间内容显示-->
	<div class="container">
			
			<router-view name='top'></router-view>
			
			<router-view name='middle'></router-view>
			
			
	</div>
		
	<!--底部信息条-->
	<router-view name='bottom'></router-view>
	
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	
</style>
