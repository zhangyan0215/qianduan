import $ from 'jquery';
import 'bootstrap3/dist/css/bootstrap.css';
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import layer from "layui-layer";
import "layui-src/dist/css/layui.css";
import layui from "layui-src";

window.layui = layui;
window.$ = $;
window.$ = jQuery;
window.Vue = Vue;

//使用路由
Vue.use(VueRouter);

//导入渲染组件
import router from '../vue/router.js';
//导入主组件
import main from '../vue/main.vue';
			

//注册vue 
var app = new Vue({ 
	el:'#app',
	//进行渲染
	render:function(c){
		return c(main);
	},
	router
});

