<template>
	<div id="top">
		<!--设置logo-->
		<div class="image">
			<router-link to='/index'>
				<img src="../image/logo.jpg" width="100px" height="100px"/>
			</router-link>
		</div>
		
		<!--设置导航-->
		<div>
			<ul class="daohang">
				<li>
					<a>
						<router-link to='/hot_product'>热门拍卖</router-link>
					</a>
				</li>
				<li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
				<li>
					<a>
						<router-link to='/productlist'>我的收藏</router-link>
					</a>
				</li>
				<li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
				<li>
					<a>
						<router-link to='/global_shoot'>全球拍</router-link>
					</a>
				</li>
				<li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
				<li>
					<a>
						<router-link to='/time_shooting'>限时拍</router-link>
					</a>
				</li>
				<li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
				<li>
					<a>
						<router-link to='/preview'>预展</router-link>
					</a>
				</li>
				<li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
				<li>
					<a>
						<router-link to='/end'>一降到底</router-link>
					</a>
				</li>
				<li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
				<li>
					<a>
						<router-link to='/help'>帮助</router-link>
					</a>
				</li>
			</ul>
		</div>
		
		<!--商品搜索div-->
		<div class='query'>
			<form>
				<input type="text" name='address' style="border-right-style: none;" placeholder='区域'>		<!--根据区域查询-->
				<input type="text" name='product_name' style="border-left-style: none;" placeholder='拍品名称'>		<!--根据商品名查询-->
				<input id='button' type="button" value="搜索"/>
			</form>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	#top{
		height: 100px;
		margin-top: 30px;
	}
	.image{
		float: left;
	}
	.daohang{
		margin-left: 50px;
		float: left;
	}
	ul{
		text-align: center;
		height: 100%;
		height: 70px;
		
	}
	li{
		list-style: none;
		float: left;
		text-align: center;
		margin-top: 40px;
	}
	a{
		text-decoration: none;
		font-size: 20px;
		color: black;
	}
	a:hover{
		color: red;
	}
	.query{
		margin-left: 70px;
		margin-top: 35px;
		float: left;
	}
	input{
		height: 45px;
		width: 80px;
		float: left;
		border-bottom-style: none;
	}
</style>
