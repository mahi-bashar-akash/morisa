import { createRouter, createWebHistory } from "vue-router";

/*---------- Admin authentication ----------*/
import authLayout from "../authentication/layout/layout.vue";
import login from "../authentication/pages/login.vue";
import registration from "../authentication/pages/registration.vue";
import forget from "../authentication/pages/forget.vue";

/*---------- Admin content ----------*/
import layout from "../layout/layout.vue";
import dashboard from "../pages/dashboard.vue";
import calendar from "../pages/calendar.vue";
import chat from "../pages/chat.vue";
import email from "../pages/email.vue";
import slider from "../pages/slider.vue";
import box from "../pages/box.vue";
import attribute from "../pages/attribute.vue";
import about from "../pages/about.vue";
import blog from "../pages/blog.vue";
import product from "../pages/product.vue";
import customer from "../pages/customer.vue";
import order from "../pages/order.vue";
import profile from "../pages/profile.vue";

const TITLE = window.core.APP_NAME
const AUTH_ROOT_URL = "/admin/auth/";
const ROOT_URL = "/admin/";
const routes = [
    {
        path: AUTH_ROOT_URL, name: 'authLayout', component: authLayout,
        children: [
            { path: AUTH_ROOT_URL + 'login', name: 'login', component: login, meta: { title: TITLE + ' - Login' } },
            { path: AUTH_ROOT_URL + 'registration', name: 'registration', component: registration, meta: { title: TITLE + ' - Registration' } },
            { path: AUTH_ROOT_URL + 'forget', name: 'forget', component: forget, meta: { title: TITLE + ' - Forget' } },
        ]
    },
    {
        path: ROOT_URL, name: 'layout', component: layout,
        children: [
            { path: ROOT_URL + 'dashboard', name: 'dashboard', component: dashboard, meta: { title: TITLE + ' - Dashboard' } },
            { path: ROOT_URL + 'calendar', name: 'calendar', component: calendar, meta: { title: TITLE + ' - Calendar' } },
            { path: ROOT_URL + 'chat', name: 'chat', component: chat, meta: { title: TITLE + ' - Chat' } },
            { path: ROOT_URL + 'email', name: 'email', component: email, meta: { title: TITLE + ' - Email' } },
            { path: ROOT_URL + 'slider', name: 'sliders', component: slider, meta: { title: TITLE + ' - Slider' } },
            { path: ROOT_URL + 'box', name: 'boxes', component: box, meta: { title: TITLE + ' - Box' } },
            { path: ROOT_URL + 'attribute', name: 'attribute', component: attribute, meta: { title: TITLE + ' - attribute' } },
            { path: ROOT_URL + 'about', name: 'about', component: about, meta: { title: TITLE + ' - About' } },
            { path: ROOT_URL + 'blog', name: 'blogs', component: blog, meta: { title: TITLE + ' - Blog' } },
            { path: ROOT_URL + 'product', name: 'products', component: product, meta: { title: TITLE + ' - Product' } },
            { path: ROOT_URL + 'customer', name: 'customers', component: customer, meta: { title: TITLE + ' - Customer' } },
            { path: ROOT_URL + 'order', name: 'orders', component: order, meta: { title: TITLE + ' - Order' } },
            { path: ROOT_URL + 'profile', name: 'profile', component: profile, meta: { title: TITLE + ' - Profile' } },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to,from,savedPosition) {
        if(to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        }else {
            return { top: 0, behavior: 'smooth' };
        }
    }
})

export default router;
