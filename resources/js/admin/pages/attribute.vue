<template>

    <div class="d-flex justify-content-end mb-4">
        <button type="button" class="btn btn-theme width-120 py-2 rounded-0" @click="openManageModal()">
            New
        </button>
    </div>

    <div class="table-responsive">
        <table class="table">

            <!-- Attribute header -->
            <thead>
                <tr class="p-3">
                    <th class="ps-4 py-3">
                        <div class="min-width-200">
                            Attribute
                        </div>
                    </th>
                    <th class="ps-4 py-3">
                        <div class="min-width-400">
                            Types
                        </div>
                    </th>
                    <th class="ps-4 py-3">
                        <div class="min-width-100">
                            Action
                        </div>
                    </th>
                </tr>
            </thead>

            <!-- Attribute body -->
            <tbody>

                <!-- Attribute list -->
                <tr class="align-middle">
                    <td class="ps-4 py-3">
                        <div class="min-width-200">
                            Categories
                        </div>
                    </td>
                    <td class="ps-4 py-3">
                        <div class="min-width-400">
                            Male, Female, Children, Accessories
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

                <tr class="align-middle">
                    <td class="ps-4 py-3">
                        <div class="min-width-200">
                            Brands
                        </div>
                    </td>
                    <td class="ps-4 py-3">
                        <div class="min-width-400">
                            Calvin Klein, Diesel, Polo, Tommy Hilfiger
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

                <tr class="align-middle">
                    <td class="ps-4 py-3">
                        <div class="min-width-200">
                            Sizes
                        </div>
                    </td>
                    <td class="ps-4 py-3">
                        <div class="min-width-400">
                            L, M, S, XL, XS, XXL
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

                <tr class="align-middle">
                    <td class="ps-4 py-3">
                        <div class="min-width-200">
                            Colors
                        </div>
                    </td>
                    <td class="ps-4 py-3">
                        <div class="min-width-400">
                            Black, Blue, Green, Grey, Red, White
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

    <!-- Attribute manage modal -->
    <div class="modal fade" id="manageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <form class="modal-content rounded-0 border-0 p-4">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        <template v-if="this.formData.id === undefined"> Create </template>
                        <template v-if="this.formData.id !== undefined"> Edit </template>
                        Attribute
                    </h1>
                    <button type="button" class="btn-close shadow-none" @click="closeManageModal()"></button>
                </div>
                <div class="modal-body border-0">
                    <div class="form-group mb-3">
                        <label for="attribute-title" class="form-label"> Attribute Title </label>
                        <input id="attribute-title" type="text" name="attribute-title" class="form-control p-3 border shadow-none rounded-0" required autocomplete="new-attribute-title" v-model="formData.attributeTitle">
                    </div>

                    <div class="form-group mb-3" v-for="(each, index) in multipleParam.attributeType">
                        <label for="attribute-types" class="form-label"> Attribute Types </label>
                        <div class="position-relative">
                            <input id="attribute-types" type="text" name="attribute-types" class="form-control p-3 border shadow-none rounded-0" required autocomplete="new-attribute-types" v-model="each.attributeTypes">
                            <div v-if="multipleParam.attributeType.length > 1" class="position-absolute top-50 end-0 translate-middle-y">
                                <button type="button" @click="deleteAttributeTypes(index)" class="btn-icon rounded-circle me-2">
                                    <i class="bi bi-trash2 text-danger"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn border-0 py-2 px-4 text-theme" @click="addGroup()">
                        <i class="bi bi-plus-circle me-2"></i> Add new attribute types
                    </button>
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

    <!-- Attribute delete modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <form class="modal-content rounded-0 border-0 p-4">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"> Delete Attribute </h1>
                    <button type="button" class="btn-close shadow-none" @click="closeDeleteModal()"></button>
                </div>
                <div class="modal-body border-0">
                    <div class="mb-3 text-center pt-4 fs-4"> Are you sure ? </div>
                </div>
                <div class="modal-footer border-0 d-flex justify-content-between align-items-center">
                    <div class="col-5">
                        <button type="button" class="btn btn-secondary py-2 w-100 rounded-0" @click="closeDeleteModal()">
                            Close
                        </button>
                    </div>
                    <div class="col-5">
                        <button type="button" class="btn btn-theme py-2 w-100 rounded-0">
                            Save
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
                attributeTitle: '',
                attributeTypes: '',
            },
            multipleParam: {
                attributeType: [{types: ''}],
            },
        }
    },
    mounted() {

    },
    methods: {

        /* --- --- --- remove attribute types --- --- --- */
        deleteAttributeTypes(index) {
            this.multipleParam.attributeType.splice(index, 1);
        },

        /* --- --- --- add attribute types --- --- --- */
        addGroup() {
            this.multipleParam.attributeType.push(
                { types: '' }
            );
        },

        /* --- --- --- open manage model --- --- --- */
        openManageModal(){
            this.multipleParam = {
                attributeType: [
                    { types: '' }
                ]
            };
            const myModal = new bootstrap.Modal("#manageModal", {keyboard: false});
            myModal.show();
        },

        /* --- --- --- close manage modal --- --- --- */
        closeManageModal(){
            this.multipleParam = {
                attributeType: [
                    { types: '' }
                ]
            };
            let myModalEl = document.getElementById('manageModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

        /* --- --- --- open delete model --- --- --- */
        openDeleteModal(){
            const myModal = new bootstrap.Modal("#deleteModal", {keyboard: false});
            myModal.show();
        },

        /* --- --- --- close manage modal --- --- --- */
        closeDeleteModal(){
            let myModalEl = document.getElementById('deleteModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        }

    }
}

</script>
