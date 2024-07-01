<template>

    <div class="row justify-content-center">

        <div class="col-lg-6 col-xl-4">

            <div class="card bg-white rounded-0 border shadow">

                <div
                    class="card-header d-flex justify-content-start align-items-center gap-3 p-4 bg-white rounded-0 border-0">

                    <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center border-0 shadow-sm rounded-circle" @click="openEditProfileModal()">
                        <i class="bi bi-person-fill"></i>
                    </button>

                    <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center border-0 shadow-sm rounded-circle" @click="openChangePasswordModal()">
                        <i class="bi bi-shield-fill"></i>
                    </button>

                </div>

                <div class="card-body p-4 border-0">

                    <div class="mb-3">
                        <div class="d-block fw-bold"> Name: </div>
                        <div class="fw-medium d-block"> {{profileData?.name}} </div>
                    </div>

                    <div class="mb-3">
                        <div class="d-block fw-bold"> Email: </div>
                        <div class="fw-medium d-block"> {{profileData?.email}} </div>
                    </div>

                </div>

            </div>

        </div>

    </div>

    <!-- edit profile modal -->
    <div class="modal fade" id="editProfile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <form @submit.prevent="profileUpdate()" class="modal-content p-4 rounded-0 shadow-none border-0">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Edit Profile
                    </h1>
                    <button type="button" class="btn-close shadow-none" @click="closeEditProfileModal()"></button>
                </div>
                <div class="modal-body border-0">
                    <div class="form-group mb-3">
                        <label for="full-name" class="form-label">Full Name</label>
                        <input id="full-name" type="text" name="full-name" class="form-control p-3 shadow-none rounded-0"
                               autocomplete="off" v-model="profileParam.name">
                        <div class="error-report" v-if="error != null && error.name !== undefined"> {{error.name[0]}} </div>
                    </div>
                    <div class="form-group mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input id="email" type="email" name="email" class="form-control p-3 shadow-none rounded-0"
                               autocomplete="off" v-model="profileParam.email">
                        <div class="error-report" v-if="error != null && error.email !== undefined"> {{error.email[0]}} </div>
                    </div>
                </div>
                <div class="modal-footer border-0">
                    <button type="button" class="btn btn-secondary width-96 rounded-0" @click="closeEditProfileModal()">
                        Close
                    </button>
                    <button type="submit" class="btn btn-theme width-96 rounded-0">
                        Update
                    </button>
                </div>
            </form>
        </div>
    </div>

    <!-- change password modal -->
    <div class="modal fade" id="changePassword" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <form @submit.prevent="passwordUpdate()" class="modal-content p-4 rounded-0 shadow-none border-0">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Change Password
                    </h1>
                    <button type="button" class="btn-close shadow-none" @click="closeChangePasswordModal()"></button>
                </div>
                <div class="modal-body border-0">
                    <div class="form-group mb-3">
                        <label for="current_password" class="form-label">Current Password</label>
                        <input id="current_password" type="password" name="current_password"
                               class="form-control p-3 shadow-none rounded-0"
                               autocomplete="off" v-model="passwordParam.current_password">
                        <div class="error-report" v-if="error != null && error.current_password !== undefined"> {{error.current_password[0]}} </div>
                    </div>
                    <div class="form-group mb-3">
                        <label for="password" class="form-label">New Password</label>
                        <input id="password" type="password" name="password"
                               class="form-control p-3 shadow-none rounded-0" autocomplete="off"
                               v-model="passwordParam.password">
                        <div class="error-report" v-if="error != null && error.password !== undefined"> {{error.password[0]}} </div>
                    </div>
                    <div class="form-group mb-3">
                        <label for="password_confirmation" class="form-label">Password Confirmation</label>
                        <input id="password_confirmation" type="password" name="password_confirmation"
                               class="form-control p-3 shadow-none rounded-0"
                               autocomplete="off" v-model="passwordParam.password_confirmation">
                        <div class="error-report" v-if="error != null && error.password_confirmation !== undefined"> {{error.password_confirmation[0]}} </div>
                    </div>
                </div>
                <div class="modal-footer border-0">
                    <button type="button" class="btn btn-secondary width-96 rounded-0" @click="closeChangePasswordModal()">
                        Close
                    </button>
                    <button type="submit" class="btn btn-theme width-96 rounded-0">
                        Update
                    </button>
                </div>
            </form>
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
            error: null,
            profileParam: {
                name: '',
                email: '',
            },
            passwordParam: {
                current_Password: '',
                password: '',
                password_confirmation: '',
            },
            profileData: null,
            profileUpdateLoading: false,
            passwordUpdateLoading: false,
        }
    },
    mounted() {
        this.profileDetails();
    },
    methods: {

        /* Function of profile details */
        profileDetails() {
            serviceApi.ClearErrorHandler();
            axios.get(routeApi.adminDetails, this.profileData, { headers: serviceApi.headerContent }).then((response) => {
                if (response.data) {
                    this.profileData = response?.data?.data
                    this.profileParam = JSON.parse(JSON.stringify(response?.data?.data));
                }
            }).catch(err => {
                let res = err?.response;
                if (res?.data?.errors !== undefined) {
                    this.error = res?.data?.errors;
                } else {
                    toaster.error('Service error!');
                }
            });
        },

        /* --- --- --- open edit profile model --- --- --- */
        openEditProfileModal() {
            const myModal = new bootstrap.Modal("#editProfile", {keyboard: false});
            myModal.show();
        },

        /* --- --- --- close edit profile modal --- --- --- */
        closeEditProfileModal() {
            let myModalEl = document.getElementById('editProfile');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

        /* --- --- --- open change password model --- --- --- */
        openChangePasswordModal() {
            const myModal = new bootstrap.Modal("#changePassword", {keyboard: false});
            myModal.show();
        },

        /* --- --- --- close change password modal --- --- --- */
        closeChangePasswordModal() {
            let myModalEl = document.getElementById('changePassword');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

        /* Function to profile update api */
        profileUpdate() {
            this.profileUpdateLoading = true;
            axios.patch(routeApi.adminDetailsUpdate, this.profileParam, {headers: serviceApi.headerContent}).then((response) => {
                if(response) {
                    this.profileUpdateLoading = false;
                    this.profileParam = this.profileData;
                    this.closeEditProfileModal();
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
            axios.patch(routeApi.adminPasswordUpdate, this.passwordParam, {headers: serviceApi.headerContent}).then((response) => {
                if(response) {
                    this.passwordUpdateLoading = false;
                    this.passwordParam = null;
                    this.closeChangePasswordModal();
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
