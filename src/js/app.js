// 一。导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// 1.1 手动use启动插件

Vue.use(VueRouter);
Vue.use(VueResource);

// 二、导入自己的组件
// 2.1导入自己的组件
import App from '../component/app.vue'
// 2.2导入配置好的路由对象
import router from './router.js';
// 创建一个Vue实例，关联视图，把跟组件渲染到视图
new Vue({
    el:"#app",
    render:c=>c(App),
    router
});