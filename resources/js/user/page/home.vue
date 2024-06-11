<template>

    <!-- Banner using owl carousel with jquery -->
    <section class="py-5">
        <div class="container">
            <div class="banner-owl-carousel owl-carousel owl-theme">
                <div class="item">
                    <div class="position-relative">
                        <img :src="`/images/banner/banner-5.jpg`" class="img-fluid" alt="banner-1">
                        <div
                            class="position-absolute top-0 bottom-0 start-0 d-flex justify-content-center align-items-start flex-column">
                            <div class="col-md-8 p-5">
                                <div class="small mb-4 fw-bold"> CLOTHING <br> NEW COLLECTION</div>
                                <div class="fs-3 mb-3"> NEW ARRIVALS!</div>
                                <div class="fs-1 fw-bold mb-3"> SUMMER FASHION</div>
                                <div class="text-secondary mb-4 line-height-2">
                                    We crack for this purely rock style with stitched quills in relief and metallic
                                    hardware.
                                </div>
                                <router-link :to="{name: 'shop'}"
                                             class="btn btn-outline-dark px-4 px-md-5 py-2 py-md-3 rounded-0">
                                    READ MORE
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="position-relative">
                        <img :src="`/images/banner/banner-4.jpg`" class="img-fluid" alt="banner-2">
                        <div
                            class="position-absolute top-0 bottom-0 start-0 d-flex justify-content-center align-items-start flex-column">
                            <div class="col-md-8 p-5">
                                <div class="small mb-4 fw-bold"> T-SHIRT <br> NEW COLLECTION</div>
                                <div class="fs-3 mb-3"> CLEAN & ELEGANT!</div>
                                <div class="fs-1 fw-bold mb-3"> MODERN FASHION</div>
                                <div class="text-secondary mb-4 line-height-2">
                                    BlackBird collection of minimal, sleek and functional Carryalls were designed
                                    with creatives in mind.
                                </div>
                                <router-link :to="{name: 'shop'}"
                                             class="btn btn-outline-dark px-4 px-md-5 py-2 py-md-3 rounded-0">
                                    READ MORE
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Who we are -->
    <section class="py-5">
        <div class="container">
            <div class="py-4 w-100">
                <div class="mb-3 text-center fw-bold text-light-gray">
                    Who Are We
                </div>
                <div class="fs-1 text-center fw-medium mb-3">
                    Welcome To Mimosa
                </div>
                <div class="d-flex justify-content-center mb-3">
                    <img :src="'/images/barrier.webp'" class="img-fluid" alt="barrier">
                </div>
                <div class="text-center text-light-gray md-3 my-md-5 line-height-2">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
                    dolore eu feugiat nulla facilisis
                    at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
                    duis dolore te feugait nulla
                    facilisi.
                </div>
                <div class="text-center">
                    <span class="fw-bold"> JOHN DOE </span> - <span class="text-secondary"> CEO MIMOSA </span>
                </div>
            </div>
        </div>
    </section>

    <!-- Shop By Collections -->
    <section class="py-5">
        <div class="container">
            <div class="py-4 w-100">
                <div class="fs-1 text-center fw-medium mb-4">
                    Shop By Collections
                </div>
                <div class="collection-owl-carousel owl-carousel owl-theme">
                    <div class="item">
                        <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                            <img :src="`/images/product/product-01.jpg`" class="img-fluid object-fit-contain"
                                 alt="product-01">
                            <div class="text-center my-3 text-secondary text-opacity-75"> 03 products</div>
                            <div class="text-center my-3 text-dark">
                                Sweaters
                            </div>
                        </router-link>
                    </div>
                    <div class="item">
                        <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                            <img :src="`/images/product/product-02.jpg`" class="img-fluid object-fit-contain"
                                 alt="product-02">
                            <div class="text-center my-3 text-secondary text-opacity-75"> 09 products</div>
                            <div class="text-center my-3 text-dark">
                                Jackets
                            </div>
                        </router-link>
                    </div>
                    <div class="item">
                        <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                            <img :src="`/images/product/product-03.jpg`" class="img-fluid object-fit-contain"
                                 alt="product-03">
                            <div class="text-center my-3 text-secondary text-opacity-75"> 01 products</div>
                            <div class="text-center my-3 text-dark">
                                Porridge
                            </div>
                        </router-link>
                    </div>
                    <div class="item">
                        <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                            <img :src="`/images/product/product-04.jpg`" class="img-fluid object-fit-contain"
                                 alt="product-04">
                            <div class="text-center my-3 text-secondary text-opacity-75"> 05 products</div>
                            <div class="text-center my-3 text-dark">
                                T-Shirt
                            </div>
                        </router-link>
                    </div>
                    <div class="item">
                        <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                            <img :src="`/images/product/product-05.jpg`" class="img-fluid object-fit-contain"
                                 alt="product-05">
                            <div class="text-center my-3 text-secondary text-opacity-75"> 07 products</div>
                            <div class="text-center my-3 text-dark">
                                Accessories
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Products -->
    <section class="py-5">
        <div class="container">
            <div class="py-4 w-100">
                <div class="fs-1 text-center fw-medium mb-3">
                    Featured Products
                </div>
                <div class="text-secondary text-opacity-75 text-center d-flex justify-content-center my-4">
                    <div class="col-md-6 col-xl-5 mb-3 line-height-2">
                        Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum
                        formas.
                    </div>
                </div>
                <div class="gallery w-100">

                    <!-- filter btn group -->
                    <div class="d-flex justify-content-center align-items-center flex-wrap mb-4">
                        <button type="button" class="btn border-0 bg-dark text-white px-4 py-2 mx-2 rounded-0">
                            Clothing
                        </button>
                        <button type="button" class="btn border-0 bg-secondary-subtle px-4 py-2 mx-2 rounded-0">
                            Handbags
                        </button>
                        <button type="button" class="btn border-0 bg-secondary-subtle px-4 py-2 mx-2 rounded-0">
                            Shoes
                        </button>
                        <button type="button" class="btn border-0 bg-secondary-subtle px-4 py-2 mx-2 rounded-0">
                            Accessories
                        </button>
                    </div>

                    <div class="feature-product-owl-carousel owl-carousel owl-theme">
                        <div class="p-1">
                            <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                <div class="position-relative">
                                    <img :src="`/images/product/product-04.jpg`" class="img-fluid object-fit-contain"
                                         alt="product ">
                                    <div class="position-absolute top-0 end-0 p-3">
                                        <div
                                            class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                            Sale
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center py-3">
                                    <div class="text-light-gray-hover cursor-pointer">
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
                                <div class="py-3 fs-6 fw-bold line-height-2 text-dark">
                                    Dopo Designs Woolrich Klettersack Backpack
                                </div>
                                <div class="fs-4 text-secondary text-opacity-75">
                                    $98.00
                                </div>
                            </router-link>
                        </div>
                        <div class="p-1">
                            <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                <div class="position-relative">
                                    <img :src="`/images/product/product-05.jpg`" class="img-fluid object-fit-contain"
                                         alt="product ">
                                    <div class="position-absolute top-0 end-0 p-3 invisible">
                                        <div
                                            class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                            Sale
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center py-3">
                                    <div class="text-light-gray-hover cursor-pointer">
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
                                <div class="py-3 fs-6 fw-bold line-height-2 text-dark">
                                    Dopo Designs Woolrich Klettersack Backpack
                                </div>
                                <div class="fs-4 text-secondary text-opacity-75"> $26.00</div>
                            </router-link>
                        </div>
                        <div class="p-1">
                            <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                <div class="position-relative">
                                    <img :src="`/images/product/product-06.jpg`" class="img-fluid object-fit-contain"
                                         alt="product ">
                                    <div class="position-absolute top-0 end-0 p-3">
                                        <div
                                            class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                            Sale
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center py-3">
                                    <div class="text-light-gray-hover cursor-pointer">
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
                                <div class="py-3 fs-6 fw-bold line-height-2 text-dark">
                                    Dopo Designs Woolrich Klettersack Backpack
                                </div>
                                <div class="fs-4 text-secondary text-opacity-75"> $46.00</div>
                            </router-link>
                        </div>
                        <div class="p-1">
                            <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                <div class="position-relative">
                                    <img :src="`/images/product/product-07.jpg`" class="img-fluid object-fit-contain"
                                         alt="product ">
                                    <div class="position-absolute top-0 end-0 p-3 invisible">
                                        <div
                                            class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                            Sale
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center py-3">
                                    <div class="text-light-gray-hover cursor-pointer">
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
                                <div class="py-3 fs-6 fw-bold line-height-2 text-dark">
                                    Dopo Designs Woolrich Klettersack Backpack
                                </div>
                                <div class="fs-4 text-secondary text-opacity-75"> $21.00</div>
                            </router-link>
                        </div>
                        <div class="p-1">
                            <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                <div class="position-relative">
                                    <img :src="`/images/product/product-08.jpg`" class="img-fluid object-fit-contain"
                                         alt="product ">
                                    <div class="position-absolute top-0 end-0 p-3">
                                        <div
                                            class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                            Sale
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center py-3">
                                    <div class="text-light-gray-hover cursor-pointer">
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
                                <div class="py-3 fs-6 fw-bold line-height-2 text-dark">
                                    Dopo Designs Woolrich Klettersack Backpack
                                </div>
                                <div class="fs-4 text-secondary text-opacity-75"> $102.00</div>
                            </router-link>
                        </div>
                        <div class="p-1">
                            <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                <div class="position-relative">
                                    <img :src="`/images/product/product-09.jpg`" class="img-fluid object-fit-contain"
                                         alt="product ">
                                    <div class="position-absolute top-0 end-0 p-3 invisible">
                                        <div
                                            class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                            Sale
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center py-3">
                                    <div class="text-light-gray-hover cursor-pointer">
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
                                <div class="py-3 fs-6 fw-bold line-height-2 text-dark">
                                    Dopo Designs Woolrich Klettersack Backpack
                                </div>
                                <div class="fs-4 text-secondary text-opacity-75"> $98.00</div>
                            </router-link>
                        </div>
                        <div class="p-1">
                            <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                <div class="position-relative">
                                    <img :src="`/images/product/product-10.jpg`" class="img-fluid object-fit-contain"
                                         alt="product ">
                                    <div class="position-absolute top-0 end-0 p-3">
                                        <div
                                            class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                            Sale
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center py-3">
                                    <div class="text-light-gray-hover cursor-pointer">
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
                                <div class="py-3 fs-6 fw-bold line-height-2 text-dark">
                                    Dopo Designs Woolrich Klettersack Backpack
                                </div>
                                <div class="fs-4 text-secondary text-opacity-75"> $116.00</div>
                            </router-link>
                        </div>
                        <div class="p-1">
                            <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                <div class="position-relative">
                                    <img :src="`/images/product/product-11.jpg`" class="img-fluid object-fit-contain"
                                         alt="product ">
                                    <div class="position-absolute top-0 end-0 p-3 invisible">
                                        <div
                                            class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                            Sale
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center py-3">
                                    <div class="text-light-gray-hover cursor-pointer">
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
                                <div class="py-3 fs-6 fw-bold line-height-2 text-dark">
                                    Dopo Designs Woolrich Klettersack Backpack
                                </div>
                                <div class="fs-4 text-secondary text-opacity-75"> $39.00</div>
                            </router-link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <!-- Explore every part of this products -->
    <section class="py-5">
        <div class="bg-light w-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 d-flex justify-content-end pt-5">
                        <img :src="`/images/overview.webp`" class="img-fluid" alt="overview">
                    </div>
                    <div class="col-md-6 py-3">
                        <div class="fs-1 fw-bold mb-4">
                            EXPLORE EVERY PART OF THIS PRODUCTS
                        </div>
                        <div class="text-light-gray mb-4 line-height-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <button type="button" class="btn border-0">
                            <i class="bi bi-play-circle-fill me-1 fs-4"></i> <span class="fs-4"> Play Details </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features product -->
    <section class="py-5">
        <div class="bg-white w-100">
            <div class="container">
                <div class="row">
                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-3">
                        <div class="p-3">

                            <!-- On sale -->
                            <div class="row mb-4">
                                <div class="col-7">
                                    <div class="fw-medium fs-4"> On Sale</div>
                                </div>
                                <div class="col-5">
                                    <hr class="border border-secondary w-100">
                                </div>
                            </div>

                            <!-- On sale carousel -->
                            <div class="on-sale-carousel owl-carousel owl-theme">
                                <div class="item">
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                        <div class="mb-4">
                                            <div class="row">
                                                <div class="col-3">
                                                    <img :src="`/images/product/product-01.jpg`" class="img-fluid"
                                                         alt="product">
                                                </div>
                                                <div class="col-9">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="text-secondary text-opacity-75"> H&M</div>
                                                        <div class="d-flex align-items-center justify-content-end">
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        </div>
                                                    </div>
                                                    <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs
                                                        Woolrich
                                                    </div>
                                                    <div class="d-flex align-items-center small">
                                                        <span class="text-secondary me-3"> $100.00 </span>
                                                        <span class="text-danger"> $80.00 </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                        <div class="mb-4">
                                            <div class="row">
                                                <div class="col-3">
                                                    <img :src="`/images/product/product-02.jpg`" class="img-fluid"
                                                         alt="product">
                                                </div>
                                                <div class="col-9">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="text-secondary text-opacity-75"> H&M</div>
                                                        <div class="d-flex align-items-center justify-content-end">
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        </div>
                                                    </div>
                                                    <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs
                                                        Woolrich
                                                    </div>
                                                    <div class="d-flex align-items-center small">
                                                        <span class="text-secondary me-3"> $100.00 </span>
                                                        <span class="text-danger"> $80.00 </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                        <div class="mb-4">
                                            <div class="row">
                                                <div class="col-3">
                                                    <img :src="`/images/product/product-03.jpg`" class="img-fluid"
                                                         alt="product">
                                                </div>
                                                <div class="col-9">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="text-secondary text-opacity-75"> H&M</div>
                                                        <div class="d-flex align-items-center justify-content-end">
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        </div>
                                                    </div>
                                                    <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs
                                                        Woolrich
                                                    </div>
                                                    <div class="d-flex align-items-center small">
                                                        <span class="text-secondary me-3"> $100.00 </span>
                                                        <span class="text-danger"> $80.00 </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                        <div class="mb-4">
                                            <div class="row">
                                                <div class="col-3">
                                                    <img :src="`/images/product/product-04.jpg`" class="img-fluid"
                                                         alt="product">
                                                </div>
                                                <div class="col-9">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="text-secondary text-opacity-75"> H&M</div>
                                                        <div class="d-flex align-items-center justify-content-end">
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        </div>
                                                    </div>
                                                    <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs
                                                        Woolrich
                                                    </div>
                                                    <div class="d-flex align-items-center small">
                                                        <span class="text-secondary me-3"> $100.00 </span>
                                                        <span class="text-danger"> $80.00 </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </router-link>
                                </div>
                                <div class="item">
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                        <div class="mb-4">
                                            <div class="row">
                                                <div class="col-3">
                                                    <img :src="`/images/product/product-01.jpg`" class="img-fluid"
                                                         alt="product">
                                                </div>
                                                <div class="col-9">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="text-secondary text-opacity-75"> H&M</div>
                                                        <div class="d-flex align-items-center justify-content-end">
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        </div>
                                                    </div>
                                                    <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs
                                                        Woolrich
                                                    </div>
                                                    <div class="d-flex align-items-center small">
                                                        <span class="text-secondary me-3"> $100.00 </span>
                                                        <span class="text-danger"> $80.00 </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                        <div class="mb-4">
                                            <div class="row">
                                                <div class="col-3">
                                                    <img :src="`/images/product/product-02.jpg`" class="img-fluid"
                                                         alt="product">
                                                </div>
                                                <div class="col-9">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="text-secondary text-opacity-75"> H&M</div>
                                                        <div class="d-flex align-items-center justify-content-end">
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        </div>
                                                    </div>
                                                    <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs
                                                        Woolrich
                                                    </div>
                                                    <div class="d-flex align-items-center small">
                                                        <span class="text-secondary me-3"> $100.00 </span>
                                                        <span class="text-danger"> $80.00 </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                        <div class="mb-4">
                                            <div class="row">
                                                <div class="col-3">
                                                    <img :src="`/images/product/product-03.jpg`" class="img-fluid"
                                                         alt="product">
                                                </div>
                                                <div class="col-9">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="text-secondary text-opacity-75"> H&M</div>
                                                        <div class="d-flex align-items-center justify-content-end">
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        </div>
                                                    </div>
                                                    <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs
                                                        Woolrich
                                                    </div>
                                                    <div class="d-flex align-items-center small">
                                                        <span class="text-secondary me-3"> $100.00 </span>
                                                        <span class="text-danger"> $80.00 </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                        <div class="mb-4">
                                            <div class="row">
                                                <div class="col-3">
                                                    <img :src="`/images/product/product-04.jpg`" class="img-fluid"
                                                         alt="product">
                                                </div>
                                                <div class="col-9">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="text-secondary text-opacity-75"> H&M</div>
                                                        <div class="d-flex align-items-center justify-content-end">
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        </div>
                                                    </div>
                                                    <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs
                                                        Woolrich
                                                    </div>
                                                    <div class="d-flex align-items-center small">
                                                        <span class="text-secondary me-3"> $100.00 </span>
                                                        <span class="text-danger"> $80.00 </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </router-link>
                                </div>
                                <div class="item">
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                        <div class="mb-4">
                                            <div class="row">
                                                <div class="col-3">
                                                    <img :src="`/images/product/product-01.jpg`" class="img-fluid"
                                                         alt="product">
                                                </div>
                                                <div class="col-9">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="text-secondary text-opacity-75"> H&M</div>
                                                        <div class="d-flex align-items-center justify-content-end">
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        </div>
                                                    </div>
                                                    <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs
                                                        Woolrich
                                                    </div>
                                                    <div class="d-flex align-items-center small">
                                                        <span class="text-secondary me-3"> $100.00 </span>
                                                        <span class="text-danger"> $80.00 </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                        <div class="mb-4">
                                            <div class="row">
                                                <div class="col-3">
                                                    <img :src="`/images/product/product-02.jpg`" class="img-fluid"
                                                         alt="product">
                                                </div>
                                                <div class="col-9">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="text-secondary text-opacity-75"> H&M</div>
                                                        <div class="d-flex align-items-center justify-content-end">
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        </div>
                                                    </div>
                                                    <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs
                                                        Woolrich
                                                    </div>
                                                    <div class="d-flex align-items-center small">
                                                        <span class="text-secondary me-3"> $100.00 </span>
                                                        <span class="text-danger"> $80.00 </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                        <div class="mb-4">
                                            <div class="row">
                                                <div class="col-3">
                                                    <img :src="`/images/product/product-03.jpg`" class="img-fluid"
                                                         alt="product">
                                                </div>
                                                <div class="col-9">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="text-secondary text-opacity-75"> H&M</div>
                                                        <div class="d-flex align-items-center justify-content-end">
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        </div>
                                                    </div>
                                                    <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs
                                                        Woolrich
                                                    </div>
                                                    <div class="d-flex align-items-center small">
                                                        <span class="text-secondary me-3"> $100.00 </span>
                                                        <span class="text-danger"> $80.00 </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                        <div class="mb-4">
                                            <div class="row">
                                                <div class="col-3">
                                                    <img :src="`/images/product/product-04.jpg`" class="img-fluid"
                                                         alt="product">
                                                </div>
                                                <div class="col-9">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="text-secondary text-opacity-75"> H&M</div>
                                                        <div class="d-flex align-items-center justify-content-end">
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                            <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        </div>
                                                    </div>
                                                    <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs
                                                        Woolrich
                                                    </div>
                                                    <div class="d-flex align-items-center small">
                                                        <span class="text-secondary me-3"> $100.00 </span>
                                                        <span class="text-danger"> $80.00 </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </router-link>
                                </div>
                            </div>

                        </div>
                        <div class="p-3">

                            <!-- Latest arrivals -->
                            <div class="row mb-4">
                                <div class="col-7">
                                    <div class="fw-medium fs-4"> Latest Arrivals</div>
                                </div>
                                <div class="col-5">
                                    <hr class="border border-secondary w-100">
                                </div>
                            </div>

                            <!-- Latest arrivals carousel -->
                            <div class="latest-arrival-carousel owl-carousel owl-theme">
                                <div class="item">
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <img :src="`/images/product/product-05.jpg`" class="img-fluid"
                                                     alt="product">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-secondary text-opacity-75"> H&M</div>
                                                    <div class="d-flex align-items-center justify-content-end">
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs Woolrich</div>
                                                <div class="text-secondary"> $100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <img :src="`/images/product/product-06.jpg`" class="img-fluid"
                                                     alt="product">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-secondary text-opacity-75"> H&M</div>
                                                    <div class="d-flex align-items-center justify-content-end">
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs Woolrich</div>
                                                <div class="text-secondary"> $100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <img :src="`/images/product/product-07.jpg`" class="img-fluid"
                                                     alt="product">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-secondary text-opacity-75"> H&M</div>
                                                    <div class="d-flex align-items-center justify-content-end">
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs Woolrich</div>
                                                <div class="text-secondary"> $100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <img :src="`/images/product/product-08.jpg`" class="img-fluid"
                                                     alt="product">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-secondary text-opacity-75"> H&M</div>
                                                    <div class="d-flex align-items-center justify-content-end">
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs Woolrich</div>
                                                <div class="text-secondary"> $100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                </div>
                                <div class="item">
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <img :src="`/images/product/product-05.jpg`" class="img-fluid"
                                                     alt="product">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-secondary text-opacity-75"> H&M</div>
                                                    <div class="d-flex align-items-center justify-content-end">
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs Woolrich</div>
                                                <div class="text-secondary"> $100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <img :src="`/images/product/product-06.jpg`" class="img-fluid"
                                                     alt="product">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-secondary text-opacity-75"> H&M</div>
                                                    <div class="d-flex align-items-center justify-content-end">
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs Woolrich</div>
                                                <div class="text-secondary"> $100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                        <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <img :src="`/images/product/product-07.jpg`" class="img-fluid"
                                                     alt="product">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-secondary text-opacity-75"> H&M</div>
                                                    <div class="d-flex align-items-center justify-content-end">
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs Woolrich</div>
                                                <div class="text-secondary"> $100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                        </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <img :src="`/images/product/product-08.jpg`" class="img-fluid"
                                                     alt="product">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-secondary text-opacity-75"> H&M</div>
                                                    <div class="d-flex align-items-center justify-content-end">
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs Woolrich</div>
                                                <div class="text-secondary"> $100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                </div>
                                <div class="item">
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <img :src="`/images/product/product-05.jpg`" class="img-fluid"
                                                     alt="product">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-secondary text-opacity-75"> H&M</div>
                                                    <div class="d-flex align-items-center justify-content-end">
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs Woolrich</div>
                                                <div class="text-secondary"> $100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <img :src="`/images/product/product-06.jpg`" class="img-fluid"
                                                     alt="product">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-secondary text-opacity-75"> H&M</div>
                                                    <div class="d-flex align-items-center justify-content-end">
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs Woolrich</div>
                                                <div class="text-secondary"> $100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <img :src="`/images/product/product-07.jpg`" class="img-fluid"
                                                     alt="product">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-secondary text-opacity-75"> H&M</div>
                                                    <div class="d-flex align-items-center justify-content-end">
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs Woolrich</div>
                                                <div class="text-secondary"> $100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <img :src="`/images/product/product-08.jpg`" class="img-fluid"
                                                     alt="product">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-secondary text-opacity-75"> H&M</div>
                                                    <div class="d-flex align-items-center justify-content-end">
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs Woolrich</div>
                                                <div class="text-secondary"> $100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                </div>
                            </div>

                        </div>
                        <div class="p-3">

                            <!-- Top viewed -->
                            <div class="row mb-4">
                                <div class="col-7">
                                    <div class="fw-medium fs-4"> Top Viewed</div>
                                </div>
                                <div class="col-5">
                                    <hr class="border border-secondary w-100">
                                </div>
                            </div>

                            <!-- Top viewed carousel -->
                            <div class="top-viewed-carousel owl-carousel owl-theme">
                                <div class="item">
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <img :src="`/images/product/product-09.jpg`" class="img-fluid"
                                                     alt="product">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-secondary text-opacity-75"> H&M</div>
                                                    <div class="d-flex align-items-center justify-content-end">
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs Woolrich</div>
                                                <div class="text-secondary"> $100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <img :src="`/images/product/product-10.jpg`" class="img-fluid"
                                                     alt="product">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-secondary text-opacity-75"> H&M</div>
                                                    <div class="d-flex align-items-center justify-content-end">
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs Woolrich</div>
                                                <div class="text-secondary"> $100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <img :src="`/images/product/product-11.jpg`" class="img-fluid"
                                                     alt="product">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-secondary text-opacity-75"> H&M</div>
                                                    <div class="d-flex align-items-center justify-content-end">
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs Woolrich</div>
                                                <div class="text-secondary"> $100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <img :src="`/images/product/product-01.jpg`" class="img-fluid"
                                                     alt="product">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-secondary text-opacity-75"> H&M</div>
                                                    <div class="d-flex align-items-center justify-content-end">
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs Woolrich</div>
                                                <div class="text-secondary"> $100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                </div>
                                <div class="item">
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <img :src="`/images/product/product-09.jpg`" class="img-fluid"
                                                     alt="product">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-secondary text-opacity-75"> H&M</div>
                                                    <div class="d-flex align-items-center justify-content-end">
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs Woolrich</div>
                                                <div class="text-secondary"> $100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <img :src="`/images/product/product-10.jpg`" class="img-fluid"
                                                     alt="product">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-secondary text-opacity-75"> H&M</div>
                                                    <div class="d-flex align-items-center justify-content-end">
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs Woolrich</div>
                                                <div class="text-secondary"> $100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <img :src="`/images/product/product-11.jpg`" class="img-fluid"
                                                     alt="product">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-secondary text-opacity-75"> H&M</div>
                                                    <div class="d-flex align-items-center justify-content-end">
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs Woolrich</div>
                                                <div class="text-secondary"> $100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <img :src="`/images/product/product-01.jpg`" class="img-fluid"
                                                     alt="product">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-secondary text-opacity-75"> H&M</div>
                                                    <div class="d-flex align-items-center justify-content-end">
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs Woolrich</div>
                                                <div class="text-secondary"> $100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                </div>
                                <div class="item">
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <img :src="`/images/product/product-09.jpg`" class="img-fluid"
                                                     alt="product">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-secondary text-opacity-75"> H&M</div>
                                                    <div class="d-flex align-items-center justify-content-end">
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs Woolrich</div>
                                                <div class="text-secondary"> $100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <img :src="`/images/product/product-10.jpg`" class="img-fluid"
                                                     alt="product">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-secondary text-opacity-75"> H&M</div>
                                                    <div class="d-flex align-items-center justify-content-end">
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs Woolrich</div>
                                                <div class="text-secondary"> $100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <img :src="`/images/product/product-11.jpg`" class="img-fluid"
                                                     alt="product">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-secondary text-opacity-75"> H&M</div>
                                                    <div class="d-flex align-items-center justify-content-end">
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs Woolrich</div>
                                                <div class="text-secondary"> $100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                    <router-link :to="{name: 'singleProduct'}" class="text-decoration-none">
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <img :src="`/images/product/product-01.jpg`" class="img-fluid"
                                                     alt="product">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-secondary text-opacity-75"> H&M</div>
                                                    <div class="d-flex align-items-center justify-content-end">
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                        <i class="mx-1 bi bi-star-fill text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="py-3 fw-bold line-height-2 text-dark"> Copo Designs Woolrich</div>
                                                <div class="text-secondary"> $100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Arrival & products amazing -->
    <section class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="position-relative w-100 background-effect overflow-hidden">
                        <div class="overflow-hidden before-effect">
                            <img :src="`/images/banner/banner-6.jpg`"
                                 class="img-fluid object-fit-cover w-100 height-320 image-effect extra-effect" alt="">
                        </div>
                        <div
                            class="position-absolute top-0 bottom-0 start-0 p-3 d-flex justify-content-start align-items-center z-3">
                            <div class="p-3 col-md-8">
                                <div class="fw-bold small mb-3"> New Arrivals</div>
                                <div class="fw-medium fs-3 mb-3 line-height-2"> White Sneakers For Men’s</div>
                                <div class="mt-3">
                                    <router-link :to="{name: 'shop'}"
                                                 class="text-decoration-none text-dark border-bottom border-2 border-dark pb-1 fw-bold">
                                        SHOP NOW
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="position-relative w-100 background-effect overflow-hidden">
                        <div class="overflow-hidden before-effect">
                            <img :src="`/images/banner/banner-7.jpg`"
                                 class="img-fluid object-fit-cover w-100 height-320 image-effect extra-effect" alt="">
                        </div>
                        <div
                            class="position-absolute top-0 bottom-0 start-0 p-3 d-flex justify-content-start align-items-center z-3">
                            <div class="p-3 col-md-8">
                                <div class="fw-bold small mb-3">Products amazing!</div>
                                <div class="fw-medium fs-3 mb-3 line-height-2"> Short T-Shirts For Women’s</div>
                                <div class="mt-3">
                                    <router-link :to="{name: 'shop'}"
                                                 class="text-decoration-none text-dark border-bottom border-2 border-dark pb-1 fw-bold">
                                        SHOP NOW
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Boxes -->
    <section class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-4 d-flex justify-content-center align-items-center flex-column">
                    <div class="mb-4">
                        <img :src="`/images/boxes/box-1.webp`" class="width-75 height-75" alt="box 1">
                    </div>
                    <div class="mb-3">
                        <div class="fw-bold"> Free Shipping Worldwide</div>
                    </div>
                    <div class="text-center text-secondary text-opacity-75 px-4 line-height-2">
                        Mirum est notare quam littera gothica, quam nunc putamus parum claram
                    </div>
                </div>
                <div class="col-md-4 d-flex justify-content-center align-items-center flex-column">
                    <div class="mb-4">
                        <img :src="`/images/boxes/box-2.webp`" class="width-75 height-75" alt="box 2">
                    </div>
                    <div class="mb-3">
                        <div class="fw-bold"> Money Back Guarantee</div>
                    </div>
                    <div class="text-center text-secondary text-opacity-75 px-4 line-height-2">
                        Mirum est notare quam littera gothica, quam nunc putamus parum claram
                    </div>
                </div>
                <div class="col-md-4 d-flex justify-content-center align-items-center flex-column">
                    <div class="mb-4">
                        <img :src="`/images/boxes/box-3.webp`" class="width-75 height-75" alt="box 3">
                    </div>
                    <div class="mb-3">
                        <div class="fw-bold"> Online Support 24/7</div>
                    </div>
                    <div class="text-center text-secondary text-opacity-75 px-4 line-height-2">
                        Mirum est notare quam littera gothica, quam nunc putamus parum claram
                    </div>
                </div>
            </div>
            <div class="pt-5">
                <hr class="w-100 border">
            </div>
        </div>
    </section>

    <!-- From Our Blog -->
    <section class="py-5">
        <div class="container">
            <div class="fs-1 text-center fw-medium mb-3">
                From Our Blog
            </div>
            <div class="d-flex justify-content-center text-center">
                <div class="col-lg-6 text-secondary text-opacity-75 mb-4 line-height-2">
                    Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum
                    formas.
                </div>
            </div>
            <div class="blog-owl-carousel owl-carousel owl-theme">
                <div class="item p-3 background-effect">
                    <div class="position-relative overflow-hidden">
                        <img :src="`/images/blog/blog-1.jpg`" class="img-fluid object-fit-cover height-350 image-effect"
                             alt="blog 1">
                        <div class="position-absolute top-0 end-0 p-3">
                            <div class="px-4 py-3 bg-white shadow-sm fw-bold text-center">
                                <div class="text-light-gray"> AUG</div>
                                <div class="fs-4"> 12</div>
                            </div>
                        </div>
                    </div>
                    <div class="py-3 fw-medium fs-5"> Bypi non habent claritatem insitam.</div>
                    <div class="pb-3 text-secondary text-opacity-75"> HasTech</div>
                    <div class="pb-3 text-opacity-75 text-secondary line-height-2">
                        Aypi non habent claritatem insitam. Aypi non habent claritatem
                        insitam. Aypi non habent claritatem insitam.Aypi non habent
                        claritatem insitam. Aypi non habent claritatem insitam.
                    </div>
                    <router-link :to="{name: 'singleBlog'}"
                                 class="pb-1 text-decoration-none text-light-gray-hover">
                        Read more . . .
                    </router-link>
                </div>
                <div class="item p-3 background-effect">
                    <div class="position-relative overflow-hidden">
                        <img :src="`/images/blog/blog-2.jpg`" class="img-fluid object-fit-cover height-350 image-effect"
                             alt="blog 2">
                        <div class="position-absolute top-0 end-0 p-3">
                            <div class="px-4 py-3 bg-white shadow-sm fw-bold text-center">
                                <div class="text-light-gray"> AUG</div>
                                <div class="fs-4"> 12</div>
                            </div>
                        </div>
                    </div>
                    <div class="py-3 fw-medium fs-5"> Bypi non habent claritatem insitam.</div>
                    <div class="pb-3 text-secondary text-opacity-75"> HasTech</div>
                    <div class="pb-3 text-opacity-75 text-secondary line-height-2">
                        Aypi non habent claritatem insitam. Aypi non habent claritatem
                        insitam. Aypi non habent claritatem insitam.Aypi non habent
                        claritatem insitam. Aypi non habent claritatem insitam.
                    </div>
                    <router-link :to="{name: 'singleBlog'}"
                                 class="pb-1 text-decoration-none text-light-gray-hover">
                        Read more . . .
                    </router-link>
                </div>
                <div class="item p-3 background-effect">
                    <div class="position-relative overflow-hidden">
                        <img :src="`/images/blog/blog-3.jpg`" class="img-fluid object-fit-cover height-350 image-effect"
                             alt="blog 3">
                        <div class="position-absolute top-0 end-0 p-3">
                            <div class="px-4 py-3 bg-white shadow-sm fw-bold text-center">
                                <div class="text-light-gray"> AUG</div>
                                <div class="fs-4"> 12</div>
                            </div>
                        </div>
                    </div>
                    <div class="py-3 fw-medium fs-5"> Bypi non habent claritatem insitam.</div>
                    <div class="pb-3 text-secondary text-opacity-75"> HasTech</div>
                    <div class="pb-3 text-opacity-75 text-secondary line-height-2">
                        Aypi non habent claritatem insitam. Aypi non habent claritatem
                        insitam. Aypi non habent claritatem insitam.Aypi non habent
                        claritatem insitam. Aypi non habent claritatem insitam.
                    </div>
                    <router-link :to="{name: 'singleBlog'}"
                                 class="pb-1 text-decoration-none text-light-gray-hover">
                        Read more . . .
                    </router-link>
                </div>
            </div>
        </div>
    </section>

