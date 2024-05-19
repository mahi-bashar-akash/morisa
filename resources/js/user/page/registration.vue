<template>

    <!-- breadcrumb -->
    <section class="w-100 py-5">
        <div class="container">
            <div class="position-relative">
                <img :src="`/images/breadcrumb.webp`" class="img-fluid object-fit-cover height-320 w-100" alt="breadcrumb">
                <div class="position-absolute start-0 top-0 w-100 h-100 text-center d-flex justify-content-center align-items-center flex-column">
                    <div class="fs-1">Registration</div>
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

    <!-- login -->
    <div class="py-5">
        <div class="container">
            <div class="row justify-content-center p-3">

                <form class="authentication p-5 border">
                    <div class="form-group mb-3">
                        <label for="first-name" class="form-label"> First Name </label>
                        <input type="text" name="first-name" id="first-name" class="form-control border shadow-none p-3" placeholder="First Name (Required)" required autocomplete="new-first-name">
                    </div>
                    <div class="form-group mb-3">
                        <label for="last-name" class="form-label"> Last Name </label>
                        <input type="text" name="last-name" id="last-name" class="form-control border shadow-none p-3" placeholder="Last Name" autocomplete="new-last-name">
                    </div>
                    <div class="form-group mb-3">
                        <label for="email" class="form-label"> Email or Username </label>
                        <input type="email" name="email" id="email" class="form-control border shadow-none p-3" placeholder="Username or Email (Required)" required autocomplete="new-email">
                    </div>
                    <div class="form-group mb-3">
                        <label for="phone-number" class="form-label"> Phone number </label>
                        <input type="text" name="phone-number" id="phone-number" class="form-control border shadow-none p-3" placeholder="Phone Number (Required)" required autocomplete="new-phone-number">
                    </div>
                    <div class="form-group mb-3">
                        <label for="new-password" class="form-label"> New password </label>
                        <input type="password" name="new-password" id="new-password" class="form-control border shadow-none p-3" placeholder="New Password (Required)" required autocomplete="new-password">
                    </div>
                    <div class="form-group mb-3">
                        <label for="confirm-password" class="form-label"> Confirm password </label>
                        <input type="password" name="confirm-password" id="confirm-password" class="form-control border shadow-none p-3" placeholder="Confirm Password (Required)" required autocomplete="new-confirm-password">
                    </div>
                    <div class="form-group mb-3">
                        <label for="present-address" class="form-label"> Present Address </label>
                        <input type="text" name="present-address" id="present-address" class="form-control border shadow-none p-3" placeholder="Present Address" autocomplete="new-present-address">
                    </div>
                    <div class="form-group mb-3">
                        <label for="remember-me" class="form-check-label">
                            <input type="checkbox" name="remember-me" id="remember-me" class="form-checkbox me-2">
                            I agree <a href="javascript:void(0)" class="text-decoration-none text-theme"> Terms & Condition </a>
                        </label>
                    </div>
                    <div class="col">
                        <button type="submit" class="btn btn-outline-theme py-3 width-120 d-flex justify-content-center rounded-0">
                            Registration
                        </button>
                    </div>
                </form>

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
