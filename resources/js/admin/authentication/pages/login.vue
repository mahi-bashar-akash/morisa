<template>

    <form @submit.prevent="login()" class="w-100 shadow bg-white p-4 p-sm-5 fw-medium">
        <div class="text-center">
            <div class="mb-4">
                <img :src="`/images/logo.webp`" class="width-100" alt="logo">
            </div>
            <div class="mb-4 fs-5 fw-medium text-secondary">
                Access to our dashboard
            </div>
        </div>
        <div class="alert alert-danger rounded-3 mb-3 text-center" v-if="error !== null && error.error !== undefined" v-text="error.error"></div>
        <div class="form-group mb-3">
            <label for="email" class="form-label">Email</label>
            <input id="email" type="email" name="email" class="form-control px-3 height-45 border shadow-none rounded-0"
                   autocomplete="off" v-model="loginParam.email">
            <div class="error-report" v-if="error != null && error.email !== undefined"> {{error.email[0]}} </div>
        </div>
        <div class="form-group mb-3">
            <label for="password" class="form-label">Password</label>
            <input id="password" type="password" name="password" class="form-control px-3 height-45 border shadow-none rounded-0"
                   autocomplete="off" v-model="loginParam.password">
            <div class="error-report" v-if="error != null && error.password !== undefined"> {{error.password[0]}} </div>
        </div>
        <div class="d-flex align-items-center justify-content-between mb-3">
            <div class="form-group">
                <label for="remember-me" class="form-check-label cursor-pointer">
                    <input type="checkbox" name="remember-me" class="form-checkbox" id="remember-me">
                    Remember me
                </label>
            </div>
            <router-link :to="{name: 'forget'}" class="text-decoration-none text-danger">
                Forget Password?
            </router-link>
        </div>
        <button type="submit" class="btn btn-theme width-140 height-45 rounded-0" v-if="!loading">
            Login
        </button>
        <button type="button" class="btn btn-theme width-140 height-45 rounded-0" v-if="loading">
            Loading
        </button>
        <div class="mt-3 text-center">
            Don't have an account yet?
            <router-link :to="{name: 'registration'}" class="text-decoration-none text-light-gray-hover">
                Register
            </router-link>
        </div>
    </form>

</template>

<script>

import routeApi from "../../../api/routeApi.js";
import serviceApi from "../../../api/serviceApi.js";
import axios from "axios";
import {createToaster} from "@meforma/vue-toaster";
const toaster = createToaster({
    position: 'top-right',
});

export default {
    data() {
        return {
            loading: false,
            error: null,
            loginParam: {
                email: '',
                password: '',
            },
        }
    },
    mounted() {

    },
    methods: {

        /* Function to login api */
        login() {
            serviceApi.ClearErrorHandler();
            this.loading = true;
            axios.post(routeApi.adminLogin, this.loginParam, { headers: serviceApi.headerContent }).then((response) => {
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
