<template>

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
