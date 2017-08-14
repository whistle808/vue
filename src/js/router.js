// 导入包
import VueRouter from 'vue-router';

// 导入index组件
import Cindex from '../component/index/index.vue';

// 新闻模块的组件
import CnewList from '../component/news/list.vue';
import Cnewdetails from '../component/news/details.vue';

// 图片模块的组件
import CphotoList from '../component/photo/list.vue';
import CphotoTails from '../component/photo/details.vue';

// 导出一个路由实例
export default new VueRouter({
    routes: [{
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: Cindex
        },
        {
            path: '/news/list',
            component: CnewList
        },
        {
            path: '/news/details/:id',
            component: Cnewdetails 
        },
        {
            path: '/photo/list/:id',
            component: CphotoList
        },
        {
            path: '/photo/details/:id',
            component: CphotoTails 
        }

    ]
});