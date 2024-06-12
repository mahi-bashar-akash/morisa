<template>

    <div class="w-100 shadow bg-white p-4 p-sm-5 fw-medium">
        <div class="text-center">
            <div class="mb-4">
                <img :src="`/images/logo.webp`" class="width-100" alt="logo">
            </div>
            <div class="mb-4 fs-5 fw-bold"> Let's get you signed in</div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6 mb-3">
                <button type="button" class="btn bg-light py-3 border-secondary-subtle w-100 border rounded-0">
                    <i class="bi bi-facebook text-primary"></i>
                    <span class="ms-2"> Sign in with facebook </span>
                </button>
            </div>
            <div class="col-12 col-md-6 mb-3">
                <button type="button" class="btn bg-light py-3 border-secondary-subtle w-100 border rounded-0">
                    <i class="bi bi-google text-danger"></i>
                    <span class="ms-2"> Sign in with google </span>
                </button>
            </div>
        </div>
        <div class="d-flex justify-content-center align-items-center my-2">
            Or sign in with email
        </div>
        <div class="form-group mb-3">
            <label for="email" class="form-label">Email</label>
            <input id="email" type="email" name="email" class="form-control px-3 height-45 border shadow-none rounded-0" required
                   autocomplete="new-email" placeholder="Enter your email">
        </div>
        <div class="form-group mb-3">
            <label for="password" class="form-label">Password</label>
            <input id="password" type="password" name="password" class="form-control px-3 height-45 border shadow-none rounded-0"
                   required autocomplete="new-password" placeholder="Enter your password">
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
        <button type="submit" class="btn btn-outline-theme width-120 height-45 rounded-0">
            Login
        </button>
    </div>

</template>

<script>

export default {
    data() {
        return {}
    },
    mounted() {

    },
    methods: {}
}

</script>
