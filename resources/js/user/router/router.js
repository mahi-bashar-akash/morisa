import {createRouter, createWebHistory} from "vue-router";

/*---------- global content ----------*/
import layout from "../layout/layout.vue";
import home from "../page/home.vue";
import about from "../page/about.vue";
import contact from "../page/contact.vue";
import blog from "../page/blog.vue";
import singleBlog from "../page/single/blog.vue";
import shop from "../page/shop.vue";
import singleProduct from "../page/single/product.vue";
import cart from "../page/cart.vue";
import checkout from "../page/checkout.vue";

/*---------- user authentication ----------*/
import login from "../page/login.vue";
import registration from "../page/registration.vue";

/*---------- user content ----------*/
import profileLayout from "../page/profile/layout/layout.vue";
import details from "../page/profile/pages/details.vue";
import settings from "../page/profile/pages/settings.vue";

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
            { path: ROOT_URL + 'single-product', name: 'singleProduct', component: singleProduct, meta: { title: TITLE + ' - Single Product' } },
            { path: ROOT_URL + 'login', name: 'login', component: login, meta: { title: TITLE + ' - Login' } },
            { path: ROOT_URL + 'registration', name: 'registration', component: registration, meta: { title: TITLE + ' - Registration' } },
            { path: ROOT_URL + 'cart', name: 'cart', component: cart, meta: { title: TITLE + ' - Cart' } },
            { path: ROOT_URL + 'checkout', name: 'checkout', component: checkout, meta: { title: TITLE + ' - Checkout' } },
            {
                path: ROOT_URL, name: 'profileLayout', component: profileLayout,
                children: [
                    { path: ROOT_URL + 'details', name: 'details', component: details, meta: { title: TITLE + ' - Details' } },
                    { path: ROOT_URL + 'settings', name: 'settings', component: settings, meta: { title: TITLE + ' - Settings' } },
                ]
            }
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
