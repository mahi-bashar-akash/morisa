<template>

    <!-- breadcrumb -->
    <section class="w-100 py-5">
        <div class="container">
            <div class="position-relative">
                <img :src="`/images/breadcrumb.webp`" class="img-fluid object-fit-cover height-320 w-100"
                     alt="breadcrumb">
                <div
                    class="position-absolute start-0 top-0 w-100 h-100 text-center d-flex justify-content-center align-items-center flex-column">
                    <div class="fs-1 mb-3"> Profile Settings</div>
                    <div class="d-flex justify-content-center align-items-center">
                        <router-link :to="{name: 'home'}" class="text-decoration-none text-secondary">
                            Home
                        </router-link>
                        <div class="mx-3"> -</div>
                        <router-link :to="{name: 'settings'}" class="text-decoration-none text-theme">
                            Profile Settings
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="w-100 py-5">
        <div class="container">

            <div class="row">
                <div class="col-lg-12 px-0 mb-4">
                    <div class="col-md-12 mb-3 fs-4"> Edit Profile</div>
                    <div class="px-3">
                        <form @submit.prevent="profileUpdate()" class="w-100 px-3 py-4 border row">
                            <div class="col-md-12">
                                <div class="form-group mb-3">
                                    <label for="full-name" class="form-label">Full Name</label>
                                    <input type="text" name="full-name" id="full-name"
                                           class="form-control rounded-0 border shadow-none p-3"
                                           autocomplete="new-full-name" v-model="profileParam.name">
                                    <div class="error-report" v-if="error != null && error.name !== undefined"> {{error.name[0]}} </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="text" name="email" id="email"
                                           class="form-control rounded-0 border shadow-none p-3"
                                           autocomplete="new-email" v-model="profileParam.email">
                                    <div class="error-report" v-if="error != null && error.email !== undefined"> {{error.email[0]}} </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <button type="submit" class="btn btn-outline-theme py-3 width-96 rounded-0" v-if="!profileUpdateLoading">
                                    Update
                                </button>
                                <button type="button" class="btn btn-outline-theme py-3 width-96 rounded-0" v-if="profileUpdateLoading">
                                    Loading
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="col-lg-12 px-0">
                    <div class="col-md-12 mb-3 fs-4"> Change Password</div>
                    <div class="px-3">
                        <form @submit.prevent="passwordUpdate()" class="w-100 px-3 py-4 border row">
                            <div class="col-md-6">
                                <div class="form-group mb-3">
                                    <label for="old-password" class="form-label">Old Password</label>
                                    <input type="text" name="old-password" id="old-password"
                                           class="form-control rounded-0 border shadow-none p-3"
                                           autocomplete="new-old-password" v-model="passwordParam.current_password">
                                    <div class="error-report" v-if="error != null && error.current_password !== undefined"> {{error.current_password[0]}} </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group mb-3">
                                    <label for="new-password" class="form-label">New Password</label>
                                    <input type="text" name="new-password" id="new-password"
                                           class="form-control rounded-0 border shadow-none p-3"
                                           autocomplete="new-new-password" v-model="passwordParam.password">
                                    <div class="error-report" v-if="error != null && error.password !== undefined"> {{error.password[0]}} </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group mb-3">
                                    <label for="confirm-password" class="form-label">Confirm
                                        Password</label>
                                    <input type="text" name="confirm-password" id="confirm-password"
                                           class="form-control rounded-0 border shadow-none p-3"
                                           autocomplete="new-confirm-password" v-model="passwordParam.password_confirmation">
                                    <div class="error-report" v-if="error != null && error.password_confirmation !== undefined"> {{error.password_confirmation[0]}} </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <button type="submit" class="btn btn-outline-theme py-3 width-96 rounded-0" v-if="!passwordUpdateLoading">
                                    Update
                                </button>
                                <button type="button" class="btn btn-outline-theme py-3 width-96 rounded-0" v-if="passwordUpdateLoading">
                                    Loading
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </section>

</template>

<script>

import axios from "axios";
import routeApi from "../../../../api/routeApi.js";
import serviceApi from "../../../../api/serviceApi.js";
import {createToaster} from "@meforma/vue-toaster";
const toaster = createToaster({
    position: 'top-right',
});

export default {
    data() {
        return {
            error: null,
            profileUpdateLoading: false,
            passwordUpdateLoading: false,
            profileParam: {
                name: '',
                email: '',
            },
            passwordParam: {
                current_password: '',
                password: '',
                password_confirmation: '',
            },
            UserInfo: window.core.UserInfo,
        }
    },
    mounted() {
        this.profileParam = this.UserInfo
    },
    methods: {

        /* Function to profile update api */
        profileUpdate() {
            this.profileUpdateLoading = true;
            axios.patch(routeApi.userDetailsUpdate, this.profileParam, {headers: serviceApi.headerContent}).then((response) => {
                if(response) {
                    this.profileUpdateLoading = false;
                    this.profileParam = this.UserInfo
                    toaster.info('Profile Update Successfully');
                }
            }).catch(err => {
                this.profileUpdateLoading = false;
                let res = err?.response;
                if(res?.data?.errors !== undefined) {
                    this.error = res?.data?.errors;
                }else {
                    toaster.error('Service error!');
                }
            })
        },

        /* Function to profile update api */
        passwordUpdate() {
            this.passwordUpdateLoading = true;
            axios.patch(routeApi.userPasswordUpdate, this.passwordParam, {headers: serviceApi.headerContent}).then((response) => {
                if(response) {
                    this.passwordUpdateLoading = false;
                    this.passwordParam = null;
                    toaster.info('Password Update Successfully');
                }
            }).catch(err => {
                this.passwordUpdateLoading = false;
                let res = err?.response;
                if(res?.data?.errors !== undefined) {
                    this.error = res?.data?.errors;
                }else {
                    toaster.error('Service error!');
                }
            })
        },

    }
}

</script>
