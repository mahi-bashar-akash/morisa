import {createRouter, createWebHistory} from "vue-router";

import layout from "../layout/layout.vue";

import dashboard from "../pages/dashboard.vue";

import slider from "../pages/slider.vue";

import about from "../pages/about.vue";

import contact from "../pages/contact.vue";

import category from "../pages/category.vue";

import product from "../pages/product.vue";

import explore from "../pages/explore.vue";

import box from "../pages/box.vue";

import blog from "../pages/blog.vue";

import customer from "../pages/customer.vue";

import order from "../pages/order.vue";

import settings from "../pages/settings.vue";

const TITLE = window.core.APP_NAME

const ROOT_URL = "/admin/";

const routes = [

    {
        path: ROOT_URL, name: 'layout', component: layout,

        children: [

            { path: ROOT_URL + 'dashboard', name: 'dashboard', component: dashboard, meta: { title: TITLE + ' - Dashboard' } },

            { path: ROOT_URL + 'slider', name: 'slider', component: slider, meta: { title: TITLE + ' - Slider' } },

            { path: ROOT_URL + 'box', name: 'box', component: box, meta: { title: TITLE + ' - Box' } },

            { path: ROOT_URL + 'category', name: 'category', component: category, meta: { title: TITLE + ' - Category' } },

            { path: ROOT_URL + 'product', name: 'product', component: product, meta: { title: TITLE + ' - Product' } },

            { path: ROOT_URL + 'blog', name: 'blog', component: blog, meta: { title: TITLE + ' - Blog' } },

            { path: ROOT_URL + 'about', name: 'about', component: about, meta: { title: TITLE + ' - About' } },

            { path: ROOT_URL + 'contact', name: 'contact', component: contact, meta: { title: TITLE + ' - Contact' } },

            { path: ROOT_URL + 'explore', name: 'explore', component: explore, meta: { title: TITLE + ' - Explore' } },

            { path: ROOT_URL + 'customer', name: 'customer', component: customer, meta: { title: TITLE + ' - Customer' } },

            { path: ROOT_URL + 'order', name: 'order', component: order, meta: { title: TITLE + ' - Order' } },

            { path: ROOT_URL + 'settings', name: 'settings', component: settings, meta: { title: TITLE + ' - Settings' } },

        ]

    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
