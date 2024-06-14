<template>

    <div class="d-flex justify-content-end mb-4">
        <button type="button" class="btn btn-theme width-120 py-2 rounded-0" data-bs-toggle="modal" data-bs-target="#manageModal">
            New
        </button>
    </div>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">

        <!-- box card -->
        <div class="mb-3">
            <div class="card border rounded-0 p-3">
                <div class="card-body bg-white border-0 rounded-0">
                    <div class="position-relative">
                        <div class="w-100 height-150 d-flex justify-content-center align-items-center">
                            <img :src="`/images/boxes/box-1.webp`" class="img-fluid object-fit-cover width-75 height-75" alt="banner 1">
                        </div>
                        <div class="position-absolute top-0 start-0 p-3">
                            <div class="width-45 height-45 d-flex justify-content-center align-items-center rounded-circle shadow bg-white fw-bold">
                                01
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer bg-white border-0 rounded-0">
                    <div class="fw-bold mb-3 fs-6"> Free Shipping Worldwide </div>
                    <div class="text-secondary mb-3">
                        Mirum est notare quam littera gothica, quam nunc putamus parum claram
                    </div>
                    <button type="button" class="btn btn-outline-dark rounded-0 py-2 width-95 border-3" data-bs-toggle="modal" data-bs-target="#manageModal">
                        Edit
                    </button>
                </div>
            </div>
        </div>

        <!-- box card -->
        <div class="mb-3">
            <div class="card border rounded-0 p-3">
                <div class="card-body bg-white border-0 rounded-0">
                    <div class="position-relative">
                        <div class="w-100 height-150 d-flex justify-content-center align-items-center">
                            <img :src="`/images/boxes/box-2.webp`" class="img-fluid object-fit-cover width-75 height-75" alt="banner 1">
                        </div>
                        <div class="position-absolute top-0 start-0 p-3">
                            <div class="width-45 height-45 d-flex justify-content-center align-items-center rounded-circle shadow bg-white fw-bold">
                                02
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer bg-white border-0 rounded-0">
                    <div class="fw-bold mb-3 fs-6"> Money Back Guarantee </div>
                    <div class="text-secondary mb-3">
                        Mirum est notare quam littera gothica, quam nunc putamus parum claram
                    </div>
                    <button type="button" class="btn btn-outline-dark rounded-0 py-2 width-95 border-3" data-bs-toggle="modal" data-bs-target="#manageModal">
                        Edit
                    </button>
                </div>
            </div>
        </div>

        <!-- box card -->
        <div class="mb-3">
            <div class="card border rounded-0 p-3">
                <div class="card-body bg-white border-0 rounded-0">
                    <div class="position-relative">
                        <div class="w-100 height-150 d-flex justify-content-center align-items-center">
                            <img :src="`/images/boxes/box-3.webp`" class="img-fluid object-fit-cover width-75 height-75" alt="banner 1">
                        </div>
                        <div class="position-absolute top-0 start-0 p-3">
                            <div class="width-45 height-45 d-flex justify-content-center align-items-center rounded-circle shadow bg-white fw-bold">
                                03
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer bg-white border-0 rounded-0">
                    <div class="fw-bold mb-3 fs-6"> Online Support 24/7 </div>
                    <div class="text-secondary mb-3">
                        Mirum est notare quam littera gothica, quam nunc putamus parum claram
                    </div>
                    <button type="button" class="btn btn-outline-dark rounded-0 py-2 width-95 border-3" data-bs-toggle="modal" data-bs-target="#manageModal">
                        Edit
                    </button>
                </div>
            </div>
        </div>

    </div>

    <!-- Slider manage modal -->
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
                    <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body border-0">
                    <div class="form-group mv-3">
                        <label for="box-upload-file" class="form-label border w-100 px-3 height-200 d-flex justify-content-center align-items-center flex-column cursor-pointer">
                            <input type="file" name="box-upload-file" id="box-upload-file" hidden="hidden">
                            <i class="bi bi-cloud-check fs-1"></i>
                            <span class="fw-bold small">
                                Upload File
                            </span>
                        </label>
                    </div>
                    <div class="form-group mb-3">
                        <label for="box-catalogue-title" class="form-label">Box Title</label>
                        <input id="box-catalogue-title" type="text" name="box-catalogue-title" class="form-control p-3 border shadow-none rounded-0" required autocomplete="new-box-catalogue-title">
                    </div>
                </div>
                <div class="modal-footer border-0">
                    <button type="button" class="btn btn-secondary py-2 width-95 rounded-0" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="submit" class="btn btn-theme py-2 width-95 rounded-0">
                        Save
                    </button>
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
                uploadImage: null,
                title: '',
            }
        }
    },
    mounted() {

    },
    methods: {

    }
}

</script>
