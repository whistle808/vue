// 导入包
import VueRouter from 'vue-router';

// 导入index组件
import Cindex from '../component/index/index.vue';
import Cnews from '../component/index/news.vue';
import Csports from '../component/index/sports.vue';
import Cvideos from '../component/index/videos.vue';


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
            path: '/news',
            component: Cnews
        },
        {
            path: '/sports',
            component: Csports
        },
        {
            path: '/videos',
            component: Cvideos
        }

    ]
});