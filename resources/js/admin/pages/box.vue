<template>

    <div class="d-flex justify-content-end mb-4">
        <button type="button" class="btn btn-theme width-120 py-2 rounded-0" @click="openManageModal()">
            New
        </button>
    </div>

    <div class="height-calc-200 scrollbar px-4">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">

            <!-- box card -->
            <div class="mb-3">
                <div class="card border rounded-0 p-3">
                    <div class="card-body bg-white border-0 rounded-0">
                        <div class="position-relative">
                            <div class="w-100 height-150 d-flex justify-content-center align-items-center">
                                <img :src="`/images/boxes/box-1.webp`" class="img-fluid object-fit-cover width-75 height-75"
                                     alt="banner 1">
                            </div>
                            <div class="position-absolute top-0 start-0 p-3">
                                <div
                                    class="width-45 height-45 d-flex justify-content-center align-items-center rounded-circle shadow bg-white fw-bold">
                                    01
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-white border-0 rounded-0">
                        <div class="fw-bold mb-3 fs-6">
                            Free Shipping Worldwide
                        </div>
                        <div class="text-secondary mb-3">
                            Mirum est notare quam littera gothica, quam nunc putamus parum claram
                        </div>
                        <div class="d-flex justify-content-start align-items-center gap-3">
                            <button type="button" class="btn btn-outline-dark rounded-0 py-2 width-95 border-2"
                                    @click="openManageModal()">
                                Edit
                            </button>
                            <button type="button" class="btn btn-outline-danger rounded-0 py-2 width-95 border-2"
                                    @click="openDeleteModal()">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- box card -->
            <div class="mb-3">
                <div class="card border rounded-0 p-3">
                    <div class="card-body bg-white border-0 rounded-0">
                        <div class="position-relative">
                            <div class="w-100 height-150 d-flex justify-content-center align-items-center">
                                <img :src="`/images/boxes/box-2.webp`" class="img-fluid object-fit-cover width-75 height-75"
                                     alt="banner 1">
                            </div>
                            <div class="position-absolute top-0 start-0 p-3">
                                <div
                                    class="width-45 height-45 d-flex justify-content-center align-items-center rounded-circle shadow bg-white fw-bold">
                                    02
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-white border-0 rounded-0">
                        <div class="fw-bold mb-3 fs-6">
                            Money Back Guarantee
                        </div>
                        <div class="text-secondary mb-3">
                            Mirum est notare quam littera gothica, quam nunc putamus parum claram
                        </div>
                        <div class="d-flex justify-content-start align-items-center gap-3">
                            <button type="button" class="btn btn-outline-dark rounded-0 py-2 width-95 border-2"
                                    @click="openManageModal()">
                                Edit
                            </button>
                            <button type="button" class="btn btn-outline-danger rounded-0 py-2 width-95 border-2"
                                    @click="openDeleteModal()">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- box card -->
            <div class="mb-3">
                <div class="card border rounded-0 p-3">
                    <div class="card-body bg-white border-0 rounded-0">
                        <div class="position-relative">
                            <div class="w-100 height-150 d-flex justify-content-center align-items-center">
                                <img :src="`/images/boxes/box-3.webp`" class="img-fluid object-fit-cover width-75 height-75"
                                     alt="banner 1">
                            </div>
                            <div class="position-absolute top-0 start-0 p-3">
                                <div
                                    class="width-45 height-45 d-flex justify-content-center align-items-center rounded-circle shadow bg-white fw-bold">
                                    03
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-white border-0 rounded-0">
                        <div class="fw-bold mb-3 fs-6">
                            Online Support 24/7
                        </div>
                        <div class="text-secondary mb-3">
                            Mirum est notare quam littera gothica, quam nunc putamus parum claram
                        </div>
                        <div class="d-flex justify-content-start align-items-center gap-3">
                            <button type="button" class="btn btn-outline-dark rounded-0 py-2 width-95 border-2"
                                    @click="openManageModal()">
                                Edit
                            </button>
                            <button type="button" class="btn btn-outline-danger rounded-0 py-2 width-95 border-2"
                                    @click="openDeleteModal()">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <!-- Box manage modal -->
    <div class="modal fade" id="manageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        Box
                    </h1>
                    <button type="button" class="btn-close shadow-none" @click="closeManageModal()"></button>
                </div>
                <div class="modal-body border-0">
                    <div class="form-group mv-3">
                        <label for="upload-file"
                               class="form-label border w-100 px-3 height-200 d-flex justify-content-center align-items-center flex-column cursor-pointer">
                            <input type="file" name="upload-file" id="upload-file" hidden="hidden">
                            <i class="bi bi-cloud-check fs-1"></i>
                            <span class="fw-bold small">
                                Upload File
                            </span>
                        </label>
                    </div>
                    <div class="form-group mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input id="title" type="text" name="title" class="form-control p-3 border shadow-none rounded-0"
                               required autocomplete="new-title" v-model="formData.name">
                    </div>
                    <div class="form-group mb-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea name="description" class="form-textarea p-3 resize" id="description" cols="30"
                                  rows="5" required autocomplete="new-description" v-model="formData.description"></textarea>
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

    <!-- Box delete modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <form class="modal-content rounded-0 border-0 p-4">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Delete Box
                    </h1>
                    <button type="button" class="btn-close shadow-none" @click="closeDeleteModal()"></button>
                </div>
                <div class="modal-body border-0">
                    <div class="mb-3 text-center pt-4 fs-4">
                        Are you sure ?
                    </div>
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
    data() {
        return {
            formData: {
                uploadImage: null,
                name: '',
                description: '',
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
