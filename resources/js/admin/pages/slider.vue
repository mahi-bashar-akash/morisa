<template>

    <!-- breadcrumb -->
    <div class="d-sm-flex justify-content-between align-items-center">
        <breadcrumb :items="BreadcrumbItems" moduleName="Sliders"/>
    </div>

    <div class="banner-owl-carousel owl-carousel owl-theme">
        <div class="item">
            <div class="position-relative">
                <img :src="`/images/banner/banner-5.jpg`" class="img-fluid" alt="banner-1">
                <div class="position-absolute top-0 bottom-0 start-0 d-flex justify-content-center align-items-start flex-column">
                    <div class="col-md-8 p-5">
                        <div class="small mb-4 fw-bold"> CLOTHING <br> NEW COLLECTION </div>
                        <div class="fs-3 mb-3"> NEW ARRIVALS! </div>
                        <div class="fs-1 fw-bold mb-3"> SUMMER FASHION </div>
                        <div class="text-secondary mb-4 line-height-2">
                            We crack for this purely rock style with stitched quills in relief and metallic
                            hardware.
                        </div>
                        <button type="button" class="btn btn-outline-dark px-4 px-md-5 py-2 py-md-3 rounded-0"> READ MORE </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="item">
            <div class="position-relative">
                <img :src="`/images/banner/banner-4.jpg`" class="img-fluid" alt="banner-2">
                <div class="position-absolute top-0 bottom-0 start-0 d-flex justify-content-center align-items-start flex-column">
                    <div class="col-md-8 p-5">
                        <div class="small mb-4 fw-bold"> T-SHIRT <br> NEW COLLECTION </div>
                        <div class="fs-3 mb-3"> CLEAN & ELEGANT! </div>
                        <div class="fs-1 fw-bold mb-3"> MODERN FASHION </div>
                        <div class="text-secondary mb-4 line-height-2">
                            BlackBird collection of minimal, sleek and functional Carryalls were designed
                            with creatives in mind.
                        </div>
                        <button type="button" class="btn btn-outline-dark px-4 px-md-5 py-2 py-md-3 rounded-0"> READ MORE </button>
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
        return {
            BreadcrumbItems: [
                {title: 'Dashboard', route: 'dashboard'},
                {title: 'Sliders', route: 'slider'},
            ],
        }
    },
    mounted() {
        this.bannerOwlCarousel();
    },
    methods: {

        /* Function to banner owl carousel */
        bannerOwlCarousel() {
            $('.banner-owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                animateOut: 'fadeOut',
                autoplay:true,
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

    }
}

</script>
