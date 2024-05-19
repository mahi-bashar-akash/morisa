<template>
    <div class="container">
        <hr class="border">
    </div>
    <footer class="w-100 bg-white footer">
        <div class="container">
            <div class="p-4">
                <div class="text-center text-secondary fw-medium">
                    Special Offers For Subscribers
                </div>
                <div class="fs-1 text-center fw-medium mb-3">
                    Ten Percent Member Discount
                </div>
                <div class="text-center text-secondary fw-medium mb-3 small text-opacity-75">
                    Subscribe to our newsletters now and stay up to date with new collections, the latest lookbooks and exclusive offers.
                </div>
                <form class="row justify-content-center py-4">
                    <div class="col-lg-6 d-flex justify-content-between">
                        <input type="text" name="subscribe" placeholder="Enter your email address here..." class="form-control rounded-0 shadow-none border p-3 ps-4" required autocomplete="new-subscribe">
                        <button type="submit" class="btn bg-light border rounded-0 border-start-0 py-3 px-5">
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </footer>
    <footer class="w-100 bg-light px-4 py-5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-xl-5 mb-4">
                    <div class="mb-3">
                        <img :src="'/images/logo.webp'" class="img-fluid" alt="logo">
                    </div>
                    <div class="text-light-gray">
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.
                    </div>
                </div>
                <div class="col-12 col-xl-7 mb-4">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
                        <div>
                            <div class="fw-bold fs-4 mb-3"> Opening Time </div>
                            <div class="text-light-gray mb-3"> Mon - Fri: 8AM - 10PM </div>
                            <div class="text-light-gray mb-3"> Sat: 9AM-8PM </div>
                            <div class="text-light-gray mb-3"> Sun: Closed </div>
                        </div>
                        <div>
                            <div class="fw-bold fs-4 mb-3"> Information </div>
                            <a href="javascript:void(0)" class="nav-link mb-3"> About Us </a>
                            <a href="javascript:void(0)" class="nav-link mb-3"> Delivery Information </a>
                            <a href="javascript:void(0)" class="nav-link mb-3"> Privacy Policy </a>
                            <a href="javascript:void(0)" class="nav-link mb-3"> Terms & Conditions </a>
                            <a href="javascript:void(0)" class="nav-link mb-3"> Information link </a>
                        </div>
                        <div>
                            <div class="fw-bold fs-4 mb-3"> Customer Service </div>
                            <a href="javascript:void(0)" class="nav-link mb-3"> Contact Us </a>
                            <a href="javascript:void(0)" class="nav-link mb-3"> Returns </a>
                            <a href="javascript:void(0)" class="nav-link mb-3"> Site Map </a>
                            <a href="javascript:void(0)" class="nav-link mb-3"> Specials </a>
                            <a href="javascript:void(0)" class="nav-link mb-3"> Brands </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <footer class="w-100 bg-white p-4">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <img :src="`/images/logo.webp`" class="img-fluid" alt="">
                </div>
                <div class="col-md-4 text-center">
                    © 2022 Mimosa Made with
                    <i class="bi bi-heart-fill text-theme"></i>
                    by
                    <a href="javascript:void(0)" class="text-theme text-decoration-none">
                        HasThemes
                    </a>
                </div>
                <div class="col-md-4 d-flex justify-content-end align-items-center">
                    <a href="javascript:void(0)" class="text-decoration-none text-light-gray-hover mx-2">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a href="javascript:void(0)" class="text-decoration-none text-light-gray-hover mx-2">
                        <i class="bi bi-twitter"></i>
                    </a>
                    <a href="javascript:void(0)" class="text-decoration-none text-light-gray-hover mx-2">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="javascript:void(0)" class="text-decoration-none text-light-gray-hover mx-2">
                        <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="javascript:void(0)" class="text-decoration-none text-light-gray-hover mx-2">
                        <i class="bi bi-github"></i>
                    </a>
                    <a href="javascript:void(0)" class="text-decoration-none text-light-gray-hover mx-2">
                        <i class="bi bi-google"></i>
                    </a>
                    <a href="javascript:void(0)" class="text-decoration-none text-light-gray-hover mx-2">
                        <i class="bi bi-gitlab"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

export default {
    data(){
        return{}
    },
    mounted() {

    },
    methods: {

    }
}

</script>
