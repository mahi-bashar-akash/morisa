<template>

    <div class="table-responsive">
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
                <tr class="align-middle">
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
                                <button type="button" class="btn-icon rounded-circle">
                                    <i class="bi bi-eye text-secondary"></i>
                                </button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
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
