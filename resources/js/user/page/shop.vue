<template>

    <!-- breadcrumb -->
    <section class="w-100 py-5">
        <div class="container">
            <div class="position-relative">
                <img :src="`/images/breadcrumb.webp`" class="img-fluid object-fit-cover height-320 w-100"
                     alt="breadcrumb">
                <div
                    class="position-absolute start-0 top-0 w-100 h-100 text-center d-flex justify-content-center align-items-center flex-column">
                    <div class="fs-1 mb-3">Shop</div>
                    <div class="d-flex justify-content-center align-items-center">
                        <router-link :to="{name: 'home'}" class="text-decoration-none text-secondary">
                            Home
                        </router-link>
                        <div class="mx-3"> -</div>
                        <router-link :to="{name: 'shop'}" class="text-decoration-none text-theme">
                            Shop
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- shop -->
    <div class="w-100 py-5">
        <div class="container">

            <!-- shop -->
            <div class="p-2">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">

                            <!-- product list -->
                            <div class="p-3 background-effect">
                                <router-link :to="{name: 'singleProduct'}" class="text-decoration-none text-dark">
                                    <div class="position-relative">
                                        <div class="overflow-hidden">
                                            <img :src="`/images/product/product-01.jpg`" class="img-fluid object-fit-contain w-100 image-effect" alt="product ">
                                        </div>
                                        <div class="position-absolute top-0 end-0 p-3">
                                            <div class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                                Sale
                                            </div>
                                        </div>
                                    </div>
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
                                    <div class="fs-4 text-secondary text-opacity-75"> $98.00 </div>
                                </router-link>
                            </div>

                            <div class="p-3 background-effect">
                                <router-link :to="{name: 'singleProduct'}" class="text-decoration-none text-dark">
                                    <div class="position-relative">
                                        <div class="overflow-hidden">
                                            <img :src="`/images/product/product-02.jpg`" class="img-fluid object-fit-contain w-100 image-effect" alt="product ">
                                        </div>
                                        <div class="position-absolute top-0 end-0 p-3 invisible">
                                            <div class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                                Sale
                                            </div>
                                        </div>
                                    </div>
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
                                    <div class="fs-4 text-secondary text-opacity-75"> $98.00 </div>
                                </router-link>
                            </div>

                            <div class="p-3 background-effect">
                                <router-link :to="{name: 'singleProduct'}" class="text-decoration-none text-dark">
                                    <div class="position-relative">
                                        <div class="overflow-hidden">
                                            <img :src="`/images/product/product-03.jpg`" class="img-fluid object-fit-contain w-100 image-effect" alt="product ">
                                        </div>
                                        <div class="position-absolute top-0 end-0 p-3">
                                            <div class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                                Sale
                                            </div>
                                        </div>
                                    </div>
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
                                    <div class="fs-4 text-secondary text-opacity-75"> $98.00 </div>
                                </router-link>
                            </div>

                            <div class="p-3 background-effect">
                                <router-link :to="{name: 'singleProduct'}" class="text-decoration-none text-dark">
                                    <div class="position-relative">
                                        <div class="overflow-hidden">
                                            <img :src="`/images/product/product-04.jpg`" class="img-fluid object-fit-contain w-100 image-effect" alt="product ">
                                        </div>
                                        <div class="position-absolute top-0 end-0 p-3 invisible">
                                            <div class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                                Sale
                                            </div>
                                        </div>
                                    </div>
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
                                    <div class="fs-4 text-secondary text-opacity-75"> $98.00 </div>
                                </router-link>
                            </div>

                            <div class="p-3 background-effect">
                                <router-link :to="{name: 'singleProduct'}" class="text-decoration-none text-dark">
                                    <div class="position-relative">
                                        <div class="overflow-hidden">
                                            <img :src="`/images/product/product-05.jpg`" class="img-fluid object-fit-contain w-100 image-effect" alt="product ">
                                        </div>
                                        <div class="position-absolute top-0 end-0 p-3">
                                            <div class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                                Sale
                                            </div>
                                        </div>
                                    </div>
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
                                    <div class="fs-4 text-secondary text-opacity-75"> $98.00 </div>
                                </router-link>
                            </div>

                            <div class="p-3 background-effect">
                                <router-link :to="{name: 'singleProduct'}" class="text-decoration-none text-dark">
                                    <div class="position-relative">
                                        <div class="overflow-hidden">
                                            <img :src="`/images/product/product-06.jpg`" class="img-fluid object-fit-contain w-100 image-effect" alt="product ">
                                        </div>
                                        <div class="position-absolute top-0 end-0 p-3 invisible">
                                            <div class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                                Sale
                                            </div>
                                        </div>
                                    </div>
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
                                    <div class="fs-4 text-secondary text-opacity-75"> $98.00 </div>
                                </router-link>
                            </div>

                            <div class="p-3 background-effect">
                                <router-link :to="{name: 'singleProduct'}" class="text-decoration-none text-dark">
                                    <div class="position-relative">
                                        <div class="overflow-hidden">
                                            <img :src="`/images/product/product-07.jpg`" class="img-fluid object-fit-contain w-100 image-effect" alt="product ">
                                        </div>
                                        <div class="position-absolute top-0 end-0 p-3">
                                            <div class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                                Sale
                                            </div>
                                        </div>
                                    </div>
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
                                    <div class="fs-4 text-secondary text-opacity-75"> $98.00 </div>
                                </router-link>
                            </div>

                            <div class="p-3 background-effect">
                                <router-link :to="{name: 'singleProduct'}" class="text-decoration-none text-dark">
                                    <div class="position-relative">
                                        <div class="overflow-hidden">
                                            <img :src="`/images/product/product-08.jpg`" class="img-fluid object-fit-contain w-100 image-effect" alt="product ">
                                        </div>
                                        <div class="position-absolute top-0 end-0 p-3 invisible">
                                            <div class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                                Sale
                                            </div>
                                        </div>
                                    </div>
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
                                    <div class="fs-4 text-secondary text-opacity-75"> $98.00 </div>
                                </router-link>
                            </div>

                            <div class="p-3 background-effect">
                                <router-link :to="{name: 'singleProduct'}" class="text-decoration-none text-dark">
                                    <div class="position-relative">
                                        <div class="overflow-hidden">
                                            <img :src="`/images/product/product-09.jpg`" class="img-fluid object-fit-contain w-100 image-effect" alt="product ">
                                        </div>
                                        <div class="position-absolute top-0 end-0 p-3">
                                            <div class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                                Sale
                                            </div>
                                        </div>
                                    </div>
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
                                    <div class="fs-4 text-secondary text-opacity-75"> $98.00 </div>
                                </router-link>
                            </div>

                            <div class="p-3 background-effect">
                                <router-link :to="{name: 'singleProduct'}" class="text-decoration-none text-dark">
                                    <div class="position-relative">
                                        <div class="overflow-hidden">
                                            <img :src="`/images/product/product-10.jpg`" class="img-fluid object-fit-contain w-100 image-effect" alt="product ">
                                        </div>
                                        <div class="position-absolute top-0 end-0 p-3 invisible">
                                            <div class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                                Sale
                                            </div>
                                        </div>
                                    </div>
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
                                    <div class="fs-4 text-secondary text-opacity-75"> $98.00 </div>
                                </router-link>
                            </div>

                            <div class="p-3 background-effect">
                                <router-link :to="{name: 'singleProduct'}" class="text-decoration-none text-dark">
                                    <div class="position-relative">
                                        <div class="overflow-hidden">
                                            <img :src="`/images/product/product-11.jpg`" class="img-fluid object-fit-contain w-100 image-effect" alt="product ">
                                        </div>
                                        <div class="position-absolute top-0 end-0 p-3">
                                            <div class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                                Sale
                                            </div>
                                        </div>
                                    </div>
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
                                    <div class="fs-4 text-secondary text-opacity-75"> $98.00 </div>
                                </router-link>
                            </div>

                        </div>

                        <!-- pagination -->
                        <div class="d-flex justify-content-between align-items-center border-top border-bottom my-4 py-3">
                            <div aria-label="Page navigation example" class="front-pagination">
                                <div class="pagination">
                                    <div class="page-item">
                                        <a class="page-link disabled" href="javascript:void(0)">
                                            <i class="bi bi-chevron-left"></i>
                                        </a>
                                    </div>
                                    <div class="page-item active">
                                        <a class="page-link" href="javascript:void(0)">
                                            1
                                        </a>
                                    </div>
                                    <div class="page-item">
                                        <a class="page-link" href="javascript:void(0)">
                                            2
                                        </a>
                                    </div>
                                    <div class="page-item">
                                        <a class="page-link" href="javascript:void(0)">
                                            3
                                        </a>
                                    </div>
                                    <div class="page-item">
                                        <a class="page-link" href="javascript:void(0)">
                                            <i class="bi bi-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="text-light-gray">
                                Showing 1 - 12 of 13 items
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-4 inner-shadow-search">
                        <!-- search and sidebar -->
                        <div class="px-2 py-3">
                            <div class="position-relative">
                                <div class="position-absolute top-50 start-0 translate-middle-y ps-3">
                                    <i class="bi bi-search"></i>
                                </div>
                                <input type="text" name="keyword" class="form-control border shadow-none p-3 ps-5"
                                       placeholder="Blog search here . . ." required autocomplete="new-keyword">
                            </div>
                        </div>
                        <div class="px-2 py-3">
                            <div class="row">
                                <div class="col-6">
                                    <input type="text" name="min-number" placeholder="min amount" class="form-control border shadow-none p-3">
                                </div>
                                <div class="col-6">
                                    <input type="text" name="max-number" placeholder="max amount" class="form-control border shadow-none p-3">
                                </div>
                            </div>
                        </div>
                        <div class="px-2 py-3">
                            <div class="fs-4 fw-medium mb-3">
                                Categories
                            </div>
                            <a href="javascript:void(0)"
                               class="ps-1 p-2 w-100 text-decoration-none text-light-gray-hover d-block">
                                Women (19)
                            </a>
                            <a href="javascript:void(0)"
                               class="ps-1 p-2 w-100 text-decoration-none text-light-gray-hover d-block">
                                Leo Sodales (19)
                            </a>
                            <a href="javascript:void(0)"
                               class="ps-1 p-2 w-100 text-decoration-none text-light-gray-hover d-block">
                                Accessories (16)
                            </a>
                            <a href="javascript:void(0)"
                               class="ps-1 p-2 w-100 text-decoration-none text-light-gray-hover d-block">
                                Men (19)
                            </a>
                            <a href="javascript:void(0)"
                               class="ps-1 p-2 w-100 text-decoration-none text-light-gray-hover d-block">
                                Sagittis Vitae (14)
                            </a>
                            <a href="javascript:void(0)"
                               class="ps-1 p-2 w-100 text-decoration-none text-light-gray-hover d-block">
                                Egestas Elit (12)
                            </a>
                            <a href="javascript:void(0)" class="ps-1 p-2 w-100 text-decoration-none text-light-gray-hover d-block">
                                Egestas Magna (17)
                            </a>
                            <a href="javascript:void(0)" class="ps-1 p-2 w-100 text-decoration-none text-light-gray-hover d-block">
                                Vestibulum Ligula (17)
                            </a>
                        </div>
                        <div class="px-2 py-3">
                            <div class="fs-4 fw-medium mb-3">
                                Brand
                            </div>
                            <a href="javascript:void(0)"
                               class="ps-1 p-2 w-100 text-decoration-none text-light-gray-hover d-block">
                                Calvin Klein (11)
                            </a>
                            <a href="javascript:void(0)"
                               class="ps-1 p-2 w-100 text-decoration-none text-light-gray-hover d-block">
                                Diesel (15)
                            </a>
                            <a href="javascript:void(0)"
                               class="ps-1 p-2 w-100 text-decoration-none text-light-gray-hover d-block">
                                Polo (13)
                            </a>
                            <a href="javascript:void(0)"
                               class="ps-1 p-2 w-100 text-decoration-none text-light-gray-hover d-block">
                                Tommy Hilfiger (14)
                            </a>
                        </div>
                        <div class="px-2 py-3">
                            <div class="fs-4 fw-medium mb-3">
                                Size
                            </div>
                            <a href="javascript:void(0)"
                               class="ps-1 p-2 w-100 text-decoration-none text-light-gray-hover d-block">
                                L (14)
                            </a>
                            <a href="javascript:void(0)"
                               class="ps-1 p-2 w-100 text-decoration-none text-light-gray-hover d-block">
                                M (11)
                            </a>
                            <a href="javascript:void(0)"
                               class="ps-1 p-2 w-100 text-decoration-none text-light-gray-hover d-block">
                                S (12)
                            </a>
                            <a href="javascript:void(0)"
                               class="ps-1 p-2 w-100 text-decoration-none text-light-gray-hover d-block">
                                XL (14)
                            </a>
                            <a href="javascript:void(0)"
                               class="ps-1 p-2 w-100 text-decoration-none text-light-gray-hover d-block">
                                XS (12)
                            </a>
                            <a href="javascript:void(0)"
                               class="ps-1 p-2 w-100 text-decoration-none text-light-gray-hover d-block">
                                XXL (13)
                            </a>
                        </div>
                        <div class="px-2 py-3">
                            <div class="fs-4 fw-medium mb-3">
                                Color
                            </div>
                            <a href="javascript:void(0)"
                               class="ps-1 p-2 w-100 text-decoration-none text-light-gray-hover d-block">
                                Black (12)
                            </a>
                            <a href="javascript:void(0)"
                               class="ps-1 p-2 w-100 text-decoration-none text-light-gray-hover d-block">
                                Blue (10)
                            </a>
                            <a href="javascript:void(0)"
                               class="ps-1 p-2 w-100 text-decoration-none text-light-gray-hover d-block">
                                Green (14)
                            </a>
                            <a href="javascript:void(0)"
                               class="ps-1 p-2 w-100 text-decoration-none text-light-gray-hover d-block">
                                Grey (14)
                            </a>
                            <a href="javascript:void(0)"
                               class="ps-1 p-2 w-100 text-decoration-none text-light-gray-hover d-block">
                                Red (12)
                            </a>
                            <a href="javascript:void(0)"
                               class="ps-1 p-2 w-100 text-decoration-none text-light-gray-hover d-block">
                                White (13)
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

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
