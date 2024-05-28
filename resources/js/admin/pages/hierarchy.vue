<template>

    <!-- breadcrumb -->
    <div class="d-sm-flex justify-content-between align-items-center">
        <breadcrumb :items="BreadcrumbItems" moduleName="Hierarchy"/>
    </div>

    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                        aria-expanded="true" aria-controls="collapseOne">
                    Categories
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 px-2">
                        <div class="p-2">
                            <div class="d-flex justify-content-between align-items-center py-2 px-3 bg-light shadow-sm">
                                <div>
                                    Women
                                </div>
                                <div class="d-flex justify-content-end align-items-center gap-2">
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                        <i class="bi bi-trash2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-2">
                            <div class="d-flex justify-content-between align-items-center py-2 px-3 bg-light shadow-sm">
                                <div>
                                    Leo Sodales
                                </div>
                                <div class="d-flex justify-content-end align-items-center gap-2">
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                        <i class="bi bi-trash2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-2">
                            <div class="d-flex justify-content-between align-items-center py-2 px-3 bg-light shadow-sm">
                                <div>
                                    Accessories
                                </div>
                                <div class="d-flex justify-content-end align-items-center gap-2">
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                        <i class="bi bi-trash2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-2">
                            <div class="d-flex justify-content-between align-items-center py-2 px-3 bg-light shadow-sm">
                                <div>
                                    Men
                                </div>
                                <div class="d-flex justify-content-end align-items-center gap-2">
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                        <i class="bi bi-trash2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-2">
                            <div class="d-flex justify-content-between align-items-center py-2 px-3 bg-light shadow-sm">
                                <div>
                                    Sagittis Vitae
                                </div>
                                <div class="d-flex justify-content-end align-items-center gap-2">
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                        <i class="bi bi-trash2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-2">
                            <div class="d-flex justify-content-between align-items-center py-2 px-3 bg-light shadow-sm">
                                <div>
                                    Egestas Elit
                                </div>
                                <div class="d-flex justify-content-end align-items-center gap-2">
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                        <i class="bi bi-trash2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-2">
                            <div class="d-flex justify-content-between align-items-center py-2 px-3 bg-light shadow-sm">
                                <div>
                                    Egestas Magna
                                </div>
                                <div class="d-flex justify-content-end align-items-center gap-2">
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                        <i class="bi bi-trash2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-2">
                            <div class="d-flex justify-content-between align-items-center py-2 px-3 bg-light shadow-sm">
                                <div>
                                    Vestibulum Ligula
                                </div>
                                <div class="d-flex justify-content-end align-items-center gap-2">
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                        <i class="bi bi-trash2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Brand
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 px-2">
                        <div class="p-2">
                            <div class="d-flex justify-content-between align-items-center py-2 px-3 bg-light shadow-sm">
                                <div>
                                    Calvin Klein
                                </div>
                                <div class="d-flex justify-content-end align-items-center gap-2">
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                        <i class="bi bi-trash2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-2">
                            <div class="d-flex justify-content-between align-items-center py-2 px-3 bg-light shadow-sm">
                                <div>
                                    Diesel
                                </div>
                                <div class="d-flex justify-content-end align-items-center gap-2">
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                        <i class="bi bi-trash2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-2">
                            <div class="d-flex justify-content-between align-items-center py-2 px-3 bg-light shadow-sm">
                                <div>
                                    Polo
                                </div>
                                <div class="d-flex justify-content-end align-items-center gap-2">
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                        <i class="bi bi-trash2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-2">
                            <div class="d-flex justify-content-between align-items-center py-2 px-3 bg-light shadow-sm">
                                <div>
                                    Tommy Hilfiger
                                </div>
                                <div class="d-flex justify-content-end align-items-center gap-2">
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                        <i class="bi bi-trash2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Size
                </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 px-2">
                        <div class="p-2">
                            <div class="d-flex justify-content-between align-items-center py-2 px-3 bg-light shadow-sm">
                                <div>
                                    L
                                </div>
                                <div class="d-flex justify-content-end align-items-center gap-2">
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                        <i class="bi bi-trash2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-2">
                            <div class="d-flex justify-content-between align-items-center py-2 px-3 bg-light shadow-sm">
                                <div>
                                    M
                                </div>
                                <div class="d-flex justify-content-end align-items-center gap-2">
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                        <i class="bi bi-trash2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-2">
                            <div class="d-flex justify-content-between align-items-center py-2 px-3 bg-light shadow-sm">
                                <div>
                                    S
                                </div>
                                <div class="d-flex justify-content-end align-items-center gap-2">
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                        <i class="bi bi-trash2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-2">
                            <div class="d-flex justify-content-between align-items-center py-2 px-3 bg-light shadow-sm">
                                <div>
                                    XL
                                </div>
                                <div class="d-flex justify-content-end align-items-center gap-2">
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                        <i class="bi bi-trash2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-2">
                            <div class="d-flex justify-content-between align-items-center py-2 px-3 bg-light shadow-sm">
                                <div>
                                    XS
                                </div>
                                <div class="d-flex justify-content-end align-items-center gap-2">
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                        <i class="bi bi-trash2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-2">
                            <div class="d-flex justify-content-between align-items-center py-2 px-3 bg-light shadow-sm">
                                <div>
                                    XXL
                                </div>
                                <div class="d-flex justify-content-end align-items-center gap-2">
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                        <i class="bi bi-trash2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Color
                </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 px-2">
                        <div class="p-2">
                            <div class="d-flex justify-content-between align-items-center py-2 px-3 bg-light shadow-sm">
                                <div>
                                    Black
                                </div>
                                <div class="d-flex justify-content-end align-items-center gap-2">
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                        <i class="bi bi-trash2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-2">
                            <div class="d-flex justify-content-between align-items-center py-2 px-3 bg-light shadow-sm">
                                <div>
                                    Blue
                                </div>
                                <div class="d-flex justify-content-end align-items-center gap-2">
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                        <i class="bi bi-trash2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-2">
                            <div class="d-flex justify-content-between align-items-center py-2 px-3 bg-light shadow-sm">
                                <div>
                                    Green
                                </div>
                                <div class="d-flex justify-content-end align-items-center gap-2">
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                        <i class="bi bi-trash2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-2">
                            <div class="d-flex justify-content-between align-items-center py-2 px-3 bg-light shadow-sm">
                                <div>
                                    Grey
                                </div>
                                <div class="d-flex justify-content-end align-items-center gap-2">
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                        <i class="bi bi-trash2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-2">
                            <div class="d-flex justify-content-between align-items-center py-2 px-3 bg-light shadow-sm">
                                <div>
                                    Red
                                </div>
                                <div class="d-flex justify-content-end align-items-center gap-2">
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                        <i class="bi bi-trash2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-2">
                            <div class="d-flex justify-content-between align-items-center py-2 px-3 bg-light shadow-sm">
                                <div>
                                    White
                                </div>
                                <div class="d-flex justify-content-end align-items-center gap-2">
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button"
                                            class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                        <i class="bi bi-trash2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import breadcrumb from "../components/breadcrumb.vue";

export default {
    components: {
        breadcrumb
    },
    data() {
        return {
            BreadcrumbItems: [
                {title: 'Dashboard', route: 'dashboard'},
                {title: 'Hierarchy', route: 'hierarchy'},
            ],
        }
    },
    mounted() {

    },
    methods: {}
}

</script>
