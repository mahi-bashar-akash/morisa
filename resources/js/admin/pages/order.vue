<template>

    <div class="table-responsive height-calc-191 scrollbar px-1">
        <table class="table">
            <!-- Order header -->
            <thead>
            <tr class="p-3">
                <th class="ps-4 py-3">
                    <div class="min-width-150 max-width-200">
                        Name
                    </div>
                </th>
                <th class="ps-4 py-3">
                    <div class="min-width-150 max-width-200">
                        Order (item count)
                    </div>
                </th>
                <th class="ps-4 py-3">
                    <div class="min-width-150 max-width-200">
                        Order (reward)
                    </div>
                </th>
                <th class="ps-4 py-3">
                    <div class="min-width-150 max-width-200">
                        Coupon (code)
                    </div>
                </th>
                <th class="ps-4 py-3">
                    <div class="min-width-150 max-width-200">
                        Amount (Cash)
                    </div>
                </th>
                <th class="ps-4 py-3">
                    <div class="min-width-150 max-width-200">
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
                    <div class="min-width-150 max-width-200">
                        <div class="truncate-to-1-line">
                            Customer name 1
                        </div>
                    </div>
                </td>
                <td class="ps-4 py-3">
                    <div class="min-width-150 max-width-200">
                        <div class="truncate-to-1-line">
                            4
                        </div>
                    </div>
                </td>
                <td class="ps-4 py-3">
                    <div class="min-width-150 max-width-200">
                        <div class="truncate-to-1-line">
                            3000
                        </div>
                    </div>
                </td>
                <td class="ps-4 py-3">
                    <div class="min-width-150 max-width-200">
                        <div class="truncate-to-1-line">
                            CUPON@#$@#$!#$
                        </div>
                    </div>
                </td>
                <td class="ps-4 py-3">
                    <div class="min-width-150 max-width-200">
                        <div class="truncate-to-1-line">
                            12000
                        </div>
                    </div>
                </td>
                <td class="ps-4 py-2">
                    <div class="min-width-150 max-width-200">
                        <div class="d-flex justify-content-start align-items-center gap-2">
                            <a href="javascript:void(0)" class="btn-icon rounded-circle">
                                <i class="bi bi-eye text-secondary"></i>
                            </a>
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
            formData: {}
        }
    },
    mounted() {

    },
    methods: {}
}

</script>
