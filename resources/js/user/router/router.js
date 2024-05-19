import {createRouter, createWebHistory} from "vue-router";

import layout from "../layout/layout.vue";

import home from "../page/home.vue";

import about from "../page/about.vue";

import contact from "../page/contact.vue";

import blog from "../page/blog.vue";

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

        ]

    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
