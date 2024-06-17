<template>

    <div class="height-calc-190 scrollbar px-1">
        <div class="table-responsive">
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
                <tr class="align-middle">
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
                                Dhnamondi, Dhaka, Bangladesh
                            </div>
                        </div>
                    </td>
                    <td class="ps-4 py-2">
                        <div class="min-width-150">
                            <div class="d-flex justify-content-start align-items-center gap-2">
                                <a href="javascript:void(0)" class="btn-icon rounded-circle">
                                    <i class="bi bi-view-list text-secondary"></i>
                                </a>
                            </div>
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
    </div>
    <div class="height-50">
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
    </div>

</template>

<script>

export default {
    data(){
        return{

            formData: {  }

        }
    },
    mounted() {

    },
    methods: {  }
}

</script>
