<template>

    <div class="admin-wrapper">

        <!-- admin sidebar -->
        <div class="admin-sidebar" :class="{'active' : isActiveSidebar}">

            <!-- admin sidebar header -->
            <div class="admin-sidebar-header">

                <!-- admin sidebar logo -->
                <router-link :to="{name: 'dashboard'}" class="admin-sidebar-logo" @click="sidebarClose()">
                    A<span>dmin Panel</span>
                </router-link>

                <!-- admin sidebar close -->
                <button type="button" class="admin-sidebar-close" @click="sidebarClose()">
                    <i class="bi bi-x-lg"></i>
                </button>

            </div>

            <!-- admin sidebar body -->
            <div class="admin-sidebar-body">

                <!-- admin sidebar link - dashboard -->
                <router-link :to="{name: 'dashboard'}" class="admin-sidebar-body-link" @click="sidebarClose()">
                    <i class="bi bi-speedometer"></i>
                    <span class="ms-2"> dashboard </span>
                </router-link>

                <!-- admin sidebar link - calendar -->
                <router-link :to="{name: 'calendar'}" class="admin-sidebar-body-link" @click="sidebarClose()">
                    <i class="bi bi-calendar"></i>
                    <span class="ms-2"> Calendar </span>
                </router-link>

                <!-- admin sidebar link - chat -->
                <router-link :to="{name: 'chat'}" class="admin-sidebar-body-link" @click="sidebarClose()">
                    <i class="bi bi-chat-left-text"></i>
                    <span class="ms-2"> Chat </span>
                </router-link>

                <!-- admin sidebar link - email -->
                <router-link :to="{name: 'email'}" class="admin-sidebar-body-link" @click="sidebarClose()">
                    <i class="bi bi-envelope"></i>
                    <span class="ms-2"> email </span>
                </router-link>

                <!-- admin sidebar link - sliders -->
                <router-link :to="{name: 'sliders'}" class="admin-sidebar-body-link" @click="sidebarClose()">
                    <i class="bi bi-sliders"></i>
                    <span class="ms-2"> sliders </span>
                </router-link>

                <!-- admin sidebar link - boxes -->
                <router-link :to="{name: 'boxes'}" class="admin-sidebar-body-link" @click="sidebarClose()">
                    <i class="bi bi-boxes"></i>
                    <span class="ms-2"> boxes </span>
                </router-link>

                <!-- admin sidebar link - categories -->
                <router-link :to="{name: 'attribute'}" class="admin-sidebar-body-link" @click="sidebarClose()">
                    <i class="bi bi-link-45deg"></i>
                    <span class="ms-2"> Attribute </span>
                </router-link>

                <!-- admin sidebar link - about -->
                <router-link :to="{name: 'about'}" class="admin-sidebar-body-link" @click="sidebarClose()">
                    <i class="bi bi-person"></i>
                    <span class="ms-2"> about </span>
                </router-link>

                <!-- admin sidebar link - blogs -->
                <router-link :to="{name: 'blogs'}" class="admin-sidebar-body-link" @click="sidebarClose()">
                    <i class="bi bi-card-text"></i>
                    <span class="ms-2"> blogs </span>
                </router-link>

                <!-- admin sidebar link - products -->
                <router-link :to="{name: 'products'}" class="admin-sidebar-body-link" @click="sidebarClose()">
                    <i class="bi bi-bag"></i>
                    <span class="ms-2"> products </span>
                </router-link>

                <!-- admin sidebar link - customers -->
                <router-link :to="{name: 'customers'}" class="admin-sidebar-body-link" @click="sidebarClose()">
                    <i class="bi bi-people"></i>
                    <span class="ms-2"> customers </span>
                </router-link>

                <!-- admin sidebar link - orders -->
                <router-link :to="{name: 'orders'}" class="admin-sidebar-body-link" @click="sidebarClose()">
                    <i class="bi bi-cart"></i>
                    <span class="ms-2"> orders </span>
                </router-link>

            </div>

            <!-- admin sidebar footer -->
            <div class="admin-sidebar-footer">

                <!-- admin sidebar footer link -->
                <button type="button" class="admin-sidebar-footer-link">
                    <i class="bi bi-box-arrow-in-right"></i>
                    <span class="ms-2"> Logout </span>
                </button>

            </div>

        </div>

        <!-- admin content -->
        <div class="admin-content">

            <!-- admin content header -->
            <div class="admin-content-header">

                <div class="d-flex align-items-center justify-content-start">

                    <!-- admin sidebar toggle -->
                    <button type="button" class="admin-sidebar-toggle" @click="sidebarOpen()">
                        <i class="bi bi-justify-left"></i>
                    </button>

                    <!-- admin responsive search - mobile & tablet -->
                    <div class="ms-3 d-lg-none">
                        <button type="button" class="btn-icon rounded-3">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>

                    <!-- admin responsive search - laptop & desktop -->
                    <div class="d-none d-lg-inline">
                        <div class="position-relative header">
                            <div class="position-absolute top-50 start-0 translate-middle-y ps-3">
                                <i class="bi bi-search text-light-gray"></i>
                            </div>
                            <input type="text" name="keyword" class="form-control ps-5 py-3" placeholder="Search here anything" required autocomplete="new-keyword">
                        </div>
                    </div>

                </div>

                <div class="d-flex justify-content-end align-items-center">

                    <!-- admin full screen -->
                    <button type="button" class="btn-icon rounded-3 me-3" @click="fullscreen()">
                        <i class="bi bi-fullscreen"></i>
                    </button>

                    <!-- admin envelope -->
                    <div class="dropdown">
                        <button type="button" class="btn-icon rounded-3 me-3" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-envelope"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end width-330">
                            <li class="mb-1">
                                <a href="javascript:void(0)" class="text-decoration-none dropdown-item">
                                    <span class="d-block fw-medium">
                                        John Smith
                                    </span>
                                    <span class="text-secondary truncate-to-2-line text-wrap">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, sequi?
                                    </span>
                                </a>
                            </li>
                            <li class="mb-1">
                                <a href="javascript:void(0)" class="text-decoration-none dropdown-item">
                                    <span class="d-block fw-medium">
                                        John Duo
                                    </span>
                                    <span class="text-secondary truncate-to-2-line text-wrap">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, sequi?
                                    </span>
                                </a>
                            </li>
                            <li class="mb-1">
                                <a href="javascript:void(0)" class="text-decoration-none dropdown-item">
                                    <span class="d-block fw-medium">
                                        Emma WordSon
                                    </span>
                                    <span class="text-secondary truncate-to-2-line text-wrap">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, sequi?
                                    </span>
                                </a>
                            </li>
                            <li class="mb-1">
                                <a href="javascript:void(0)" class="text-decoration-none dropdown-item">
                                    <span class="d-block fw-medium">
                                        ElbRas William
                                    </span>
                                    <span class="text-secondary truncate-to-2-line text-wrap">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, sequi?
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="btn btn-light-theme d-block">
                                    Show all
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- admin profile dropdown -->
                    <div class="dropdown">
                        <div class="cursor-pointer" data-bs-toggle="dropdown" aria-expanded="false">
                            <img :src="`/images/teams/team-1.jpg`"
                                 class="img-fluid object-fit-contain width-45 height-45 rounded-circle" alt="avatar">
                        </div>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li class="mb-1">
                                <router-link :to="{name: 'profile'}" class="dropdown-item">
                                    <i class="bi bi-person"></i>
                                    <span class="ms-2">
                                        {{UserInfo.name}}
                                    </span>
                                </router-link>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item" @click="profileLogout()" v-if="!loading">
                                    <i class="bi bi-box-arrow-in-right"></i>
                                    <span class="ms-2">
                                        Logout
                                    </span>
                                </button>
                                <button type="button" class="dropdown-item" @click="profileLogout()" v-if="loading">
                                    Loading
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>

            <!-- admin content body -->
            <div class="admin-content-body scrollbar position-relative overflow-x-hidden">
                <router-view/>
            </div>

        </div>

    </div>

