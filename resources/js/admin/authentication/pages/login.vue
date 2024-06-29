<template>

    <form class="w-100 shadow bg-white p-4 p-sm-5 fw-medium">
        <div class="text-center">
            <div class="mb-4">
                <img :src="`/images/logo.webp`" class="width-100" alt="logo">
            </div>
            <div class="mb-4 fs-5 fw-medium text-secondary"> Access to our dashboard </div>
        </div>
        <div class="form-group mb-3">
            <label for="email" class="form-label">Email</label>
            <input id="email" type="email" name="email" class="form-control px-3 height-45 border shadow-none rounded-0" required
                   autocomplete="off" v-model="loginParam.email">
        </div>
        <div class="form-group mb-3">
            <label for="password" class="form-label">Password</label>
            <input id="password" type="password" name="password" class="form-control px-3 height-45 border shadow-none rounded-0"
                   required autocomplete="off" v-model="loginParam.password">
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
        <button type="submit" class="btn btn-theme width-140 height-45 rounded-0">
            Login
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

export default {
    data() {
        return {

            loginParam: {
                email: '',
                password: '',
            }

        }
    },
    mounted() {

    },
    methods: {

    }
}

</script>
