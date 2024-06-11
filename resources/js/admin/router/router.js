import {createRouter, createWebHistory} from "vue-router";

import authLayout from "../authentication/layout/layout.vue";
    import login from "../authentication/pages/login.vue";
    import registration from "../authentication/pages/registration.vue";
    import forget from "../authentication/pages/forget.vue";

import layout from "../layout/layout.vue";
    import dashboard from "../pages/dashboard.vue";
    import slider from "../pages/slider.vue";
    import box from "../pages/box.vue";
    import category from "../pages/category.vue";
    import about from "../pages/about.vue";
    import contact from "../pages/contact.vue";
    import blog from "../pages/blog.vue";
    import product from "../pages/product.vue";
    import customer from "../pages/customer.vue";
    import order from "../pages/order.vue";
    import settings from "../pages/settings.vue";
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
            { path: ROOT_URL + 'slider', name: 'sliders', component: slider, meta: { title: TITLE + ' - Slider' } },
            { path: ROOT_URL + 'box', name: 'boxes', component: box, meta: { title: TITLE + ' - Box' } },
            { path: ROOT_URL + 'category', name: 'categories', component: category, meta: { title: TITLE + ' - Category' } },
            { path: ROOT_URL + 'about', name: 'about', component: about, meta: { title: TITLE + ' - About' } },
            { path: ROOT_URL + 'contact', name: 'contact', component: contact, meta: { title: TITLE + ' - Contact' } },
            { path: ROOT_URL + 'blog', name: 'blogs', component: blog, meta: { title: TITLE + ' - Blog' } },
            { path: ROOT_URL + 'product', name: 'products', component: product, meta: { title: TITLE + ' - Product' } },
            { path: ROOT_URL + 'customer', name: 'customers', component: customer, meta: { title: TITLE + ' - Customer' } },
            { path: ROOT_URL + 'order', name: 'orders', component: order, meta: { title: TITLE + ' - Order' } },
            { path: ROOT_URL + 'settings', name: 'settings', component: settings, meta: { title: TITLE + ' - Settings' } },
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
