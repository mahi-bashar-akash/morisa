<template>

    <!-- breadcrumb -->
    <section class="w-100 py-5">
        <div class="container">
            <div class="position-relative">
                <img :src="`/images/breadcrumb.webp`" class="img-fluid object-fit-cover height-320 w-100" alt="breadcrumb">
                <div class="position-absolute start-0 top-0 w-100 h-100 text-center d-flex justify-content-center align-items-center flex-column">
                    <div class="fs-1 mb-3">Login</div>
                    <div class="d-flex justify-content-center align-items-center">
                        <router-link :to="{name: 'home'}" class="text-decoration-none text-secondary">
                            Home
                        </router-link>
                        <div class="mx-3"> -</div>
                        <router-link :to="{name: 'login'}" class="text-decoration-none text-theme">
                            Login
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- login -->
    <div class="py-5">
        <div class="container">
            <div class="row justify-content-center p-3">
                <form @submit.prevent="login()" class="authentication p-5 border">
                    <div class="alert alert-danger rounded-3 mb-3 text-center" v-if="error !== null && error.error !== undefined" v-text="error.error"></div>
                    <div class="form-group mb-3">
                        <label for="email" class="form-label">Email or Username</label>
                        <input type="email" name="email" id="email" class="form-control border shadow-none p-3" autocomplete="off" v-model="loginParam.email">
                        <div class="error-report" v-if="error != null && error.email !== undefined"> {{error.email[0]}} </div>
                    </div>
                    <div class="form-group mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" name="password" id="password" class="form-control border shadow-none p-3" autocomplete="off" v-model="loginParam.password">
                        <div class="error-report" v-if="error != null && error.password !== undefined"> {{error.email[0]}} </div>
                    </div>
                    <div class="form-group mb-3">
                        <div class="d-flex align-items-center justify-content-between w-100">
                            <label for="remember-me" class="form-check-label">
                                <input type="checkbox" name="remember-me" id="remember-me" class="form-checkbox me-2">
                                Remember me
                            </label>
                            <router-link :to="{name: 'forget'}" class="text-decoration-none text-theme">
                                Lost your password?
                            </router-link>
                        </div>
                    </div>
                    <div class="w-100">
                        <button type="submit" class="btn btn-outline-theme py-3 width-140 rounded-0" v-if="!loading">
                            Login
                        </button>
                        <button type="button" class="btn btn-outline-theme py-3 width-140 rounded-0" v-if="loading">
                            Loading
                        </button>
                    </div>
                </form>

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
    data(){
        return{
            loading: false,
            error: null,
            loginParam: {
                email: '',
                password: '',
            },
            UserInfo: window.core.UserInfo,
        }
    },
    mounted() {
        if(this.UserInfo !== null ) {
            this.$router.push('details')
        }
    },
    methods: {

        /* Function to login api */
        login() {
            serviceApi.ClearErrorHandler();
            this.loading = true;
            axios.post(routeApi.userLogin, this.loginParam, { headers: serviceApi.headerContent }).then((response) => {
                if (response.data) {
                    this.loading = false;
                    window.location.reload();
                    toaster.info('Login Successfully');
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
