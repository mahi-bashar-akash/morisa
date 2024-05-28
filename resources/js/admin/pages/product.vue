<template>

    <!-- breadcrumb -->
    <div class="d-sm-flex justify-content-between align-items-center">
        <breadcrumb :items="BreadcrumbItems" moduleName="Products"/>
    </div>

    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-4">

        <!-- product list -->
        <div class="p-3 background-effect">
            <a href="javascript:void(0)" class="text-decoration-none text-dark shadow bg-white d-block rounded-3">
                <div class="position-relative">
                    <div class="overflow-hidden">
                        <img :src="`/images/product/product-01.jpg`"
                             class="img-fluid object-fit-contain w-100 image-effect" alt="product ">
                    </div>
                    <div class="position-absolute top-0 end-0 p-3">
                        <div
                            class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                            Sale
                        </div>
                    </div>
                </div>
                <div class="p-3">
                    <div class="d-flex justify-content-between align-items-center py-3">
                        <div class="text-light-gray-hover">
                            Chanel
                        </div>
                        <div class="d-flex align-items-center justify-content-end">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                        </div>
                    </div>
                    <div class="py-3 fs-6 fw-bold line-height-2">
                        Dopo Designs Woolrich Klettersack Backpack
                    </div>
                    <div class="fs-4 text-secondary text-opacity-75"> $98.00</div>
                </div>
            </a>
        </div>

        <div class="p-3 background-effect">
            <a href="javascript:void(0)" class="text-decoration-none text-dark shadow bg-white d-block rounded-3">
                <div class="position-relative">
                    <div class="overflow-hidden">
                        <img :src="`/images/product/product-02.jpg`"
                             class="img-fluid object-fit-contain w-100 image-effect" alt="product ">
                    </div>
                    <div class="position-absolute top-0 end-0 p-3 invisible">
                        <div
                            class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                            Sale
                        </div>
                    </div>
                </div>
                <div class="p-3">
                    <div class="d-flex justify-content-between align-items-center py-3">
                        <div class="text-light-gray-hover">
                            Chanel
                        </div>
                        <div class="d-flex align-items-center justify-content-end">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                        </div>
                    </div>
                    <div class="py-3 fs-6 fw-bold line-height-2">
                        Dopo Designs Woolrich Klettersack Backpack
                    </div>
                    <div class="fs-4 text-secondary text-opacity-75"> $98.00</div>
                </div>
            </a>
        </div>

        <div class="p-3 background-effect">
            <a href="javascript:void(0)" class="text-decoration-none text-dark shadow bg-white d-block rounded-3">
                <div class="position-relative">
                    <div class="overflow-hidden">
                        <img :src="`/images/product/product-03.jpg`"
                             class="img-fluid object-fit-contain w-100 image-effect" alt="product ">
                    </div>
                    <div class="position-absolute top-0 end-0 p-3">
                        <div
                            class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                            Sale
                        </div>
                    </div>
                </div>
                <div class="p-3">
                    <div class="d-flex justify-content-between align-items-center py-3">
                        <div class="text-light-gray-hover">
                            Chanel
                        </div>
                        <div class="d-flex align-items-center justify-content-end">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                        </div>
                    </div>
                    <div class="py-3 fs-6 fw-bold line-height-2">
                        Dopo Designs Woolrich Klettersack Backpack
                    </div>
                    <div class="fs-4 text-secondary text-opacity-75"> $98.00</div>
                </div>
            </a>
        </div>

        <div class="p-3 background-effect">
            <a href="javascript:void(0)" class="text-decoration-none text-dark shadow bg-white d-block rounded-3">
                <div class="position-relative">
                    <div class="overflow-hidden">
                        <img :src="`/images/product/product-04.jpg`"
                             class="img-fluid object-fit-contain w-100 image-effect" alt="product ">
                    </div>
                    <div class="position-absolute top-0 end-0 p-3 invisible">
                        <div
                            class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                            Sale
                        </div>
                    </div>
                </div>
                <div class="p-3">
                    <div class="d-flex justify-content-between align-items-center py-3">
                        <div class="text-light-gray-hover">
                            Chanel
                        </div>
                        <div class="d-flex align-items-center justify-content-end">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                        </div>
                    </div>
                    <div class="py-3 fs-6 fw-bold line-height-2">
                        Dopo Designs Woolrich Klettersack Backpack
                    </div>
                    <div class="fs-4 text-secondary text-opacity-75"> $98.00</div>
                </div>
            </a>
        </div>

        <div class="p-3 background-effect">
            <a href="javascript:void(0)" class="text-decoration-none text-dark shadow bg-white d-block rounded-3">
                <div class="position-relative">
                    <div class="overflow-hidden">
                        <img :src="`/images/product/product-05.jpg`"
                             class="img-fluid object-fit-contain w-100 image-effect" alt="product ">
                    </div>
                    <div class="position-absolute top-0 end-0 p-3">
                        <div
                            class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                            Sale
                        </div>
                    </div>
                </div>
                <div class="p-3">
                    <div class="d-flex justify-content-between align-items-center py-3">
                        <div class="text-light-gray-hover">
                            Chanel
                        </div>
                        <div class="d-flex align-items-center justify-content-end">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                        </div>
                    </div>
                    <div class="py-3 fs-6 fw-bold line-height-2">
                        Dopo Designs Woolrich Klettersack Backpack
                    </div>
                    <div class="fs-4 text-secondary text-opacity-75"> $98.00</div>
                </div>
            </a>
        </div>

        <div class="p-3 background-effect">
            <a href="javascript:void(0)" class="text-decoration-none text-dark shadow bg-white d-block rounded-3">
                <div class="position-relative">
                    <div class="overflow-hidden">
                        <img :src="`/images/product/product-06.jpg`"
                             class="img-fluid object-fit-contain w-100 image-effect" alt="product ">
                    </div>
                    <div class="position-absolute top-0 end-0 p-3 invisible">
                        <div
                            class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                            Sale
                        </div>
                    </div>
                </div>
                <div class="p-3">
                    <div class="d-flex justify-content-between align-items-center py-3">
                        <div class="text-light-gray-hover">
                            Chanel
                        </div>
                        <div class="d-flex align-items-center justify-content-end">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                        </div>
                    </div>
                    <div class="py-3 fs-6 fw-bold line-height-2">
                        Dopo Designs Woolrich Klettersack Backpack
                    </div>
                    <div class="fs-4 text-secondary text-opacity-75"> $98.00</div>
                </div>
            </a>
        </div>

        <div class="p-3 background-effect">
            <a href="javascript:void(0)" class="text-decoration-none text-dark shadow bg-white d-block rounded-3">
                <div class="position-relative">
                    <div class="overflow-hidden">
                        <img :src="`/images/product/product-07.jpg`"
                             class="img-fluid object-fit-contain w-100 image-effect" alt="product ">
                    </div>
                    <div class="position-absolute top-0 end-0 p-3">
                        <div
                            class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                            Sale
                        </div>
                    </div>
                </div>
                <div class="p-3">
                    <div class="d-flex justify-content-between align-items-center py-3">
                        <div class="text-light-gray-hover">
                            Chanel
                        </div>
                        <div class="d-flex align-items-center justify-content-end">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                        </div>
                    </div>
                    <div class="py-3 fs-6 fw-bold line-height-2">
                        Dopo Designs Woolrich Klettersack Backpack
                    </div>
                    <div class="fs-4 text-secondary text-opacity-75"> $98.00</div>
                </div>
            </a>
        </div>

        <div class="p-3 background-effect">
            <a href="javascript:void(0)" class="text-decoration-none text-dark shadow bg-white d-block rounded-3">
                <div class="position-relative">
                    <div class="overflow-hidden">
                        <img :src="`/images/product/product-08.jpg`"
                             class="img-fluid object-fit-contain w-100 image-effect" alt="product ">
                    </div>
                    <div class="position-absolute top-0 end-0 p-3 invisible">
                        <div
                            class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                            Sale
                        </div>
                    </div>
                </div>
                <div class="p-3">
                    <div class="d-flex justify-content-between align-items-center py-3">
                        <div class="text-light-gray-hover">
                            Chanel
                        </div>
                        <div class="d-flex align-items-center justify-content-end">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                        </div>
                    </div>
                    <div class="py-3 fs-6 fw-bold line-height-2">
                        Dopo Designs Woolrich Klettersack Backpack
                    </div>
                    <div class="fs-4 text-secondary text-opacity-75"> $98.00</div>
                </div>
            </a>
        </div>

        <div class="p-3 background-effect">
            <a href="javascript:void(0)" class="text-decoration-none text-dark shadow bg-white d-block rounded-3">
                <div class="position-relative">
                    <div class="overflow-hidden">
                        <img :src="`/images/product/product-09.jpg`"
                             class="img-fluid object-fit-contain w-100 image-effect" alt="product ">
                    </div>
                    <div class="position-absolute top-0 end-0 p-3">
                        <div
                            class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                            Sale
                        </div>
                    </div>
                </div>
                <div class="p-3">
                    <div class="d-flex justify-content-between align-items-center py-3">
                        <div class="text-light-gray-hover">
                            Chanel
                        </div>
                        <div class="d-flex align-items-center justify-content-end">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                        </div>
                    </div>
                    <div class="py-3 fs-6 fw-bold line-height-2">
                        Dopo Designs Woolrich Klettersack Backpack
                    </div>
                    <div class="fs-4 text-secondary text-opacity-75"> $98.00</div>
                </div>
            </a>
        </div>

        <div class="p-3 background-effect">
            <a href="javascript:void(0)" class="text-decoration-none text-dark shadow bg-white d-block rounded-3">
                <div class="position-relative">
                    <div class="overflow-hidden">
                        <img :src="`/images/product/product-10.jpg`"
                             class="img-fluid object-fit-contain w-100 image-effect" alt="product ">
                    </div>
                    <div class="position-absolute top-0 end-0 p-3 invisible">
                        <div
                            class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                            Sale
                        </div>
                    </div>
                </div>
                <div class="p-3">
                    <div class="d-flex justify-content-between align-items-center py-3">
                        <div class="text-light-gray-hover">
                            Chanel
                        </div>
                        <div class="d-flex align-items-center justify-content-end">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                        </div>
                    </div>
                    <div class="py-3 fs-6 fw-bold line-height-2">
                        Dopo Designs Woolrich Klettersack Backpack
                    </div>
                    <div class="fs-4 text-secondary text-opacity-75"> $98.00</div>
                </div>
            </a>
        </div>

        <div class="p-3 background-effect">
            <a href="javascript:void(0)" class="text-decoration-none text-dark shadow bg-white d-block rounded-3">
                <div class="position-relative">
                    <div class="overflow-hidden">
                        <img :src="`/images/product/product-11.jpg`"
                             class="img-fluid object-fit-contain w-100 image-effect" alt="product ">
                    </div>
                    <div class="position-absolute top-0 end-0 p-3">
                        <div
                            class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                            Sale
                        </div>
                    </div>
                </div>
                <div class="p-3">
                    <div class="d-flex justify-content-between align-items-center py-3">
                        <div class="text-light-gray-hover">
                            Chanel
                        </div>
                        <div class="d-flex align-items-center justify-content-end">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                        </div>
                    </div>
                    <div class="py-3 fs-6 fw-bold line-height-2">
                        Dopo Designs Woolrich Klettersack Backpack
                    </div>
                    <div class="fs-4 text-secondary text-opacity-75"> $98.00</div>
                </div>
            </a>
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
        return {
            BreadcrumbItems: [
                {title: 'Dashboard', route: 'dashboard'},
                {title: 'Products', route: 'product'},
            ],
        }
    },
    mounted() {

    },
    methods: {}
}

</script>
