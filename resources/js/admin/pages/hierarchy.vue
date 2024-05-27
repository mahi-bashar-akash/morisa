<template>

    <!-- breadcrumb -->
    <div class="d-sm-flex justify-content-between align-items-center">
        <breadcrumb :items="BreadcrumbItems" moduleName="Hierarchy"/>
    </div>

    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Categories
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="d-flex justify-content-between align-items-center p-1">
                        <div>
                            Women
                        </div>
                        <div class="d-flex justify-content-end align-items-center gap-2">
                            <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                <i class="bi bi-pencil-square"></i>
                            </button>
                            <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                <i class="bi bi-trash2"></i>
                            </button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center p-1">
                        <div>
                            Leo Sodales
                        </div>
                        <div class="d-flex justify-content-end align-items-center gap-2">
                            <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                <i class="bi bi-pencil-square"></i>
                            </button>
                            <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                <i class="bi bi-trash2"></i>
                            </button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center p-1">
                        <div>
                            Accessories
                        </div>
                        <div class="d-flex justify-content-end align-items-center gap-2">
                            <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                <i class="bi bi-pencil-square"></i>
                            </button>
                            <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                <i class="bi bi-trash2"></i>
                            </button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center p-1">
                        <div>
                            Men
                        </div>
                        <div class="d-flex justify-content-end align-items-center gap-2">
                            <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                <i class="bi bi-pencil-square"></i>
                            </button>
                            <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                <i class="bi bi-trash2"></i>
                            </button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center p-1">
                        <div>
                            Sagittis Vitae
                        </div>
                        <div class="d-flex justify-content-end align-items-center gap-2">
                            <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                <i class="bi bi-pencil-square"></i>
                            </button>
                            <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                <i class="bi bi-trash2"></i>
                            </button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center p-1">
                        <div>
                            Egestas Elit
                        </div>
                        <div class="d-flex justify-content-end align-items-center gap-2">
                            <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                <i class="bi bi-pencil-square"></i>
                            </button>
                            <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                <i class="bi bi-trash2"></i>
                            </button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center p-1">
                        <div>
                            Egestas Magna
                        </div>
                        <div class="d-flex justify-content-end align-items-center gap-2">
                            <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                <i class="bi bi-pencil-square"></i>
                            </button>
                            <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                <i class="bi bi-trash2"></i>
                            </button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center p-1">
                        <div>
                            Vestibulum Ligula
                        </div>
                        <div class="d-flex justify-content-end align-items-center gap-2">
                            <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                <i class="bi bi-pencil-square"></i>
                            </button>
                            <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                <i class="bi bi-trash2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Brand
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="d-flex justify-content-between align-items-center p-1">
                        <div>
                            Calvin Klein
                        </div>
                        <div class="d-flex justify-content-end align-items-center gap-2">
                            <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                <i class="bi bi-pencil-square"></i>
                            </button>
                            <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                <i class="bi bi-trash2"></i>
                            </button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center p-1">
                        <div>
                            Diesel
                        </div>
                        <div class="d-flex justify-content-end align-items-center gap-2">
                            <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                <i class="bi bi-pencil-square"></i>
                            </button>
                            <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                <i class="bi bi-trash2"></i>
                            </button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center p-1">
                        <div>
                            Polo
                        </div>
                        <div class="d-flex justify-content-end align-items-center gap-2">
                            <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                <i class="bi bi-pencil-square"></i>
                            </button>
                            <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                <i class="bi bi-trash2"></i>
                            </button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center p-1">
                        <div>
                            Tommy Hilfiger
                        </div>
                        <div class="d-flex justify-content-end align-items-center gap-2">
                            <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-secondary">
                                <i class="bi bi-pencil-square"></i>
                            </button>
                            <button type="button" class="width-35 height-35 d-flex justify-content-center align-items-center btn-icon rounded-circle text-danger">
                                <i class="bi bi-trash2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
