<template>

    <div class="row">

        <!-- Sliders -->
        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3">
            <router-link :to="{name: 'sliders'}" class="w-100 shadow bg-white p-5 text-center d-block text-decoration-none">
                <div class="pb-3 text-light-gray fs-5">
                    Sliders
                </div>
                <div class="pb-3 text-theme">
                    <i class="bi bi-sliders fw-bold fs-4"></i>
                </div>
                <div class="text-light-gray fs-5">
                    1,00,000
                </div>
            </router-link>
        </div>

        <!-- Boxes -->
        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3">
            <router-link :to="{name: 'boxes'}" class="w-100 shadow bg-white p-5 text-center d-block text-decoration-none">
                <div class="pb-3 text-light-gray fs-5">
                    Boxes
                </div>
                <div class="pb-3 text-theme">
                    <i class="bi bi-boxes fw-bold fs-4"></i>
                </div>
                <div class="text-light-gray fs-5">
                    1,00,000
                </div>
            </router-link>
        </div>

        <!-- Categories -->
        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3">
            <router-link :to="{name: 'attribute'}" class="w-100 shadow bg-white p-5 text-center d-block text-decoration-none">
                <div class="pb-3 text-light-gray fs-5">
                    Attributes
                </div>
                <div class="pb-3 text-theme">
                    <i class="bi bi-link-45deg fw-bold fs-4"></i>
                </div>
                <div class="text-light-gray fs-5">
                    1,00,000
                </div>
            </router-link>
        </div>

        <!-- Blogs -->
        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3">
            <router-link :to="{name: 'blogs'}" class="w-100 shadow bg-white p-5 text-center d-block text-decoration-none">
                <div class="pb-3 text-light-gray fs-5">
                    Blogs
                </div>
                <div class="pb-3 text-theme">
                    <i class="bi bi-card-text fw-bold fs-4"></i>
                </div>
                <div class="text-light-gray fs-5">
                    1,00,000
                </div>
            </router-link>
        </div>

        <!-- Products -->
        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3">
            <router-link :to="{name: 'products'}" class="w-100 shadow bg-white p-5 text-center d-block text-decoration-none">
                <div class="pb-3 text-light-gray fs-5">
                    Products
                </div>
                <div class="pb-3 text-theme">
                    <i class="bi bi-bag fw-bold fs-4"></i>
                </div>
                <div class="text-light-gray fs-5">
                    1,00,000
                </div>
            </router-link>
        </div>

        <!-- Customers -->
        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3">
            <router-link :to="{name: 'customers'}" class="w-100 shadow bg-white p-5 text-center d-block text-decoration-none">
                <div class="pb-3 text-light-gray fs-5">
                    Customers
                </div>
                <div class="pb-3 text-theme">
                    <i class="bi bi-people fw-bold fs-4"></i>
                </div>
                <div class="text-light-gray fs-5">
                    1,00,000
                </div>
            </router-link>
        </div>

        <!-- Orders -->
        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3">
            <router-link :to="{name: 'orders'}" class="w-100 shadow bg-white p-5 text-center d-block text-decoration-none">
                <div class="pb-3 text-light-gray fs-5">
                    Orders
                </div>
                <div class="pb-3 text-theme">
                    <i class="bi bi-cart fw-bold fs-4"></i>
                </div>
                <div class="text-light-gray fs-5">
                    1,00,000
                </div>
            </router-link>
        </div>

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
