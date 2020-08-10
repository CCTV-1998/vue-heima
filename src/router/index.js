import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import("../views/login/index.vue"),
        meta: {
            title: '登陆'
        }
    }
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
router.beforeEach((to, form, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});
export default router;
//# sourceMappingURL=index.js.map