<template>

    <!-- breadcrumb -->
    <section class="w-100 py-5">
        <div class="container">
            <div class="position-relative">
                <img :src="`/images/breadcrumb.webp`" class="img-fluid object-fit-cover height-320 w-100" alt="breadcrumb">
                <div class="position-absolute start-0 top-0 w-100 h-100 text-center d-flex justify-content-center align-items-center flex-column">
                    <div class="fs-1">Login</div>
                    <div class="d-flex justify-content-center align-items-center">
                        <router-link :to="{name: 'home'}" class="text-decoration-none text-secondary">
                            Home
                        </router-link>
                        <div class="mx-3"> -</div>
                        <router-link :to="{name: 'login'}" class="text-decoration-none text-theme">
                            Login
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- login -->
    <div class="py-5">
        <div class="container">
            <div class="row justify-content-center p-3">

                <div class="authentication p-5 border">
                    <div class="form-group mb-3">
                        <label for="email" class="form-label">Email or Username</label>
                        <input type="email" name="email" id="email" class="form-control border shadow-none p-3" required autocomplete="new-email">
                    </div>
                    <div class="form-group mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" name="password" id="password" class="form-control border shadow-none p-3" required autocomplete="new-password">
                    </div>
                    <div class="form-group mb-3">
                        <label for="remember-me" class="form-check-label">
                            <input type="checkbox" name="remember-me" id="remember-me" class="form-checkbox me-2">
                            Remember me
                        </label>
                    </div>
                    <div class="col mb-3">
                        <button type="submit" class="btn btn-outline-theme py-3 width-96">
                            Login
                        </button>
                    </div>
                    <div class="col">
                        <a href="javascript:void(0)" class="text-decoration-none text-theme">
                            Lost your password?
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>

export default {
    data(){
        return{  }
    },
    mounted() {
    },
    methods: {  }
}

</script>
