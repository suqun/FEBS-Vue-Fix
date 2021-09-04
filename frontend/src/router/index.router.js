//业务管理
export default {
    path: '/',
    component: () => import('../views/Index.vue'),
    children: [
        // {
        //     path: '',
        //     redirect: '/business/dashboard'
        // },
        {
            path: 'index',
            name: '首页',
            component: () => import('../views/index/Index.vue')
        },

    ]
}
