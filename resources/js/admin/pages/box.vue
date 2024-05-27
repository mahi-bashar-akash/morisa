<template>

    <!-- breadcrumb -->
    <div class="d-sm-flex justify-content-between align-items-center">
        <breadcrumb :items="BreadcrumbItems" moduleName="Boxes"/>
    </div>

    <div class="row">
        <div class="col-md-4">
            <div class="p-4 shadow-sm bg-white">
                <div class="mb-4">
                    <img :src="`/images/boxes/box-1.webp`" class="width-75 height-75" alt="box 1">
                </div>
                <div class="mb-3">
                    <div class="fw-bold"> Free Shipping Worldwide</div>
                </div>
                <div class="text-start text-secondary text-opacity-75 line-height-2">
                    Mirum est notare quam littera gothica, quam nunc putamus parum claram
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="p-4 shadow-sm bg-white">
                <div class="mb-4">
                    <img :src="`/images/boxes/box-2.webp`" class="width-75 height-75" alt="box 2">
                </div>
                <div class="mb-3">
                    <div class="fw-bold"> Money Back Guarantee</div>
                </div>
                <div class="text-start text-secondary text-opacity-75 line-height-2">
                    Mirum est notare quam littera gothica, quam nunc putamus parum claram
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="p-4 shadow-sm bg-white">
                <div class="mb-4">
                    <img :src="`/images/boxes/box-3.webp`" class="width-75 height-75" alt="box 3">
                </div>
                <div class="mb-3">
                    <div class="fw-bold"> Online Support 24/7</div>
                </div>
                <div class="text-start text-secondary text-opacity-75 line-height-2">
                    Mirum est notare quam littera gothica, quam nunc putamus parum claram
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
                {title: 'Boxes', route: 'box'},
            ],
        }
    },
    mounted() {

    },
    methods: {}
}

</script>