</template>

<script>

export default {
    data() {
        return {}
    },
    mounted() {
        this.bannerOwlCarousel();
        this.collectionOwlCarousel();
        this.featureProductOwlCarousel();
        this.blogOwlCarousel();
        this.onSaleOwlCarousel();
        this.latestArrivalOwlCarousel();
        this.topViewedOwlCarousel();
    },
    methods: {

        /* Function to banner owl carousel */
        bannerOwlCarousel() {
            $('.banner-owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                animateOut: 'fadeOut',
                autoplay: true,
                autoplaySpeed: 7000,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            })
        },

        /* Function to collection owl carousel */
        collectionOwlCarousel() {
            $('.collection-owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: false,
                autoplay: true,
                slideTransition: 'linear',
                autoplaySpeed: 4000,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    991: {
                        items: 3
                    },
                    1200: {
                        items: 5
                    }
                }
            })
        },

        /* Function to feature product owl carousel */
        featureProductOwlCarousel() {
            $('.feature-product-owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: false,
                autoplay: true,
                slideTransition: 'linear',
                autoplaySpeed: 4000,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    991: {
                        items: 3
                    },
                    1200: {
                        items: 5
                    }
                }
            })
        },

        /* Function to blog owl carousel */
        blogOwlCarousel() {
            $('.blog-owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: false,
                autoplay: true,
                slideTransition: 'linear',
                autoplaySpeed: 4000,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    991: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    }
                }
            })
        },

        /* Function to on sale owl carousel */
        onSaleOwlCarousel() {
            $('.on-sale-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: false,
                autoplay: true,
                slideTransition: 'linear',
                autoplaySpeed: 4000,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            })
        },

        /* Function to the latest arrival owl carousel */
        latestArrivalOwlCarousel() {
            $('.latest-arrival-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: false,
                autoplay: true,
                slideTransition: 'linear',
                autoplaySpeed: 4000,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            })
        },

        /* Function to top viewed owl carousel */
        topViewedOwlCarousel() {
            $('.top-viewed-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: false,
                autoplay: true,
                slideTransition: 'linear',
                autoplaySpeed: 4000,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            })
        },

    }
}

</script>
