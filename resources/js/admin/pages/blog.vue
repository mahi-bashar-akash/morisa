<template>

    <!-- breadcrumb -->
    <div class="d-sm-flex justify-content-between align-items-center">
        <breadcrumb :items="BreadcrumbItems" moduleName="Blogs"/>
    </div>

    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">

        <!-- blog list -->
        <div class="p-3 background-effect">
            <div class="border w-100 rounded-3 overflow-hidden">
                <div class="overflow-hidden">
                    <img :src="`/images/blog/blog-1.jpg`"
                         class="img-fluid object-fit-cover height-250 w-100 image-effect" alt="blog ">
                </div>
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
                <hr class="w-100 border p-0 mt-4 m-0">
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

        <div class="p-3 background-effect">
            <div class="border w-100 rounded-3 overflow-hidden">
                <div class="overflow-hidden">
                    <img :src="`/images/blog/blog-2.jpg`"
                         class="img-fluid object-fit-cover height-250 w-100 image-effect" alt="blog ">
                </div>
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
                <hr class="w-100 border p-0 mt-4 m-0">
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

        <div class="p-3 background-effect">
            <div class="border w-100 rounded-3 overflow-hidden">
                <div class="overflow-hidden">
                    <img :src="`/images/blog/blog-3.jpg`"
                         class="img-fluid object-fit-cover height-250 w-100 image-effect" alt="blog ">
                </div>
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
                <hr class="w-100 border p-0 mt-4 m-0">
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

        <div class="p-3 background-effect">
            <div class="border w-100 rounded-3 overflow-hidden">
                <div class="overflow-hidden">
                    <img :src="`/images/blog/blog-2.jpg`"
                         class="img-fluid object-fit-cover height-250 w-100 image-effect" alt="blog ">
                </div>
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
                <hr class="w-100 border p-0 mt-4 m-0">
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

        <div class="p-3 background-effect">
            <div class="border w-100 rounded-3 overflow-hidden">
                <div class="overflow-hidden">
                    <img :src="`/images/blog/blog-3.jpg`"
                         class="img-fluid object-fit-cover height-250 w-100 image-effect" alt="blog ">
                </div>
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
                <hr class="w-100 border p-0 mt-4 m-0">
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

        <div class="p-3 background-effect">
            <div class="border w-100 rounded-3 overflow-hidden">
                <div class="overflow-hidden">
                    <img :src="`/images/blog/blog-1.jpg`"
                         class="img-fluid object-fit-cover height-250 w-100 image-effect" alt="blog ">
                </div>
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
                <hr class="w-100 border p-0 mt-4 m-0">
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

</template>

<script>
import breadcrumb from "../components/breadcrumb.vue";

export default {
    components: {
        breadcrumb
    },
    data(){
        return {
            BreadcrumbItems: [
                { title: 'Dashboard', route: 'dashboard' },
                { title: 'Blogs', route: 'blog' },
            ],
        }
    },
    mounted() {

    },
    methods: {

    }
}

</script>
