<template>
	<div>
		<div id="on_top">
			<ul class="title_left">
				<li>
					<router-link to="/index">商城首页</router-link>
				</li>
				<li>&nbsp;|&nbsp;</li>
				<li>
					<a href='#'>网站后台</a>
				</li>
				<li>&nbsp;|&nbsp;</li>
				<li>
					<a href='#'>问题反馈</a> 
					<!-- <li @click="modal2=true"><a>问题反馈</a></li> -->
				</li> 
			</ul>
			
			<!--登录模块-->
			<ul class="title_right">
				<li>
					<router-link to='/login'>登录</router-link>
				</li>
				<li>&nbsp;|&nbsp;</li>
				<li>
					<a href="#">注册</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	#on_top{
		background-color: darkslategrey;
		height: 40px;
		width: 100%;
	}
	.title_left{
		list-style: none;
		margin-left: 100px;
		line-height: 40px;
		text-align: center;
	}
	.title_right{
		list-style: none;
		margin-left: 1300px;
		line-height: 40px;
		text-align: center;
	}
	li{
		float: left;
		color: aliceblue;
	}
	a{
		color: #C0C0C0;
		text-decoration: none;
		font-size: 13px;
	}
	a:hover{
		color:white;
	}
</style>
