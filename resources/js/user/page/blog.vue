<template>

    <!-- breadcrumb -->
    <section class="w-100 py-5">
        <div class="container">
            <div class="position-relative">
                <img :src="`/images/breadcrumb.webp`" class="img-fluid object-fit-cover height-320 w-100"
                     alt="breadcrumb">
                <div
                    class="position-absolute start-0 top-0 w-100 h-100 text-center d-flex justify-content-center align-items-center flex-column">
                    <div class="fs-1">Blog</div>
                    <div class="d-flex justify-content-center align-items-center">
                        <router-link :to="{name: 'home'}" class="text-decoration-none text-secondary">
                            Home
                        </router-link>
                        <div class="mx-3"> -</div>
                        <router-link :to="{name: 'blog'}" class="text-decoration-none text-theme">
                            Blog
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- blog -->
    <div class="w-100 py-5">
        <div class="container">

            <!-- blog -->
            <div class="p-2">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2">

                            <!-- blog list -->
                            <div class="p-3">
                                <div class="border w-100 rounded-3 overflow-hidden">
                                    <img :src="`/images/blog/blog-1.jpg`"
                                         class="img-fluid object-fit-cover height-250 w-100" alt="blog ">
                                    <div class="p-3 fw-medium text-secondary text-opacity-75 small"> August 10, 2022
                                    </div>
                                    <div class="px-3 mb-3 truncate-to-1-line fs-5"> Aypi Non Habent Claritatem
                                        Insitam.
                                    </div>
                                    <div class="px-3 text-secondary text-opacity-75 pb-3 small"> HasTech</div>
                                    <div class="px-3 truncate-to-3-line">
                                        It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters, as opposed to using
                                        'Content here, content here'.
                                    </div>
                                    <div class="p-3">
                                        <a href="javascript:void(0)"
                                           class=" text-dark text-decoration-none">
                                            Read more . . .
                                        </a>
                                    </div>
                                    <hr class="w-100 border p-0 m-0">
                                    <div
                                        class="p-3 d-flex justify-content-between align-items-center fw-bold text-secondary">
                                        <div>
                                            <i class="bi bi-person-fill"></i> Rang
                                        </div>
                                        <div>
                                            <i class="bi bi-heart me-2"></i> 30 LIKES
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="p-3">
                                <div class="border w-100 rounded-3 overflow-hidden">
                                    <img :src="`/images/blog/blog-2.jpg`"
                                         class="img-fluid object-fit-cover height-250 w-100" alt="blog ">
                                    <div class="p-3 fw-medium text-secondary text-opacity-75 small"> August 10, 2022
                                    </div>
                                    <div class="px-3 mb-3 truncate-to-1-line fs-5"> Aypi Non Habent Claritatem
                                        Insitam.
                                    </div>
                                    <div class="px-3 text-secondary text-opacity-75 pb-3 small"> HasTech</div>
                                    <div class="px-3 truncate-to-3-line">
                                        It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters, as opposed to using
                                        'Content here, content here'.
                                    </div>
                                    <div class="p-3">
                                        <a href="javascript:void(0)"
                                           class=" text-dark text-decoration-none">
                                            Read more . . .
                                        </a>
                                    </div>
                                    <hr class="w-100 border p-0 m-0">
                                    <div
                                        class="p-3 d-flex justify-content-between align-items-center fw-bold text-secondary">
                                        <div>
                                            <i class="bi bi-person-fill"></i> Rang
                                        </div>
                                        <div>
                                            <i class="bi bi-heart me-2"></i> 30 LIKES
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="p-3">
                                <div class="border w-100 rounded-3 overflow-hidden">
                                    <img :src="`/images/blog/blog-3.jpg`"
                                         class="img-fluid object-fit-cover height-250 w-100" alt="blog ">
                                    <div class="p-3 fw-medium text-secondary text-opacity-75 small"> August 10, 2022
                                    </div>
                                    <div class="px-3 mb-3 truncate-to-1-line fs-5"> Aypi Non Habent Claritatem
                                        Insitam.
                                    </div>
                                    <div class="px-3 text-secondary text-opacity-75 pb-3 small"> HasTech</div>
                                    <div class="px-3 truncate-to-3-line">
                                        It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters, as opposed to using
                                        'Content here, content here'.
                                    </div>
                                    <div class="p-3">
                                        <a href="javascript:void(0)"
                                           class=" text-dark text-decoration-none">
                                            Read more . . .
                                        </a>
                                    </div>
                                    <hr class="w-100 border p-0 m-0">
                                    <div
                                        class="p-3 d-flex justify-content-between align-items-center fw-bold text-secondary">
                                        <div>
                                            <i class="bi bi-person-fill"></i> Rang
                                        </div>
                                        <div>
                                            <i class="bi bi-heart me-2"></i> 30 LIKES
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="p-3">
                                <div class="border w-100 rounded-3 overflow-hidden">
                                    <img :src="`/images/blog/blog-1.jpg`"
                                         class="img-fluid object-fit-cover height-250 w-100" alt="blog ">
                                    <div class="p-3 fw-medium text-secondary text-opacity-75 small"> August 10, 2022
                                    </div>
                                    <div class="px-3 mb-3 truncate-to-1-line fs-5"> Aypi Non Habent Claritatem
                                        Insitam.
                                    </div>
                                    <div class="px-3 text-secondary text-opacity-75 pb-3 small"> HasTech</div>
                                    <div class="px-3 truncate-to-3-line">
                                        It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters, as opposed to using
                                        'Content here, content here'.
                                    </div>
                                    <div class="p-3">
                                        <a href="javascript:void(0)"
                                           class=" text-dark text-decoration-none">
                                            Read more . . .
                                        </a>
                                    </div>
                                    <hr class="w-100 border p-0 m-0">
                                    <div
                                        class="p-3 d-flex justify-content-between align-items-center fw-bold text-secondary">
                                        <div>
                                            <i class="bi bi-person-fill"></i> Rang
                                        </div>
                                        <div>
                                            <i class="bi bi-heart me-2"></i> 30 LIKES
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="p-3">
                                <div class="border w-100 rounded-3 overflow-hidden">
                                    <img :src="`/images/blog/blog-2.jpg`"
                                         class="img-fluid object-fit-cover height-250 w-100" alt="blog ">
                                    <div class="p-3 fw-medium text-secondary text-opacity-75 small"> August 10, 2022
                                    </div>
                                    <div class="px-3 mb-3 truncate-to-1-line fs-5"> Aypi Non Habent Claritatem
                                        Insitam.
                                    </div>
                                    <div class="px-3 text-secondary text-opacity-75 pb-3 small"> HasTech</div>
                                    <div class="px-3 truncate-to-3-line">
                                        It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters, as opposed to using
                                        'Content here, content here'.
                                    </div>
                                    <div class="p-3">
                                        <a href="javascript:void(0)"
                                           class=" text-dark text-decoration-none">
                                            Read more . . .
                                        </a>
                                    </div>
                                    <hr class="w-100 border p-0 m-0">
                                    <div
                                        class="p-3 d-flex justify-content-between align-items-center fw-bold text-secondary">
                                        <div>
                                            <i class="bi bi-person-fill"></i> Rang
                                        </div>
                                        <div>
                                            <i class="bi bi-heart me-2"></i> 30 LIKES
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="p-3">
                                <div class="border w-100 rounded-3 overflow-hidden">
                                    <img :src="`/images/blog/blog-3.jpg`"
                                         class="img-fluid object-fit-cover height-250 w-100" alt="blog ">
                                    <div class="p-3 fw-medium text-secondary text-opacity-75 small"> August 10, 2022
                                    </div>
                                    <div class="px-3 mb-3 truncate-to-1-line fs-5"> Aypi Non Habent Claritatem
                                        Insitam.
                                    </div>
                                    <div class="px-3 text-secondary text-opacity-75 pb-3 small"> HasTech</div>
                                    <div class="px-3 truncate-to-3-line">
                                        It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters, as opposed to using
                                        'Content here, content here'.
                                    </div>
                                    <div class="p-3">
                                        <a href="javascript:void(0)"
                                           class=" text-dark text-decoration-none">
                                            Read more . . .
                                        </a>
                                    </div>
                                    <hr class="w-100 border p-0 m-0">
                                    <div
                                        class="p-3 d-flex justify-content-between align-items-center fw-bold text-secondary">
                                        <div>
                                            <i class="bi bi-person-fill"></i> Rang
                                        </div>
                                        <div>
                                            <i class="bi bi-heart me-2"></i> 30 LIKES
                                        </div>
                                    </div>
                                </div>
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
                    <div class="col-lg-4">
                        <!-- search and sidebar -->
                        <div class="px-2 pt-3 mb-4">
                            <div class="position-relative inner-shadow-search">
                                <div class="position-absolute top-50 start-0 translate-middle-y ps-3">
                                    <i class="bi bi-search"></i>
                                </div>
                                <input type="text" name="keyword" class="form-control border shadow-none p-3 ps-5"
                                       placeholder="Blog search here . . ." required autocomplete="new-keyword">
                            </div>
                        </div>
                        <div class="px-2">
                            <div class="fs-4 fw-medium mb-3">
                                RECENT POST
                            </div>
                            <div class="d-flex justify-content-start align-items-center py-3">
                                <div class="col-3">
                                    <img :src="`/images/blog/blog-1.jpg`" class="img-fluid object-fit-cover w-100 h-100"
                                         alt="blog ">
                                </div>
                                <div class="col-9 ps-3">
                                    <div class="truncate-to-1-line">
                                        Aypi non habent claritatem insitam.
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-start align-items-center py-3">
                                <div class="col-3">
                                    <img :src="`/images/blog/blog-2.jpg`" class="img-fluid object-fit-cover w-100 h-100"
                                         alt="blog ">
                                </div>
                                <div class="col-9 ps-3">
                                    <div class="truncate-to-1-line">
                                        Aypi non habent claritatem insitam.
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-start align-items-center py-3">
                                <div class="col-3">
                                    <img :src="`/images/blog/blog-3.jpg`" class="img-fluid object-fit-cover w-100 h-100"
                                         alt="blog ">
                                </div>
                                <div class="col-9 ps-3">
                                    <div class="truncate-to-1-line">
                                        Aypi non habent claritatem insitam.
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-start align-items-center py-3">
                                <div class="col-3">
                                    <img :src="`/images/blog/blog-1.jpg`" class="img-fluid object-fit-cover w-100 h-100"
                                         alt="blog ">
                                </div>
                                <div class="col-9 ps-3">
                                    <div class="truncate-to-1-line">
                                        Aypi non habent claritatem insitam.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-2 mt-4">
                            <div class="fs-4 fw-medium mb-3">
                                CATEGORIES
                            </div>
                            <a href="javascript:void(0)"
                               class="ps-1 p-3 w-100 text-decoration-none text-light-gray-hover d-block border-bottom">
                                Corporate
                            </a>
                            <a href="javascript:void(0)"
                               class="ps-1 p-3 w-100 text-decoration-none text-light-gray-hover d-block border-bottom">
                                Creative
                            </a>
                            <a href="javascript:void(0)"
                               class="ps-1 p-3 w-100 text-decoration-none text-light-gray-hover d-block border-bottom">
                                Design
                            </a>
                            <a href="javascript:void(0)"
                               class="ps-1 p-3 w-100 text-decoration-none text-light-gray-hover d-block border-bottom">
                                News
                            </a>
                            <a href="javascript:void(0)"
                               class="ps-1 p-3 w-100 text-decoration-none text-light-gray-hover d-block border-bottom">
                                Photography
                            </a>
                            <a href="javascript:void(0)"
                               class="ps-1 p-3 w-100 text-decoration-none text-light-gray-hover d-block border-bottom">
                                Technology
                            </a>
                        </div>
                        <div class="px-2 mt-4">
                            <div class="fs-4 fw-medium mb-3">
                                TAGS
                            </div>
                            <div class="d-flex justify-content-start align-items-center flex-wrap">
                                <button type="button" class="btn m-1 rounded-1 btn-light-theme px-4 py-2 border-0">
                                    Branding
                                </button>
                                <button type="button" class="btn m-1 rounded-1 btn-light-theme px-4 py-2 border-0">
                                    Creative
                                </button>
                                <button type="button" class="btn m-1 rounded-1 btn-light-theme px-4 py-2 border-0">
                                    Design
                                </button>
                                <button type="button" class="btn m-1 rounded-1 btn-light-theme px-4 py-2 border-0">
                                    Development
                                </button>
                                <button type="button" class="btn m-1 rounded-1 btn-light-theme px-4 py-2 border-0">
                                    New
                                </button>
                                <button type="button" class="btn m-1 rounded-1 btn-light-theme px-4 py-2 border-0">
                                    Print
                                </button>
                                <button type="button" class="btn m-1 rounded-1 btn-light-theme px-4 py-2 border-0">
                                    UI/UX
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
