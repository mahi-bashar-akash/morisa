<template>

    <form @submit.prevent="register()" class="w-100 shadow bg-white p-4 p-sm-5 fw-medium">
        <div class="text-center">
            <div class="mb-4">
                <img :src="`/images/logo.webp`" class="width-100" alt="logo">
            </div>
            <div class="mb-4 fs-5 fw-medium text-secondary"> Create new account </div>
        </div>
        <div class="form-group mb-3">
            <label for="name" class="form-label">Full Name</label>
            <input id="name" type="text" name="name" class="form-control px-3 height-45 border shadow-none rounded-0"
                   autocomplete="off" v-model="registrationParam.name">
            <div class="error-report" v-if="error != null && error.name !== undefined"> {{error.name[0]}} </div>
        </div>
        <div class="form-group mb-3">
            <label for="email" class="form-label">Email</label>
            <input id="email" type="email" name="email" class="form-control px-3 height-45 border shadow-none rounded-0"
                   autocomplete="off" v-model="registrationParam.email">
            <div class="error-report" v-if="error != null && error.email !== undefined"> {{error.email[0]}} </div>
        </div>
        <div class="form-group mb-3">
            <label for="password" class="form-label">Password</label>
            <input id="password" type="password" name="password" class="form-control px-3 height-45 border shadow-none rounded-0"
                   autocomplete="off" v-model="registrationParam.password">
            <div class="error-report" v-if="error != null && error.password !== undefined"> {{error.password[0]}} </div>
        </div>
        <div class="form-group mb-3">
            <label for="password_confirmation" class="form-label">Password Confirmation</label>
            <input id="password_confirmation" type="password" name="password_confirmation" class="form-control px-3 height-45 border shadow-none rounded-0"
                   autocomplete="off" v-model="registrationParam.password_confirmation">
            <div class="error-report" v-if="error != null && error.password_confirmation !== undefined"> {{error.password_confirmation[0]}} </div>
        </div>
        <div class="mb-3">
            <button type="submit" class="btn btn-theme width-140 height-45 rounded-0" v-if="!loading">
                Registration
            </button>
            <button type="button" class="btn btn-theme width-140 height-45 rounded-0" v-if="loading">
                Loading
            </button>
        </div>
        <div class="mt-3 text-center">
            Already have an account?
            <router-link :to="{name: 'login'}" class="text-decoration-none text-light-gray-hover">
                Login
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
            registrationParam: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            }

        }
    },
    mounted() {

    },
    methods: {

        /* Function to registration api */
        register() {
            serviceApi.ClearErrorHandler();
            this.loading = true;
            axios.post(routeApi.adminRegistration, this.registrationParam, { headers: serviceApi.headerContent }).then((response) => {
                if (response.data) {
                    this.loading = false;
                    toaster.info('Registration Successfully');
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
        }

    }
}

</script>
