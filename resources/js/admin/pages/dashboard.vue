<template>

    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">

        <!-- Sliders -->
        <div class="mb-3">
            <router-link :to="{name: 'sliders'}" class="w-100 shadow bg-white p-5 text-center d-block text-decoration-none">
                <div class="pb-3 text-light-gray fs-5">
                    Sliders
                </div>
                <div class="pb-3 text-theme">
                    <i class="bi bi-sliders fw-bold fs-4"></i>
                </div>
                <div class="text-light-gray fs-5">
                    {{ formData.slider_count }}
                </div>
            </router-link>
        </div>

        <!-- Boxes -->
        <div class="mb-3">
            <router-link :to="{name: 'boxes'}" class="w-100 shadow bg-white p-5 text-center d-block text-decoration-none">
                <div class="pb-3 text-light-gray fs-5">
                    Boxes
                </div>
                <div class="pb-3 text-theme">
                    <i class="bi bi-boxes fw-bold fs-4"></i>
                </div>
                <div class="text-light-gray fs-5">
                    {{ formData.box_count }}
                </div>
            </router-link>
        </div>

        <!-- Categories -->
        <div class="mb-3">
            <router-link :to="{name: 'attribute'}" class="w-100 shadow bg-white p-5 text-center d-block text-decoration-none">
                <div class="pb-3 text-light-gray fs-5">
                    Attributes
                </div>
                <div class="pb-3 text-theme">
                    <i class="bi bi-link-45deg fw-bold fs-4"></i>
                </div>
                <div class="text-light-gray fs-5">
                    {{ formData.attribute_count }}
                </div>
            </router-link>
        </div>

        <!-- Blogs -->
        <div class="mb-3">
            <router-link :to="{name: 'blogs'}" class="w-100 shadow bg-white p-5 text-center d-block text-decoration-none">
                <div class="pb-3 text-light-gray fs-5">
                    Blogs
                </div>
                <div class="pb-3 text-theme">
                    <i class="bi bi-card-text fw-bold fs-4"></i>
                </div>
                <div class="text-light-gray fs-5">
                    {{ formData.blog_count }}
                </div>
            </router-link>
        </div>

        <!-- Products -->
        <div class="mb-3">
            <router-link :to="{name: 'products'}" class="w-100 shadow bg-white p-5 text-center d-block text-decoration-none">
                <div class="pb-3 text-light-gray fs-5">
                    Products
                </div>
                <div class="pb-3 text-theme">
                    <i class="bi bi-bag fw-bold fs-4"></i>
                </div>
                <div class="text-light-gray fs-5">
                    {{ formData.product_count }}
                </div>
            </router-link>
        </div>

        <!-- Customers -->
        <div class="mb-3">
            <router-link :to="{name: 'customers'}" class="w-100 shadow bg-white p-5 text-center d-block text-decoration-none">
                <div class="pb-3 text-light-gray fs-5">
                    Customers
                </div>
                <div class="pb-3 text-theme">
                    <i class="bi bi-people fw-bold fs-4"></i>
                </div>
                <div class="text-light-gray fs-5">
                    {{ formData.customer_count }}
                </div>
            </router-link>
        </div>

        <!-- Orders -->
        <div class="mb-3">
            <router-link :to="{name: 'orders'}" class="w-100 shadow bg-white p-5 text-center d-block text-decoration-none">
                <div class="pb-3 text-light-gray fs-5">
                    Orders
                </div>
                <div class="pb-3 text-theme">
                    <i class="bi bi-cart fw-bold fs-4"></i>
                </div>
                <div class="text-light-gray fs-5">
                    {{ formData.order_count }}
                </div>
            </router-link>
        </div>

    </div>

</template>

<script>

export default {
    data() {
        return {
            formData: {
                slider_count: '1,00,000',
                box_count: '1,00,000',
                attribute_count: '1,00,000',
                blog_count: '1,00,000',
                product_count: '1,00,000',
                customer_count: '1,00,000',
                order_count: '1,00,000',
            }
        }
    },
    mounted() {

    },
    methods: {}
}

</script>
