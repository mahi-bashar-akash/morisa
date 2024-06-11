<template>

    <div class="w-100 shadow bg-white rounded-4 p-4 p-sm-5 fw-medium" v-if="tab === 'forget'">
        <div class="mb-4 text-center">
            <img :src="`/images/logo.webp`" class="width-100" alt="logo">
        </div>
        <div class="mb-4 text-secondary">
            Please enter the email address associated with your
            account and We will email you a link to reset your password.
        </div>
        <div class="form-group mb-3">
            <label for="email" class="form-label">Email Address</label>
            <input id="email" type="email" name="email" class="form-control px-3 height-45 border shadow-none" required
                   autocomplete="new-email" placeholder="Enter your email">
        </div>
        <div class="mb-3">
            <button type="submit" class="btn btn-outline-theme width-170 height-45" @click="tab = 'reset'">
                Forget Password
            </button>
        </div>
        <router-link :to="{name: 'login'}" class="text-decoration-none text-light-gray-hover">
            Back to login
        </router-link>
    </div>

    <div class="w-100 shadow bg-white rounded-4 p-4 p-sm-5 fw-medium" v-if="tab === 'reset'">
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
            <input id="email" type="email" name="email" class="form-control px-3 height-45 border shadow-none" required
                   autocomplete="new-email" placeholder="Enter your email">
        </div>
        <div class="form-group mb-3">
            <label for="code" class="form-label">Code</label>
            <input id="code" type="text" name="code" class="form-control px-3 height-45 border shadow-none" required
                   autocomplete="new-code" placeholder="Enter your code">
            <div class="small text-secondary text-opacity-50"> Please code collect from your email</div>
        </div>
        <div class="form-group mb-3">
            <label for="password" class="form-label">Password</label>
            <input id="password" type="password" name="password" class="form-control px-3 height-45 border shadow-none"
                   required autocomplete="new-password" placeholder="Enter your new password">
        </div>
        <div class="form-group mb-3">
            <label for="confirm-password" class="form-label">Confirm Password</label>
            <input id="confirm-password" type="password" name="confirm-password"
                   class="form-control px-3 height-45 border shadow-none" required autocomplete="new-confirm-password" placeholder="Enter your new confirm password">
        </div>
        <div class="mb-3">
            <button type="submit" class="btn btn-outline-theme width-120 height-45">
                Reset
            </button>
        </div>
        <router-link :to="{name: 'login'}" class="text-decoration-none text-light-gray-hover">
            Back to login
        </router-link>
    </div>

</template>

<script>

export default {
    data() {
        return {
            tab: 'forget'
        }
    },
    mounted() {

    },
    methods: {}
}

</script>
