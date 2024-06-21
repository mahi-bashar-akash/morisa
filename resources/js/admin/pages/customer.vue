<template>

    <div class="position-absolute customer-details bg-white border" :class="{ 'active' : customerDetailsActive }">
        <div class="p-3 d-flex align-items-center justify-content-end">
            <button type="button" class="btn-icon rounded-circle box-inside-shadow" @click="closeSidebarCustomerDetails()">
                <i class="bi bi-x-lg"></i>
            </button>
        </div>
        <div class="d-flex justify-content-center">
            <img :src="`/images/avatar/avatar-04.jpg`" class="img-fluid width-150 height-150 rounded-circle">
        </div>
        <div class="mt-4 text-center">
            <div class="mb-3">
                <div class="fw-medium">
                    Full Name
                </div>
                <div class="text-secondary">
                    Mahi Bashar Akash
                </div>
            </div>
            <div class="mb-3">
                <div class="fw-medium">
                    Email
                </div>
                <div class="text-secondary">
                    mahibashar2023@gmail.com
                </div>
            </div>
            <div class="mb-3">
                <div class="fw-medium">
                    Phone Number
                </div>
                <div class="text-secondary">
                    +880-01400125289
                </div>
            </div>
            <div class="mb-3">
                <div class="fw-medium">
                    Present Address
                </div>
                <div class="text-secondary">
                    Dhnamondi, Dhaka-1209, Bangladesh
                </div>
            </div>
        </div>
    </div>

    <div class="table-responsive table-responsive height-calc-191 scrollbar px-1">
        <table class="table">

            <!-- Customer header -->
            <thead>
                <tr class="p-3">
                    <th class="ps-4 py-3">
                        <div class="min-width-150">
                            Name
                        </div>
                    </th>
                    <th class="ps-4 py-3">
                        <div class="min-width-150">
                            Email
                        </div>
                    </th>
                    <th class="ps-4 py-3">
                        <div class="min-width-150">
                            Phone Number
                        </div>
                    </th>
                    <th class="ps-4 py-3">
                        <div class="min-width-150">
                            Present Address
                        </div>
                    </th>
                    <th class="ps-4 py-3">
                        <div class="min-width-150">
                            Action
                        </div>
                    </th>
                </tr>
            </thead>

            <!-- customer body -->
            <tbody>

                <!-- customer list -->
                <tr class="align-middle" v-for="each in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]">
                    <td class="ps-4 py-3">
                        <div class="min-width-150">
                            <div class="truncate-to-1-line">
                                Customer name 1
                            </div>
                        </div>
                    </td>
                    <td class="ps-4 py-3">
                        <div class="min-width-150">
                            <div class="truncate-to-1-line">
                                customer@gmail.com
                            </div>
                        </div>
                    </td>
                    <td class="ps-4 py-3">
                        <div class="min-width-150">
                            <div class="truncate-to-1-line">
                                0123456789
                            </div>
                        </div>
                    </td>
                    <td class="ps-4 py-3">
                        <div class="min-width-150">
                            <div class="truncate-to-1-line">
                                Dhnamondi, Dhaka-1209, Bangladesh
                            </div>
                        </div>
                    </td>
                    <td class="ps-4 py-2">
                        <div class="min-width-150">
                            <div class="d-flex justify-content-start align-items-center gap-2">
                                <button type="button" class="btn-icon rounded-circle box-inside-shadow" @click="openSidebarCustomerDetails()">
                                    <i class="bi bi-view-list text-secondary"></i>
                                </button>
                            </div>
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>

    <div class="d-flex justify-content-between align-items-center border-top py-3">
        <div aria-label="Page navigation example" class="admin-pagination">
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

</template>

<script>

export default {
    data() {
        return {
            customerDetailsActive: false,
            formData: {}
        }
    },
    mounted() {

    },
    methods: {

        /* --- --- --- open sidebar customer details --- --- --- */
        openSidebarCustomerDetails() {
            this.customerDetailsActive = true;
        },

        /* --- --- --- close sidebar customer details --- --- --- */
        closeSidebarCustomerDetails() {
            this.customerDetailsActive = false;
        },
    }
}

</script>
