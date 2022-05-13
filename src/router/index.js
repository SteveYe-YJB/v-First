
import {
    createRouter,
    createWebHistory,
} from 'vue-router'
import RenderRouterView from "../components/RenderRouterView.vue"
import NotFound from "../pages/404.vue"
import NProgress from 'nprogress'
import 'nprogress/css/nprogress.css'


const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/layouts/BasicLayout.vue'),
        children: [
            {
                path: '/',
                redirect: '/table/project'
            },
            {
                path: 'table',
                name: 'table',
                component: RenderRouterView,
                children: [
                    {
                        path: 'project',
                        name: 'project',
                        component: () => import('../pages/table/outside_project/Project.vue')
                    }
                ]
            },
        ]
    },

    {
        path: '/user',
        component: () => import('../pages/layouts/UserLayout.vue'),
        children: [
            {
                path: '/user',
                redirect: '/user/login'
            },
            {
                path: 'login',
                name: 'login',
                component: () => import('../pages/user/Login.vue')
            },
            {
                path: 'register',
                name: 'register',
                component: () => import('../pages/user/Register.vue')
            },

        ]
    },
    {
        path: '/test',
        component: () => import('../pages/user/test.vue')
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    // 开启进度条
    NProgress.start()
    next()
})
router.afterEach(() => {
    // 关闭进度条
    NProgress.done()
})

export default router
