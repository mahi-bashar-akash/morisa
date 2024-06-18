<template>

    <div class="d-flex justify-content-end mb-4">
        <button type="button" class="btn btn-theme width-120 py-2 rounded-0" @click="openManageModal()">
            New
        </button>
    </div>

    <div class="table-responsive height-calc-250 scrollbar px-1">
        <table class="table">

            <!-- Product header -->
            <thead>
            <tr class="p-3">
                <th class="ps-4 py-3">
                    <div class="min-width-150">
                        Name
                    </div>
                </th>
                <th class="ps-4 py-3">
                    <div class="min-width-100">
                        Price
                    </div>
                </th>
                <th class="ps-4 py-3">
                    <div class="min-width-100">
                        Stock
                    </div>
                </th>
                <th class="ps-4 py-3">
                    <div class="min-width-100">
                        BarCode
                    </div>
                </th>
                <th class="ps-4 py-3">
                    <div class="min-width-100">
                        Category
                    </div>
                </th>
                <th class="ps-4 py-3">
                    <div class="min-width-100">
                        Brand
                    </div>
                </th>
                <th class="ps-4 py-3">
                    <div class="min-width-100">
                        Size
                    </div>
                </th>
                <th class="ps-4 py-3">
                    <div class="min-width-100">
                        Color
                    </div>
                </th>
                <th class="ps-4 py-3">
                    <div class="min-width-100">
                        Action
                    </div>
                </th>
            </tr>
            </thead>

            <!-- Product body -->
            <tbody>

            <!-- Product list -->
            <tr class="align-middle" v-for="each in [1,2,3,4,5,6,7,8,9,10]">
                <td class="ps-4 py-3">
                    <div class="min-width-150">
                        <div class="truncate-to-1-line">
                            Aopo Designs Woolrich Klettersack Backpack
                        </div>
                    </div>
                </td>
                <td class="ps-4 py-3">
                    <div class="min-width-100">
                        $122.00
                    </div>
                </td>
                <td class="ps-4 py-3">
                    <div class="min-width-100">
                        5
                    </div>
                </td>
                <td class="ps-4 py-3">
                    <div class="min-width-100">
                        PRO54321
                    </div>
                </td>
                <td class="ps-4 py-3">
                    <div class="min-width-100">
                        Male
                    </div>
                </td>
                <td class="ps-4 py-3">
                    <div class="min-width-100">
                        Polo
                    </div>
                </td>
                <td class="ps-4 py-3">
                    <div class="min-width-100">
                        <div class="truncate-to-1-line">
                            L, M, S, XL, XS, XXL
                        </div>
                    </div>
                </td>
                <td class="ps-4 py-3">
                    <div class="min-width-100">
                        <div class="truncate-to-1-line">
                            Black, Blue, Green, Grey, Red, White
                        </div>
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

    <!-- Product manage modal -->
    <div class="modal fade" id="manageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <form @submit.prevent="manageProduct()" class="modal-content rounded-0 border-0 p-4">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        <template v-if="this.formData.id === undefined"> Create</template>
                        <template v-if="this.formData.id !== undefined"> Edit</template>
                        Product
                    </h1>
                    <button type="button" class="btn-close shadow-none" @click="closeManageModal()"></button>
                </div>
                <div class="modal-body border-0">

                    <div class="form-group mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input id="name" type="text" name="name" class="form-control p-3 border rounded-0 shadow-none"
                               required autocomplete="new-name" v-model="formData.name">
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="price" class="form-label">Price</label>
                                <input id="price" type="text" name="price"
                                       class="form-control p-3 border rounded-0 shadow-none" required
                                       autocomplete="new-price" v-model="formData.price">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="stock" class="form-label">Stock Amount</label>
                                <input id="stock" type="text" name="stock"
                                       class="form-control p-3 border rounded-0 shadow-none" required
                                       autocomplete="new-stock" v-model="formData.stock">
                            </div>
                        </div>
                    </div>

                    <div class="form-group mb-3">
                        <label for="barcode" class="form-label">BarCode</label>
                        <input id="barcode" type="text" name="barcode"
                               class="form-control p-3 border rounded-0 shadow-none" required
                               autocomplete="new-barcode" v-model="formData.barCode">
                    </div>

                    <div class="form-group mb-3">
                        <label for="category" class="form-label">Category</label>
                        <select name="category" id="category" class="form-select p-3 border rounded-0 shadow-none"
                                required autocomplete="new-category-type" v-model="formData.category">
                            <option value="select-category-type">Select a category</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="children">Children</option>
                            <option value="accessories">Accessories</option>
                        </select>
                    </div>

                    <div class="form-group mb-3">
                        <label for="brand" class="form-label">Brand</label>
                        <select name="brand" id="brand" class="form-select p-3 border rounded-0 shadow-none" required
                                autocomplete="new-brand" v-model="formData.brand">
                            <option value="select-brand-type">Select a brand</option>
                            <option value="1">Calvin Klein</option>
                            <option value="2">Diesel</option>
                            <option value="3">Polo</option>
                            <option value="4">Tommy Hilfiger</option>
                        </select>
                    </div>

                    <div class="form-group mb-3">
                        <label for="size" class="form-label">Size</label>
                        <div class="d-flex justify-content-start align-items-start gap-2 flex-wrap">
                            <label v-for="size in sizes" :key="size.id"
                                   class="form-label border px-3 py-2 cursor-pointer rounded-0"
                                   :class="{ 'bg-light': !size.selected, 'bg-theme': size.selected }">
                                <input :id="size.id" type="checkbox" :name="'size'" class="form-checkbox"
                                       v-model="size.selected" :value="size.id" hidden="hidden">
                                {{ size.name }}
                            </label>
                        </div>
                    </div>

                    <div class="form-group mb-3">
                        <label for="color" class="form-label">Color</label>
                        <div class="d-flex justify-content-start align-items-start gap-2 flex-wrap">
                            <label v-for="color in colors" :key="color.id"
                                   class="form-label border px-3 py-2 cursor-pointer rounded-0"
                                   :class="{ 'bg-light': !color.selected, 'bg-theme': color.selected }">
                                <input :id="color.id" type="checkbox" :name="'color'" class="form-checkbox"
                                       v-model="color.selected" :value="color.id" hidden="hidden">
                                {{ color.name }}
                            </label>
                        </div>
                    </div>

                    <div class="form-group mb-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea class="form-textarea p-3 resize" name="description" id="description" cols="30"
                                  rows="5" required autocomplete="new-description"
                                  v-model="formData.description"></textarea>
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

    <!-- Product delete modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <form class="modal-content rounded-0 border-0 p-4">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"> Delete Product </h1>
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

            sizes: [
                {id: 'L', name: 'L', selected: false},
                {id: 'M', name: 'M', selected: false},
                {id: 'S', name: 'S', selected: false},
                {id: 'XL', name: 'XL', selected: false},
                {id: 'XS', name: 'XS', selected: false},
                {id: 'XXL', name: 'XXL', selected: false},
            ],

            colors: [
                {id: 'Black', name: 'Black', selected: false},
                {id: 'Blue', name: 'Blue', selected: false},
                {id: 'Green', name: 'Green', selected: false},
                {id: 'Grey', name: 'Grey', selected: false},
                {id: 'Red', name: 'Red', selected: false},
                {id: 'White', name: 'White', selected: false},
            ],

            formData: {
                name: '',
                price: '',
                stock: '',
                barCode: '',
                category: 'select-category-type',
                brand: 'select-brand-type',
                size: [],
                color: [],
                description: '',
            }

        }
    },
    mounted() {

    },
    methods: {

        /* --- --- --- open manage modal --- --- --- */
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

        /* --- --- --- close manage modal --- --- --- */
        closeDeleteModal() {
            let myModalEl = document.getElementById('deleteModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

        manageProduct() {
            this.formData.size = this.sizes.filter(size => size.selected).map(size => size.id);
            this.formData.color = this.colors.filter(color => color.selected).map(color => color.id);
        }

    }
}

</script>
