<template>

    <div class="d-flex justify-content-end mb-4">
        <button type="button" class="btn btn-theme width-120 py-2 rounded-0" data-bs-toggle="modal" data-bs-target="#manageModal">
            New
        </button>
    </div>

    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">

        <!-- Slider card -->
        <div class="mb-3">
            <div class="card border rounded-0 p-3">
                <div class="card-body bg-white border-0 rounded-0">
                    <div class="position-relative">
                        <img :src="`/images/banner/banner-1.jpg`" class="img-fluid object-fit-cover height-250" alt="banner 1">
                        <div class="position-absolute top-0 start-0 p-3">
                            <div class="width-45 height-45 d-flex justify-content-center align-items-center rounded-circle shadow bg-white fw-bold">
                                01
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer bg-white border-0 rounded-0">
                    <div class="fw-medium"> CLOTHING </div>
                    <div class="fw-medium mb-3"> NEW COLLECTION </div>
                    <div class="fw-bold mb-3 fs-4"> SUMMER FASHION </div>
                    <div class="text-secondary mb-3">
                        We crack for this purely rock style with stitched quills in relief and metallic hardware.
                    </div>
                    <button type="button" class="btn btn-outline-dark rounded-0 py-2 width-95 border-3" data-bs-toggle="modal" data-bs-target="#manageModal">
                        Edit
                    </button>
                </div>
            </div>
        </div>

        <!-- Slider card -->
        <div class="mb-3">
            <div class="card border rounded-0 p-3">
                <div class="card-body bg-white border-0 rounded-0">
                    <div class="position-relative">
                        <img :src="`/images/banner/banner-4.jpg`" class="img-fluid object-fit-cover height-250" alt="banner 2">
                        <div class="position-absolute top-0 start-0 p-3">
                            <div class="width-45 height-45 d-flex justify-content-center align-items-center rounded-circle shadow bg-white fw-bold">
                                02
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer bg-white border-0 rounded-0">
                    <div class="fw-medium"> T-SHIRT </div>
                    <div class="fw-medium mb-3"> NEW COLLECTION </div>
                    <div class="fw-bold mb-3 fs-4"> MODERN FASHION </div>
                    <div class="text-secondary mb-3">
                        BlackBird collection of minimal, sleek and functional Carryalls were designed with creatives in mind.
                    </div>
                    <button type="button" class="btn btn-outline-dark rounded-0 py-2 width-95 border-3" data-bs-toggle="modal" data-bs-target="#manageModal">
                        Edit
                    </button>
                </div>
            </div>
        </div>

        <!-- Slider card -->
        <div class="mb-3">
            <div class="card border rounded-0 p-3">
                <div class="card-body bg-white border-0 rounded-0">
                    <div class="position-relative">
                        <img :src="`/images/banner/banner-2.jpg`" class="img-fluid object-fit-cover height-250" alt="banner 2">
                        <div class="position-absolute top-0 start-0 p-3">
                            <div class="width-45 height-45 d-flex justify-content-center align-items-center rounded-circle shadow bg-white fw-bold">
                                03
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer bg-white border-0 rounded-0">
                    <div class="fw-medium"> T-SHIRT </div>
                    <div class="fw-medium mb-3"> NEW COLLECTION </div>
                    <div class="fw-bold mb-3 fs-4"> MODERN FASHION </div>
                    <div class="text-secondary mb-3">
                        BlackBird collection of minimal, sleek and functional Carryalls were designed with creatives in mind.
                    </div>
                    <button type="button" class="btn btn-outline-dark rounded-0 py-2 width-95 border-3" data-bs-toggle="modal" data-bs-target="#manageModal">
                        Edit
                    </button>
                </div>
            </div>
        </div>

        <!-- Slider card -->
        <div class="mb-3">
            <div class="card border rounded-0 p-3">
                <div class="card-body bg-white border-0 rounded-0">
                    <div class="position-relative">
                        <img :src="`/images/banner/banner-3.jpg`" class="img-fluid object-fit-cover height-250" alt="banner 2">
                        <div class="position-absolute top-0 start-0 p-3">
                            <div class="width-45 height-45 d-flex justify-content-center align-items-center rounded-circle shadow bg-white fw-bold">
                                04
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer bg-white border-0 rounded-0">
                    <div class="fw-medium"> T-SHIRT </div>
                    <div class="fw-medium mb-3"> NEW COLLECTION </div>
                    <div class="fw-bold mb-3 fs-4"> MODERN FASHION </div>
                    <div class="text-secondary mb-3">
                        BlackBird collection of minimal, sleek and functional Carryalls were designed with creatives in mind.
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
                        Slider
                    </h1>
                    <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body border-0">
                    <div class="form-group mv-3">
                        <label for="slider-upload-file" class="form-label border w-100 px-3 height-200 d-flex justify-content-center align-items-center flex-column cursor-pointer">
                            <input type="file" name="slider-upload-file" id="slider-upload-file" hidden="hidden">
                            <i class="bi bi-cloud-check fs-1"></i>
                            <span class="fw-bold small">
                                Upload File
                            </span>
                        </label>
                    </div>
                    <div class="form-group mb-3">
                        <label for="slider-catalogue-title" class="form-label">Catalogue Title</label>
                        <input id="slider-catalogue-title" type="text" name="slider-catalogue-title" class="form-control p-3 border shadow-none rounded-0" required autocomplete="new-slider-catalogue-title">
                    </div>
                    <div class="form-group mb-3">
                        <label for="slider-description" class="form-label">Description</label>
                        <textarea name="slider-description" id="slider-description" cols="30" rows="5" class="form-textarea p-3 border shadow-none rounded-0" required autocomplete="new-slider-description"></textarea>
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
                uploadFile: null,
            }
        }
    },
    mounted() {

    },
    methods: {

    }
}

</script>
