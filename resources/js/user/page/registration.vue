<template>

    <!-- breadcrumb -->
    <section class="w-100 py-5">
        <div class="container">
            <div class="position-relative">
                <img :src="`/images/breadcrumb.webp`" class="img-fluid object-fit-cover height-320 w-100" alt="breadcrumb">
                <div class="position-absolute start-0 top-0 w-100 h-100 text-center d-flex justify-content-center align-items-center flex-column">
                    <div class="fs-1 mb-3">Registration</div>
                    <div class="d-flex justify-content-center align-items-center">
                        <router-link :to="{name: 'home'}" class="text-decoration-none text-secondary">
                            Home
                        </router-link>
                        <div class="mx-3"> -</div>
                        <router-link :to="{name: 'registration'}" class="text-decoration-none text-theme">
                            Registration
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- registration -->
    <div class="py-5">
        <div class="container">
            <div class="row justify-content-center p-3">

                <form @submit.prevent="registration()" class="authentication p-5 border">
                    <div class="form-group mb-3">
                        <label for="name" class="form-label"> Full Name </label>
                        <input type="text" name="name" id="name" class="form-control border shadow-none p-3" placeholder="Full Name (Required)" autocomplete="off" v-model="registrationParam.name">
                        <div class="error-report" v-if="error != null && error.name !== undefined"> {{error.name[0]}} </div>
                    </div>
                    <div class="form-group mb-3">
                        <label for="email" class="form-label"> Email or Username </label>
                        <input type="email" name="email" id="email" class="form-control border shadow-none p-3" placeholder="Username or Email (Required)" autocomplete="off" v-model="registrationParam.email">
                        <div class="error-report" v-if="error != null && error.email !== undefined"> {{error.email[0]}} </div>
                    </div>
                    <div class="form-group mb-3">
                        <label for="new-password" class="form-label"> New password </label>
                        <input type="password" name="new-password" id="new-password" class="form-control border shadow-none p-3" placeholder="New Password (Required)" autocomplete="off" v-model="registrationParam.password">
                        <div class="error-report" v-if="error != null && error.password !== undefined"> {{error.password[0]}} </div>
                    </div>
                    <div class="form-group mb-3">
                        <label for="confirm-password" class="form-label"> Confirm password </label>
                        <input type="password" name="confirm-password" id="confirm-password" class="form-control border shadow-none p-3" placeholder="Confirm Password (Required)" autocomplete="off" v-model="registrationParam.password_confirmation">
                        <div class="error-report" v-if="error != null && error.password_confirmation !== undefined"> {{error.password_confirmation[0]}} </div>
                    </div>
                    <div class="form-group mb-3">
                        <label for="remember-me" class="form-check-label">
                            <input type="checkbox" name="remember-me" id="remember-me" class="form-checkbox me-2">
                            I agree <a href="javascript:void(0)" class="text-decoration-none text-theme"> Terms & Condition </a>
                        </label>
                    </div>
                    <div class="w-100">
                        <button type="submit" class="btn btn-outline-theme py-3 width-140 d-flex justify-content-center rounded-0" v-if="!loading">
                            Registration
                        </button>
                        <button type="button" class="btn btn-outline-theme py-3 width-140 d-flex justify-content-center rounded-0" v-if="loading">
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
            registrationParam: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            },
            UserInfo: window.core.UserInfo,
        }
    },
    mounted() {
        if(this.UserInfo !== null ) {
            this.$router.push('details');
        }
    },
    methods: {

        /* Function to registration api */
        registration() {
            serviceApi.ClearErrorHandler();
            this.loading = true;
            axios.post(routeApi.userRegistration, this.registrationParam, { headers: serviceApi.headerContent }).then((response) => {
                if (response.data) {
                    this.loading = false;
                    this.$router.push({name: 'login'});
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
        },

    }
}

</script>
