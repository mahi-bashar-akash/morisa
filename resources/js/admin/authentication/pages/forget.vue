<template>

    <form class="w-100 shadow bg-white p-4 p-sm-5 fw-medium" v-if="tab === 'forget'">
        <div class="mb-4 text-center">
            <img :src="`/images/logo.webp`" class="width-100" alt="logo">
        </div>
        <div class="mb-4 text-secondary">
            Please enter the email address associated with your
            account and We will email you a link to reset your password.
        </div>
        <div class="form-group mb-3">
            <label for="email" class="form-label">Email Address</label>
            <input id="email" type="email" name="email" class="form-control px-3 height-45 border shadow-none rounded-0" required
                   autocomplete="new-email" placeholder="Enter your email" v-model="forgetData.email">
        </div>
        <div class="d-flex justify-content-between align-items-center">

            <button type="submit" class="btn btn-outline-theme width-170 height-45 rounded-0" @click="tab = 'reset'">
                Forget Password
            </button>

            <router-link :to="{name: 'login'}" class="text-decoration-none text-light-gray-hover">
                Back to login
            </router-link>

        </div>
    </form>

    <form class="w-100 shadow bg-white p-4 p-sm-5 fw-medium" v-if="tab === 'reset'">
        <div class="mb-4 text-center">
            <img :src="`/images/logo.webp`" class="width-100" alt="logo">
        </div>
        <div class="text-center fw-bold fs-4">
            Reset your password
        </div>
        <div class="mb-4 text-center text-secondary">
            Create a new password for your account
        </div>
        <div class="form-group mb-3">
            <label for="email" class="form-label">Email</label>
            <input id="email" type="email" name="email" class="form-control px-3 height-45 border shadow-none rounded-0" required
                   autocomplete="new-email" placeholder="Enter your email" v-model="resetData.email">
        </div>
        <div class="form-group mb-3">
            <label for="code" class="form-label mb-0">Code</label>
            <div class="small text-secondary mb-2 fw-normal"> Please code collect from your email</div>
            <input id="code" type="text" name="code" class="form-control px-3 height-45 border shadow-none rounded-0" required
                   autocomplete="new-code" placeholder="Enter your code" v-model="resetData.code">
        </div>
        <div class="form-group mb-3">
            <label for="password" class="form-label">Password</label>
            <input id="password" type="password" name="password" class="form-control px-3 height-45 border shadow-none rounded-0"
                   required autocomplete="new-password" placeholder="Enter your new password" v-model="resetData.password">
        </div>
        <div class="form-group mb-3">
            <label for="confirm-password" class="form-label">Confirm Password</label>
            <input id="confirm-password" type="password" name="confirm-password"
                   class="form-control px-3 height-45 border shadow-none rounded-0" required autocomplete="new-confirm-password" placeholder="Enter your new confirm password" v-model="resetData.confirmPassword">
        </div>
        <div class="d-flex justify-content-between align-items-center">

            <button type="submit" class="btn btn-outline-theme width-120 height-45 rounded-0">
                Reset
            </button>

            <router-link :to="{name: 'login'}" class="text-decoration-none text-light-gray-hover">
                Back to login
            </router-link>

        </div>
    </form>

</template>

<script>

export default {
    data() {
        return {
            tab: 'forget',

            forgetData: {
                email: '',
            },

            resetData: {
                email: '',
                code: '',
                password: '',
                confirmPassword: '',
            }

        }
    },
    mounted() {

    },
    methods: {}
}

</script>
