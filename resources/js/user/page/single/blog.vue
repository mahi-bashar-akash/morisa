<template>

    <!-- breadcrumb -->
    <section class="w-100 py-5">
        <div class="container">
            <div class="position-relative">
                <img :src="`/images/breadcrumb.webp`" class="img-fluid object-fit-cover height-320 w-100"
                     alt="breadcrumb">
                <div
                    class="position-absolute start-0 top-0 w-100 h-100 text-center d-flex justify-content-center align-items-center flex-column">
                    <div class="fs-1 mb-3">Blog</div>
                    <div class="d-flex justify-content-center align-items-center">
                        <router-link :to="{name: 'home'}" class="text-decoration-none text-secondary">
                            Home
                        </router-link>
                        <div class="mx-3"> - </div>
                        <router-link :to="{name: 'blog'}" class="text-decoration-none text-secondary">
                            Blog
                        </router-link>
                        <div class="mx-3"> - </div>
                        <router-link :to="{name: 'singleBlog'}" class="text-decoration-none text-theme">
                            Details
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- blog -->
    <div class="w-100 pb-5">
        <div class="container">

            <!-- blog -->
            <div class="p-2">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="p-3">
                            <img :src="`/images/blog/blog-1.jpg`" class="img-fluid object-fit-cover w-100 h-100 image-effect" alt="blog 1">
                            <div class="my-3 truncate-to-1-line fs-4 fw-medium">
                                Aypi Non Habent Claritatem Insitam.
                            </div>
                            <div class="my-3 text-secondary">
                                But I must explain to you how all this mistaken idea of denouncing pleasure and
                                praising pain was born and I will give you a complete account of the system, and
                                expound the actual teachings of the great explorer of the truth, the master-builder
                                of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it
                                is pleasure, but because those who do not know how to pursue pleasure rationally
                                encounter consequences that are extremely painful. Nor again is there anyone who
                                loves or pursues or desires to obtain pain of itself, because it is pain, but
                                because occasionally circumstances occur in which toil and pain can procure him
                                some great pleasure. To take a trivial example,
                            </div>
                            <div class="my-3 text-secondary">
                                which of us ever undertakes laborious physical exercise, except to obtain some
                                advantage from it? But who has any right to find fault with a man who chooses to
                                enjoy a pleasure that has no annoying consequences, or one who avoids a pain
                                that produces no resultant pleasure?”
                            </div>
                            <div class="my-3 border-start border-3 border-dark-subtle">
                                <div class="ps-3 fs-5 my-4">
                                    No one rejects, dislikes, or avoids pleasure itself, because it pleasure, but because
                                    those who do not know how to pursue pleasure ratinally encounter consequences that are.
                                </div>
                            </div>
                            <div class="my-3 text-secondary">
                                But I must explain to you how all this mistaken idea of denouncing pleasure and
                                praising pain was born and I will give you a complete account of the system, and
                                expound the actual teachings of the great explorer of the truth, the master-builder
                                of human happiness.
                            </div>
                            <div class="my-3 text-secondary">
                                But I must explain to you how all this mistaken idea of denouncing pleasure and
                                praising pain was born and I will give you a complete account of the system, and
                                expound the actual teachings of the great explorer of the truth, the master-builder
                                of human happiness.
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <router-link :to="{name: 'singleBlog'}" class="w-100">
                                        <div class="overflow-hidden background-effect">
                                            <img :src="`/images/44.webp`" class="img-fluid object-fit-cover image-effect" alt="blog">
                                        </div>
                                    </router-link>
                                </div>
                                <div class="col-md-6">
                                    <router-link :to="{name: 'singleBlog'}" class="w-100">
                                        <div class="overflow-hidden background-effect">
                                            <img :src="`/images/45.webp`" class="img-fluid object-fit-cover image-effect" alt="blog">
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                            <div class="my-3 text-secondary">
                                But I must explain to you how all this mistaken idea of denouncing pleasure and
                                praising pain was born and I will give you a complete account of the system, and
                                expound the actual teachings of the great explorer of the truth, the master-builder
                                of human happiness.
                            </div>
                            <div class="py-4 my-5 border-top border-bottom">
                                <div class="row">
                                    <div class="col-md-6 fw-medium text-secondary">
                                        <i class="bi bi-calendar me-2"></i>
                                        CATEGORIES: PHOTOGRAPHY
                                    </div>
                                    <div class="col-md-6 fw-medium text-secondary d-flex justify-content-md-end">
                                        SHARES:
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
                                            <i class="bi bi-youtube"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3 fw-medium fs-5">
                                3 COMMENTS ON PRAISING PAIN WAS BORN AND I WILL GIVE
                            </div>
                            <div class="py-4 d-flex align-items-start justify-content-start border-bottom">
                                <div>
                                    <div class="width-65 height-65 d-flex justify-content-center align-items-center bg-secondary-subtle rounded-3 fw-bold">
                                        MB
                                    </div>
                                </div>
                                <div class="ms-3">
                                    <div class="mb-1 fw-medium fs-5"> Mistaken </div>
                                    <div class="mb-2 text-secondary mb-2 small"> August 10, 2022 at 11:09 am </div>
                                    <div class="mb-2 text-secondary">
                                        mistaken explain to you how all this mistaken idea of denouncing pleas
                                        praising pain born and I will give you a complete account of the system
                                    </div>
                                    <button type="button" class="btn btn-outline-theme py-2 width-96 fw-medium rounded-pill">
                                        REPLY
                                    </button>
                                </div>
                            </div>
                            <div class="py-4 d-flex align-items-start justify-content-start border-bottom">
                                <div>
                                    <div class="width-65 height-65 d-flex justify-content-center align-items-center bg-secondary-subtle rounded-3 fw-bold">
                                        JS
                                    </div>
                                </div>
                                <div class="ms-3">
                                    <div class="mb-1 fw-medium fs-5"> Mistaken </div>
                                    <div class="mb-2 text-secondary mb-2 small"> August 10, 2022 at 11:09 am </div>
                                    <div class="mb-2 text-secondary">
                                        mistaken explain to you how all this mistaken idea of denouncing pleas
                                        praising pain born and I will give you a complete account of the system
                                    </div>
                                    <button type="button" class="btn btn-outline-theme py-2 width-96 fw-medium rounded-pill">
                                        REPLY
                                    </button>
                                </div>
                            </div>
                            <div class="py-4 d-flex align-items-start justify-content-start border-bottom">
                                <div>
                                    <div class="width-65 height-65 d-flex justify-content-center align-items-center bg-secondary-subtle rounded-3 fw-bold">
                                        IS
                                    </div>
                                </div>
                                <div class="ms-3">
                                    <div class="mb-1 fw-medium fs-5"> Mistaken </div>
                                    <div class="mb-2 text-secondary mb-2 small"> August 10, 2022 at 11:09 am </div>
                                    <div class="mb-2 text-secondary">
                                        mistaken explain to you how all this mistaken idea of denouncing pleas
                                        praising pain born and I will give you a complete account of the system
                                    </div>
                                    <button type="button" class="btn btn-outline-theme py-2 width-96 fw-medium rounded-pill">
                                        REPLY
                                    </button>
                                </div>
                            </div>
                            <form class="row mt-5">
                                <div class="col-md-12 mb-3">
                                    <div class="form-group">
                                        <label for="message" class="form-label"> Message </label>
                                        <textarea id="message" name="message" cols="30" rows="10" placeholder="Types your comment *" required autocomplete="new-message" class="form-textarea border p-3"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="form-group">
                                        <label for="name" class="form-label"> Your Name </label>
                                        <input id="name" type="text" name="name" class="form-control border shadow-none p-3" placeholder="Your Name" required autocomplete="new-name">
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="form-group">
                                        <label for="email" class="form-label"> Email </label>
                                        <input id="email" type="email" name="email" class="form-control border shadow-none p-3" placeholder="Your Email" required autocomplete="new-email">
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="form-group">
                                        <label for="website-link" class="form-label"> Website Link </label>
                                        <input id="website-link" type="url" name="website-link" class="form-control border shadow-none p-3" placeholder="Your website link" required autocomplete="new-website-link">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-light-theme p-3 width-96 rounded-0">
                                        SUBMIT
                                    </button>
                                </div>
                            </form>
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
                            <router-link :to="{name: 'singleBlog'}" class="d-flex justify-content-start align-items-center py-3 text-decoration-none text-secondary background-effect">
                                <span class="col-3">
                                    <div class="overflow-hidden">
                                        <img :src="`/images/blog/blog-1.jpg`" class="img-fluid object-fit-cover w-100 h-100 image-effect" alt="blog ">
                                    </div>
                                </span>
                                <span class="col-9 ps-3">
                                    <span class="truncate-to-1-line">
                                        Aypi non habent claritatem insitam.
                                    </span>
                                </span>
                            </router-link>
                            <router-link :to="{name: 'singleBlog'}" class="d-flex justify-content-start align-items-center py-3 text-decoration-none text-secondary background-effect">
                                <span class="col-3">
                                    <div class="overflow-hidden">
                                        <img :src="`/images/blog/blog-2.jpg`" class="img-fluid object-fit-cover w-100 h-100 image-effect" alt="blog ">
                                    </div>
                                </span>
                                <span class="col-9 ps-3">
                                    <span class="truncate-to-1-line">
                                        Aypi non habent claritatem insitam.
                                    </span>
                                </span>
                            </router-link>
                            <router-link :to="{name: 'singleBlog'}" class="d-flex justify-content-start align-items-center py-3 text-decoration-none text-secondary background-effect">
                                <span class="col-3">
                                    <div class="overflow-hidden">
                                        <img :src="`/images/blog/blog-3.jpg`" class="img-fluid object-fit-cover w-100 h-100 image-effect" alt="blog ">
                                    </div>
                                </span>
                                <span class="col-9 ps-3">
                                    <span class="truncate-to-1-line">
                                        Aypi non habent claritatem insitam.
                                    </span>
                                </span>
                            </router-link>
                            <router-link :to="{name: 'singleBlog'}" class="d-flex justify-content-start align-items-center py-3 text-decoration-none text-secondary background-effect">
                                <span class="col-3">
                                    <div class="overflow-hidden">
                                        <img :src="`/images/blog/blog-1.jpg`" class="img-fluid object-fit-cover w-100 h-100 image-effect" alt="blog ">
                                    </div>
                                </span>
                                <span class="col-9 ps-3">
                                    <span class="truncate-to-1-line">
                                        Aypi non habent claritatem insitam.
                                    </span>
                                </span>
                            </router-link>
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
