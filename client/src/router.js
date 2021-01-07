import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

export default new Router({
    mode:"history",
    routes: [
        {
            path: "/",
            component: () => import("./components/Home.vue"),
            index:0
        },
        {
            path: "/doctor",
            component: () => import("./components/user/user-doctor.vue"),
            index:0
        },
        {
            path: "/hospital",
            component: () => import("./components/user/user-hospital.vue"),
            index:1
        },
        {
            path: "/pharmacie",
            component: () => import("./components/user/user-pharmacie.vue"),
            index:2
        },
        {
            path: "/login",
            component: () => import("./components/login.vue"),
            index:3
        },
        // {
        //     path: "*",
        //     component: () => import("./components/error.vue"),
        //     index:3
        // }
    ]
});