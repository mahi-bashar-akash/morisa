<template>

    <form class="w-100 shadow bg-white p-4 p-sm-5 fw-medium">
        <div class="text-center">
            <div class="mb-4">
                <img :src="`/images/logo.webp`" class="width-100" alt="logo">
            </div>
            <div class="mb-4 fs-5 fw-medium text-secondary"> Create new account </div>
        </div>
        <div class="form-group mb-3">
            <label for="name" class="form-label">Full Name</label>
            <input id="name" type="text" name="name" class="form-control px-3 height-45 border shadow-none rounded-0" required
                   autocomplete="off" v-model="registrationParam.name">
        </div>
        <div class="form-group mb-3">
            <label for="email" class="form-label">Email</label>
            <input id="email" type="email" name="email" class="form-control px-3 height-45 border shadow-none rounded-0" required
                   autocomplete="off" v-model="registrationParam.email">
        </div>
        <div class="form-group mb-3">
            <label for="password" class="form-label">Password</label>
            <input id="password" type="password" name="password" class="form-control px-3 height-45 border shadow-none rounded-0"
                   required autocomplete="off" v-model="registrationParam.password">
        </div>
        <div class="form-group mb-3">
            <label for="password_confirmation" class="form-label">Password Confirmation</label>
            <input id="password_confirmation" type="password" name="password_confirmation" class="form-control px-3 height-45 border shadow-none rounded-0"
                   required autocomplete="off" v-model="registrationParam.password_confirmation">
        </div>
        <div class="mb-3">
            <button type="submit" class="btn btn-theme width-140 height-45 rounded-0">
                Registration
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

export default {
    data() {
        return {

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

    }
}

</script>
