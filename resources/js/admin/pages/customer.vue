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
                            <button type="button" class="btn-icon rounded-circle" @click="openViewModal()">
                                <i class="bi bi-view-list text-secondary"></i>
                            </button>
                        </div>
                    </div>
                </td>
            </tr>

            </tbody>
        </table>
    </div>

    <!-- Customer view modal -->
    <div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <form class="modal-content rounded-0 border-0 p-4">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        View Customer
                    </h1>
                    <button type="button" class="btn-close shadow-none" @click="closeViewModal()"></button>
                </div>
                <div class="modal-body border-0">

                    <div class="mb-3">
                        <div class="fw-medium"> Full Name </div>
                        <div class="text-secondary"> Mahi Bashar Akash </div>
                    </div>

                    <div class="mb-3">
                        <div class="fw-medium"> Email </div>
                        <div class="text-secondary"> mahibashar2023@gmail.com </div>
                    </div>

                    <div class="mb-3">
                        <div class="fw-medium"> Phone Number </div>
                        <div class="text-secondary"> 0123456789 </div>
                    </div>

                    <div>
                        <div class="fw-medium"> Present Address </div>
                        <div class="text-secondary"> Dhnamondi, Dhaka, Bangladesh </div>
                    </div>

                </div>
            </form>
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
    methods: {

        /* --- --- --- open manage modal --- --- --- */
        openViewModal(){
            const myModal = new bootstrap.Modal("#viewModal", {keyboard: false});
            myModal.show();
        },

        /* --- --- --- close manage modal --- --- --- */
        closeViewModal(){
            let myModalEl = document.getElementById('viewModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

    }
}

</script>
