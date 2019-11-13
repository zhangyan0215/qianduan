import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
Vue.use(VueRouter);

//引用自定义模板vue
import ontop from '../vue/ontop.vue';				//最顶部的样式
import top from '../vue/top.vue';					//导航栏区
import middle from '../vue/middle.vue';				//中间内容展示区
import bottom from '../vue/bottom.vue';				//底部网站描述区
import product from '../vue/product.vue'				//middle中显示的产品


import end from '../vue/end.vue'						//top点击在middle中显示的页面
import hot_product from '../vue/hot_product.vue'
import productlist from '../vue/productlist.vue'
import global_shoot from '../vue/global_shoot.vue'
import time_shooting from '../vue/time_shooting.vue'
import preview from '../vue/preview.vue'
import help from '../vue/help.vue'
import index from '../vue/index.vue'
import login from '../vue/login.vue'

var router = new VueRouter({
	routes:[
			{path:'/',redirect:'/index'},	//访问当前路径，重定向到'index'，二级路径下查找index组件
			{
				//一级路径
				path:'/*',components:{
					'top':top,
					'middle':middle,
					'bottom':bottom,
					'ontop':ontop
				},
				//二级路径
				children:[
					{path:'/login',component:login},
					{path:'/end',component:end},							//一降到底组件
					{path:'/hot_product',component:hot_product},			//热卖商品组件
					{path:'/productlist',component:productlist},		//我的收藏组件
					{path:'/global_shoot',component:product},			//全球拍组件
					{path:'/time_shooting',component:time_shooting},		//显示拍组件
					{path:'/preview',component:preview},					//预展组件
					{path:'/help',component:help},							//帮助组件
					{path:'/index',component:index}							//首页组件
				]
		}
	]
});



//将路由暴露出去，以便其他组件进行引用
export default router ;

