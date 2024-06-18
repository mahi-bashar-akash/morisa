<template>

    <div class="d-flex justify-content-end mb-4">
        <button type="button" class="btn btn-theme width-120 py-2 rounded-0" @click="openManageModal()">
            New
        </button>
    </div>

    <div class="height-calc-250 scrollbar px-4">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">

            <!-- blog card -->
            <div class="mb-3">
                <div class="card border rounded-0 p-3">
                    <div class="card-body bg-white border-0 rounded-0">
                        <div class="position-relative">
                            <img :src="`/images/blog/blog-1.jpg`"
                                 class="img-fluid object-fit-cover height-250 w-100 image-effect" alt="blog 1">
                            <div class="position-absolute top-0 start-0 p-3">
                                <div
                                    class="width-45 height-45 d-flex justify-content-center align-items-center rounded-circle shadow bg-white fw-bold">
                                    01
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-white border-0 rounded-0">
                        <div class="p-3 fw-medium text-secondary text-opacity-75 small">
                            Post Date: August 10, 2022
                        </div>
                        <div class="px-3 mb-3 truncate-to-1-line fs-5 text-dark">
                            Blog Title: Aypi Non Habent Claritatem Insitam.
                        </div>
                        <div class="px-3 text-secondary text-opacity-75 pb-3 small">
                            Blog Author: HasTech
                        </div>
                        <div class="px-3 truncate-to-3-line text-secondary mb-4">
                            Blog Description: It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout. The point of using Lorem Ipsum is
                            that it has a more-or-less normal distribution of letters, as opposed to using
                            'Content here, content here'.
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

            <!-- blog card -->
            <div class="mb-3">
                <div class="card border rounded-0 p-3">
                    <div class="card-body bg-white border-0 rounded-0">
                        <div class="position-relative">
                            <img :src="`/images/blog/blog-2.jpg`"
                                 class="img-fluid object-fit-cover height-250 w-100 image-effect" alt="blog 1">
                            <div class="position-absolute top-0 start-0 p-3">
                                <div
                                    class="width-45 height-45 d-flex justify-content-center align-items-center rounded-circle shadow bg-white fw-bold">
                                    02
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-white border-0 rounded-0">
                        <div class="p-3 fw-medium text-secondary text-opacity-75 small">
                            Post Date: August 10, 2022
                        </div>
                        <div class="px-3 mb-3 truncate-to-1-line fs-5 text-dark">
                            Blog Title: Aypi Non Habent Claritatem Insitam.
                        </div>
                        <div class="px-3 text-secondary text-opacity-75 pb-3 small">
                            Blog Author: HasTech
                        </div>
                        <div class="px-3 truncate-to-3-line text-secondary mb-4">
                            Blog Description: It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout. The point of using Lorem Ipsum is
                            that it has a more-or-less normal distribution of letters, as opposed to using
                            'Content here, content here'.
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

            <!-- blog card -->
            <div class="mb-3">
                <div class="card border rounded-0 p-3">
                    <div class="card-body bg-white border-0 rounded-0">
                        <div class="position-relative">
                            <img :src="`/images/blog/blog-3.jpg`"
                                 class="img-fluid object-fit-cover height-250 w-100 image-effect" alt="blog 1">
                            <div class="position-absolute top-0 start-0 p-3">
                                <div
                                    class="width-45 height-45 d-flex justify-content-center align-items-center rounded-circle shadow bg-white fw-bold">
                                    03
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-white border-0 rounded-0">
                        <div class="p-3 fw-medium text-secondary text-opacity-75 small">
                            Post Date: August 10, 2022
                        </div>
                        <div class="px-3 mb-3 truncate-to-1-line fs-5 text-dark">
                            Blog Title: Aypi Non Habent Claritatem Insitam.
                        </div>
                        <div class="px-3 text-secondary text-opacity-75 pb-3 small">
                            Blog Author: HasTech
                        </div>
                        <div class="px-3 truncate-to-3-line text-secondary mb-4">
                            Blog Description: It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout. The point of using Lorem Ipsum is
                            that it has a more-or-less normal distribution of letters, as opposed to using
                            'Content here, content here'.
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

            <!-- blog card -->
            <div class="mb-3">
                <div class="card border rounded-0 p-3">
                    <div class="card-body bg-white border-0 rounded-0">
                        <div class="position-relative">
                            <img :src="`/images/blog/blog-1.jpg`"
                                 class="img-fluid object-fit-cover height-250 w-100 image-effect" alt="blog 1">
                            <div class="position-absolute top-0 start-0 p-3">
                                <div
                                    class="width-45 height-45 d-flex justify-content-center align-items-center rounded-circle shadow bg-white fw-bold">
                                    04
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-white border-0 rounded-0">
                        <div class="p-3 fw-medium text-secondary text-opacity-75 small">
                            Post Date: August 10, 2022
                        </div>
                        <div class="px-3 mb-3 truncate-to-1-line fs-5 text-dark">
                            Blog Title: Aypi Non Habent Claritatem Insitam.
                        </div>
                        <div class="px-3 text-secondary text-opacity-75 pb-3 small">
                            Blog Author: HasTech
                        </div>
                        <div class="px-3 truncate-to-3-line text-secondary mb-4">
                            Blog Description: It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout. The point of using Lorem Ipsum is
                            that it has a more-or-less normal distribution of letters, as opposed to using
                            'Content here, content here'.
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

            <!-- blog card -->
            <div class="mb-3">
                <div class="card border rounded-0 p-3">
                    <div class="card-body bg-white border-0 rounded-0">
                        <div class="position-relative">
                            <img :src="`/images/blog/blog-2.jpg`"
                                 class="img-fluid object-fit-cover height-250 w-100 image-effect" alt="blog 1">
                            <div class="position-absolute top-0 start-0 p-3">
                                <div
                                    class="width-45 height-45 d-flex justify-content-center align-items-center rounded-circle shadow bg-white fw-bold">
                                    05
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-white border-0 rounded-0">
                        <div class="p-3 fw-medium text-secondary text-opacity-75 small">
                            Post Date: August 10, 2022
                        </div>
                        <div class="px-3 mb-3 truncate-to-1-line fs-5 text-dark">
                            Blog Title: Aypi Non Habent Claritatem Insitam.
                        </div>
                        <div class="px-3 text-secondary text-opacity-75 pb-3 small">
                            Blog Author: HasTech
                        </div>
                        <div class="px-3 truncate-to-3-line text-secondary mb-4">
                            Blog Description: It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout. The point of using Lorem Ipsum is
                            that it has a more-or-less normal distribution of letters, as opposed to using
                            'Content here, content here'.
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

            <!-- blog card -->
            <div class="mb-3">
            <div class="card border rounded-0 p-3">
                <div class="card-body bg-white border-0 rounded-0">
                    <div class="position-relative">
                        <img :src="`/images/blog/blog-3.jpg`"
                             class="img-fluid object-fit-cover height-250 w-100 image-effect" alt="blog 1">
                        <div class="position-absolute top-0 start-0 p-3">
                            <div
                                class="width-45 height-45 d-flex justify-content-center align-items-center rounded-circle shadow bg-white fw-bold">
                                06
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer bg-white border-0 rounded-0">
                    <div class="p-3 fw-medium text-secondary text-opacity-75 small">
                        Post Date: August 10, 2022
                    </div>
                    <div class="px-3 mb-3 truncate-to-1-line fs-5 text-dark">
                        Blog Title: Aypi Non Habent Claritatem Insitam.
                    </div>
                    <div class="px-3 text-secondary text-opacity-75 pb-3 small">
                        Blog Author: HasTech
                    </div>
                    <div class="px-3 truncate-to-3-line text-secondary mb-4">
                        Blog Description: It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of letters, as opposed to using
                        'Content here, content here'.
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

    <!-- Blog manage modal -->
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
                        Blog
                    </h1>
                    <button type="button" class="btn-close shadow-none" @click="closeManageModal()"></button>
                </div>
                <div class="modal-body border-0">
                    <div class="form-group mv-3">
                        <label for="file-upload"
                               class="form-label border w-100 px-3 height-200 d-flex justify-content-center align-items-center flex-column cursor-pointer">
                            <input type="file" name="file-upload" id="file-upload" hidden="hidden">
                            <i class="bi bi-cloud-check fs-1"></i>
                            <span class="fw-bold small">
                                Upload File
                            </span>
                        </label>
                    </div>
                    <div class="form-group mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input id="name" type="text" name="name"
                               class="form-control p-3 border shadow-none rounded-0" required
                               autoComplete="new-name" v-model="formData.name">
                    </div>
                    <div class="form-group mb-3">
                        <label for="author" class="form-label">Author</label>
                        <input id="author" type="text" name="author"
                               class="form-control p-3 border shadow-none rounded-0" required
                               autoComplete="new-author" v-model="formData.author">
                    </div>
                    <div class="form-group mb-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea name="description" id="description" cols="30" rows="5"
                                  class="form-textarea p-3 border shadow-none rounded-0 resize" required
                                  autocomplete="new-description" v-model="formData.description"></textarea>
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

    <!-- Blog delete modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <form class="modal-content rounded-0 border-0 p-4">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"> Delete Blog </h1>
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
    data() {
        return {
            formData: {
                uploadImage: null,
                name: '',
                author: '',
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
