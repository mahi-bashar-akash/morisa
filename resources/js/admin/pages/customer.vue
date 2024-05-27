<template>

    <!-- breadcrumb -->
    <div class="d-sm-flex justify-content-between align-items-center">
        <breadcrumb :items="BreadcrumbItems" moduleName="Customers"/>
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
                {title: 'Customers', route: 'customer'},
            ],
        }
    },
    mounted() {

    },
    methods: {}
}

</script>
