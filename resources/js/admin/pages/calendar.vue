<template>

    <div class="d-flex justify-content-end mb-4">
        <button type="button" class="btn btn-theme width-120 py-2 rounded-0" @click="openManageModal()">
            New
        </button>
    </div>

    <div class="table-responsive height-calc-250 scrollbar px-1">
        <table class="table">

            <!-- Calendar header -->
            <thead>
            <tr class="p-3">
                <th class="ps-4 py-3">
                    <div class="min-width-200">
                        Name
                    </div>
                </th>
                <th class="ps-4 py-3">
                    <div class="min-width-100">
                        Date
                    </div>
                </th>
                <th class="ps-4 py-3">
                    <div class="min-width-100">
                        Start to end time
                    </div>
                </th>
                <th class="ps-4 py-3">
                    <div class="min-width-100">
                        Location
                    </div>
                </th>
                <th class="ps-4 py-3">
                    <div class="min-width-100">
                        Type
                    </div>
                </th>
                <th class="ps-4 py-3">
                    <div class="min-width-100">
                        Action
                    </div>
                </th>
            </tr>
            </thead>

            <!-- Calendar body -->
            <tbody>

            <!-- Calendar list -->
            <tr class="align-middle">
                <td class="ps-4 py-3">
                    <div class="min-width-200">
                        Event Name
                    </div>
                </td>
                <td class="ps-4 py-3">
                    <div class="min-width-100">
                        Event Date
                    </div>
                </td>
                <td class="ps-4 py-3">
                    <div class="min-width-100">
                        Event start to end time
                    </div>
                </td>
                <td class="ps-4 py-3">
                    <div class="min-width-100">
                        Event Location
                    </div>
                </td>
                <td class="ps-4 py-3">
                    <div class="min-width-100">
                        Event Type
                    </div>
                </td>
                <td class="ps-4 py-2">
                    <div class="min-width-100">
                        <div class="d-flex justify-content-start align-items-center gap-2">
                            <button type="button" class="btn-icon rounded-circle" @click="openManageModal()">
                                <i class="bi bi-pencil-square text-secondary"></i>
                            </button>
                            <button type="button" class="btn-icon rounded-circle" @click="openDeleteModal()">
                                <i class="bi bi-trash2 text-danger"></i>
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

    <!-- Calendar manage modal -->
    <div class="modal fade" id="manageModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <form class="modal-content rounded-0 border-0 p-4">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        <template v-if="this.formData.id === undefined">
                            Create
                        </template>
                        <template v-if="this.formData.id !== undefined">
                            Edit
                        </template>
                        Event
                    </h1>
                    <button type="button" class="btn-close shadow-none" @click="closeManageModal()"></button>
                </div>
                <div class="modal-body border-0">
                    <div class="form-group mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input id="name" type="text" name="name" class="form-control p-3 rounded-0 shadow-none border" required autocomplete="new-name" v-model="formData.name">
                    </div>
                    <div class="form-group mb-3">
                        <label for="date" class="form-label">Date</label>
                        <div class="position-relative">
                            <input id="date" type="text" name="date" class="form-control p-3 rounded-0 shadow-none border" required autocomplete="new-date" v-model="formData.date">
                            <div class="position-absolute top-50 end-0 translate-middle-y p-3 bg-light height-50 align-middle border">
                                <i class="bi bi-calendar2-check"></i>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="start-time" class="form-label">Start Time</label>
                                <div class="position-relative">
                                    <input id="start-time" type="text" name="start-time" class="form-control p-3 rounded-0 shadow-none border" required autocomplete="new-start-time" v-model="formData.startTime">
                                    <div class="position-absolute top-50 end-0 translate-middle-y p-3 bg-light height-51 align-middle border">
                                        <i class="bi bi-clock"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="end-time" class="form-label">End Time</label>
                                <div class="position-relative">
                                    <input id="end-time" type="text" name="end-time" class="form-control p-3 rounded-0 shadow-none border" required autocomplete="new-end-time" v-model="formData.endTime">
                                    <div class="position-absolute top-50 end-0 translate-middle-y p-3 bg-light height-51 align-middle border">
                                        <i class="bi bi-clock"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <label for="location" class="form-label">Location</label>
                        <input id="location" type="text" name="location" class="form-control p-3 rounded-0 shadow-none border" required autocomplete="new-event-location" v-model="formData.location">
                    </div>
                    <div class="form-group mb-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea name="description" class="form-textarea p-3 resize" id="description" cols="30" rows="5" required autocomplete="new-description" v-model="formData.description"></textarea>
                    </div>
                    <div class="form-group mb-3">
                        <label for="type" class="form-label">Type</label>
                        <select name="type" id="type" class="form-select p-3 rounded-0 shadow-none border" required autocomplete="new-type" v-model="formData.type">
                            <option value="select-a-type">Select a type</option>
                            <option value="danger">Danger</option>
                            <option value="success">Success</option>
                            <option value="primary">Primary</option>
                            <option value="info">Info</option>
                            <option value="dark">Dark</option>
                            <option value="warning">Warning</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer border-0">
                    <button type="button" class="btn btn-secondary py-2 width-95 rounded-0" @click="closeManageModal()">
                        Close
                    </button>
                    <button type="submit" class="btn btn-theme py-2 width-95 rounded-0">
                        Save
                    </button>
                </div>
            </form>
        </div>
    </div>

    <!-- Calendar delete modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <form class="modal-content rounded-0 border-0 p-4">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"> Delete Event </h1>
                    <button type="button" class="btn-close shadow-none" @click="closeDeleteModal()"></button>
                </div>
                <div class="modal-body border-0">
                    <div class="mb-3 text-center pt-4 fs-4"> Are you sure ?</div>
                </div>
                <div class="modal-footer border-0 d-flex justify-content-between align-items-center">
                    <div class="col-5">
                        <button type="button" class="btn btn-secondary py-2 w-100 rounded-0"
                                @click="closeDeleteModal()">
                            Close
                        </button>
                    </div>
                    <div class="col-5">
                        <button type="submit" class="btn btn-theme py-2 w-100 rounded-0">
                            Confirm
                        </button>
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
            formData: {
                name: '',
                date: '',
                startTime: '',
                endTime: '',
                location: '',
                description: '',
                type: 'select-a-type',
            }
        }
    },
    mounted() {
    },
    methods: {

        /* --- --- --- open manage model --- --- --- */
        openManageModal() {
            const myModal = new bootstrap.Modal("#manageModal", {keyboard: false});
            myModal.show();
        },

        /* --- --- --- close manage modal --- --- --- */
        closeManageModal() {
            let myModalEl = document.getElementById('manageModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

        /* --- --- --- open delete model --- --- --- */
        openDeleteModal() {
            const myModal = new bootstrap.Modal("#deleteModal", {keyboard: false});
            myModal.show();
        },

        /* --- --- --- close delete modal --- --- --- */
        closeDeleteModal() {
            let myModalEl = document.getElementById('deleteModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

    }
}

</script>
