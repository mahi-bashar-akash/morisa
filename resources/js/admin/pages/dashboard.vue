<template>

    <!-- breadcrumb -->
    <div class="d-sm-flex justify-content-between align-items-center">
        <breadcrumb moduleName="Dashboard"/>
    </div>

    <div class="px-1 row">
        <div class="col-xl-8">
            <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2">
                <div class="p-2">

                    <!-- slider --- count -->
                    <router-link :to="{name: 'slider'}" class="bg-white p-3 shadow rounded-3 d-block text-decoration-none text-theme">
                        <div class="d-flex justify-content-start align-items-center">
                            <div class="width-65 height-65 shadow-sm rounded-2 d-flex justify-content-center align-items-center bg-secondary-subtle">
                                <i class="bi bi-sliders fs-5"></i>
                            </div>
                            <div class="fw-medium ps-4">
                                <div class="mb-1">
                                    Sliders
                                </div>
                                <div class="text-light-gray">
                                    Count: 1,00,000
                                </div>
                            </div>
                        </div>
                    </router-link>

                </div>
                <div class="p-2">

                    <!-- box --- count -->
                    <router-link :to="{name: 'box'}" class="bg-white p-3 shadow rounded-3 d-block text-decoration-none text-theme">
                        <div class="d-flex justify-content-start align-items-center">
                            <div class="width-65 height-65 shadow-sm rounded-2 d-flex justify-content-center align-items-center bg-secondary-subtle">
                                <i class="bi bi-boxes fs-5"></i>
                            </div>
                            <div class="fw-medium ps-4">
                                <div class="mb-1">
                                    Boxes
                                </div>
                                <div class="text-light-gray">
                                    Count: 1,00,000
                                </div>
                            </div>
                        </div>
                    </router-link>

                </div>
                <div class="p-2">

                    <!-- hierarchy --- count -->
                    <router-link :to="{name: 'hierarchy'}" class="bg-white p-3 shadow rounded-3 d-block text-decoration-none text-theme">
                        <div class="d-flex justify-content-start align-items-center">
                            <div class="width-65 height-65 shadow-sm rounded-2 d-flex justify-content-center align-items-center bg-secondary-subtle">
                                <i class="bi bi-link-45deg fs-5"></i>
                            </div>
                            <div class="fw-medium ps-4">
                                <div class="mb-1">
                                    Hierarchy
                                </div>
                                <div class="text-light-gray">
                                    Count: 1,00,000
                                </div>
                            </div>
                        </div>
                    </router-link>

                </div>
                <div class="p-2">

                    <!-- product --- count -->
                    <router-link :to="{name: 'product'}" class="bg-white p-3 shadow rounded-3 d-block text-decoration-none text-theme">
                        <div class="d-flex justify-content-start align-items-center">
                            <div class="width-65 height-65 shadow-sm rounded-2 d-flex justify-content-center align-items-center bg-secondary-subtle">
                                <i class="bi bi-bag fs-5"></i>
                            </div>
                            <div class="fw-medium ps-4">
                                <div class="mb-1">
                                    Products
                                </div>
                                <div class="text-light-gray">
                                    Count: 1,00,000
                                </div>
                            </div>
                        </div>
                    </router-link>

                </div>
                <div class="p-2">

                    <!-- customer --- count -->
                    <router-link :to="{name: 'customer'}" class="bg-white p-3 shadow rounded-3 d-block text-decoration-none text-theme">
                        <div class="d-flex justify-content-start align-items-center">
                            <div class="width-65 height-65 shadow-sm rounded-2 d-flex justify-content-center align-items-center bg-secondary-subtle">
                                <i class="bi bi-person-hearts fs-5"></i>
                            </div>
                            <div class="fw-medium ps-4">
                                <div class="mb-1">
                                    Customers
                                </div>
                                <div class="text-light-gray">
                                    Count: 1,00,000
                                </div>
                            </div>
                        </div>
                    </router-link>

                </div>
                <div class="p-2">

                    <!-- order --- count -->
                    <router-link :to="{name: 'order'}" class="bg-white p-3 shadow rounded-3 d-block text-decoration-none text-theme">
                        <div class="d-flex justify-content-start align-items-center">
                            <div class="width-65 height-65 shadow-sm rounded-2 d-flex justify-content-center align-items-center bg-secondary-subtle">
                                <i class="bi bi-bag-heart fs-5"></i>
                            </div>
                            <div class="fw-medium ps-4">
                                <div class="mb-1">
                                    Orders
                                </div>
                                <div class="text-light-gray">
                                    Count: 1,00,000
                                </div>
                            </div>
                        </div>
                    </router-link>

                </div>
                <div class="p-2">

                    <!-- blog --- count -->
                    <router-link :to="{name: 'blog'}" class="bg-white p-3 shadow rounded-3 d-block text-decoration-none text-theme">
                        <div class="d-flex justify-content-start align-items-center">
                            <div class="width-65 height-65 shadow-sm rounded-2 d-flex justify-content-center align-items-center bg-secondary-subtle">
                                <i class="bi bi-card-text fs-5"></i>
                            </div>
                            <div class="fw-medium ps-4">
                                <div class="mb-1">
                                    Blogs
                                </div>
                                <div class="text-light-gray">
                                    Count: 1,00,000
                                </div>
                            </div>
                        </div>
                    </router-link>

                </div>
            </div>
        </div>
        <div class="col-xl-4 py-2">
            <div class="bg-white p-3 shadow rounded-3">

                <!-- insert data into form -->
                <form class="row">
                    <div class="col-8">
                        <input type="text" name="list-data" class="form-control shadow-none border" required autocomplete="new-list-data" placeholder="Enter your list data">
                    </div>
                    <div class="col-4">
                        <button type="submit" class="btn btn-theme w-100">
                            Submit
                        </button>
                    </div>
                </form>

                <!-- list data -->
                <div class="height-350 w-100 d-flex justify-content-center align-items-center flex-column">
                    <div class="text-center">
                        <div class="mb-3">
                            <i class="bi bi-server text-theme fs-3"></i>
                        </div>
                        <div class="text-secondary">
                            There have no data !
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
import breadcrumb from "../components/breadcrumb.vue";

export default {
    components: {
        breadcrumb
    },
    data() {
        return {}
    },
    mounted() {

    },
    methods: {}
}

</script>
