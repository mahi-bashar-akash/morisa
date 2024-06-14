<template>

    <div class="d-flex justify-content-end mb-4">
        <button type="button" class="btn btn-theme width-120 py-2 rounded-0" data-bs-toggle="modal" data-bs-target="#manageModal">
            New
        </button>
    </div>

    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr class="p-3">
                    <th class="ps-4 py-3"> Attribute </th>
                    <th class="ps-4 py-3"> Value </th>
                    <th class="ps-4 py-3"> Action </th>
                </tr>
            </thead>
            <tbody>
                <tr class="align-middle">
                    <td class="ps-4 py-3"> Categories </td>
                    <td class="ps-4 py-3"> Male, Female, Children, Accessories </td>
                    <td class="ps-4 py-2">
                        <div class="d-flex justify-content-start align-items-center gap-2">
                            <button type="button" class="btn-icon rounded-circle">
                                <i class="bi bi-pencil-square text-secondary"></i>
                            </button>
                            <button type="button" class="btn-icon rounded-circle">
                                <i class="bi bi-trash2 text-danger"></i>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr class="align-middle">
                    <td class="ps-4 py-3"> Brands </td>
                    <td class="ps-4 py-3"> Calvin Klein, Diesel, Polo, Tommy Hilfiger </td>
                    <td class="ps-4 py-2">
                        <div class="d-flex justify-content-start align-items-center gap-2">
                            <button type="button" class="btn-icon rounded-circle">
                                <i class="bi bi-pencil-square text-secondary"></i>
                            </button>
                            <button type="button" class="btn-icon rounded-circle">
                                <i class="bi bi-trash2 text-danger"></i>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr class="align-middle">
                    <td class="ps-4 py-3"> Sizes </td>
                    <td class="ps-4 py-3"> L, M, S, XL, XS, XXL </td>
                    <td class="ps-4 py-2">
                        <div class="d-flex justify-content-start align-items-center gap-2">
                            <button type="button" class="btn-icon rounded-circle">
                                <i class="bi bi-pencil-square text-secondary"></i>
                            </button>
                            <button type="button" class="btn-icon rounded-circle">
                                <i class="bi bi-trash2 text-danger"></i>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr class="align-middle">
                    <td class="ps-4 py-3"> Colors </td>
                    <td class="ps-4 py-3"> Black, Blue, Green, Grey, Red, White </td>
                    <td class="ps-4 py-2">
                        <div class="d-flex justify-content-start align-items-center gap-2">
                            <button type="button" class="btn-icon rounded-circle">
                                <i class="bi bi-pencil-square text-secondary"></i>
                            </button>
                            <button type="button" class="btn-icon rounded-circle">
                                <i class="bi bi-trash2 text-danger"></i>
                            </button>
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

        }
    },
    mounted() {

    },
    methods: {

    }
}

</script>
