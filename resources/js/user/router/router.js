import {createRouter, createWebHistory} from "vue-router";

import layout from "../layout/layout.vue";

import home from "../page/home.vue";

import about from "../page/about.vue";

import contact from "../page/contact.vue";

import blog from "../page/blog.vue";

import singleBlog from "../page/single/blog.vue";

import shop from "../page/shop.vue";

import login from "../page/login.vue";

import registration from "../page/registration.vue";

import cart from "../page/cart.vue";

const TITLE = window.core.APP_NAME

const ROOT_URL = "/user/";

const routes = [

    {
        path: ROOT_URL, name: 'layout', component: layout,

        children: [

            { path: ROOT_URL + 'home', name: 'home', component: home, meta: { title: TITLE + ' - Home' } },

            { path: ROOT_URL + 'about', name: 'about', component: about, meta: { title: TITLE + ' - About' } },

            { path: ROOT_URL + 'contact', name: 'contact', component: contact, meta: { title: TITLE + ' - Contact' } },

            { path: ROOT_URL + 'blog', name: 'blog', component: blog, meta: { title: TITLE + ' - Blog' } },

            { path: ROOT_URL + 'single-blog', name: 'singleBlog', component: singleBlog, meta: { title: TITLE + ' - Single Blog' } },

            { path: ROOT_URL + 'shop', name: 'shop', component: shop, meta: { title: TITLE + ' - Shop' } },

            { path: ROOT_URL + 'login', name: 'login', component: login, meta: { title: TITLE + ' - Login' } },

            { path: ROOT_URL + 'registration', name: 'registration', component: registration, meta: { title: TITLE + ' - Registration' } },

            { path: ROOT_URL + 'cart', name: 'cart', component: cart, meta: { title: TITLE + ' - Cart' } },

        ]

    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