</template>

<script>

import serviceApi from "../../api/serviceApi.js";
import routeApi from "../../api/routeApi.js";
import axios from "axios";
import {createToaster} from "@meforma/vue-toaster";
const toaster = createToaster({
    position: 'top-right',
});

export default {
    data() {
        return {
            isActiveSidebar: false,
            loading: false,
            UserInfo: window.core.UserInfo
        }
    },
    mounted() {  },
    methods: {

        /* --- --- --- sidebar open --- --- --- */
        sidebarOpen() {
            this.isActiveSidebar = true;
        },

        /* --- --- --- sidebar close --- --- --- */
        sidebarClose() {
            this.isActiveSidebar = false;
        },

        /* --- --- --- full screen --- --- --- */
        fullscreen() {
            if (!document.fullscreenElement
                && !document.mozFullScreenElement
                && !document.webkitFullscreenElement) {
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
            }
        },

        /* Function of profile logout */
        profileLogout() {
            serviceApi.ClearErrorHandler();
            this.loading = true;
            axios.get(routeApi.adminLogout, null, { headers: serviceApi.headerContent }).then((response) => {
                if (response.data) {
                    this.loading = false;
                    window.location.reload();
                    toaster.info('Logout Successfully');
                }
            }).catch(err => {
                this.loading = false;
                let res = err?.response;
                if (res?.data?.errors !== undefined) {
                    this.error = res?.data?.errors;
                } else {
                    toaster.error('Service error!');
                }
            });
        },

    }
}

</script>
