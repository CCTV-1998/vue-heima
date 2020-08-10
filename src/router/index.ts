import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'

Vue.use(VueRouter)

const routes : Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import("../views/login/index.vue"),
        meta: {
            title:'登陆'
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to,form,next)=>{
    if(to.meta.title){
        document.title = to.meta.title
    }
    next()
})

export default router
