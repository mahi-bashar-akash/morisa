<template>
    <div class="admin-wrapper">

        <div class="admin-sidebar" :class="{'active' : sidebarIsActive}">

            <div class="admin-sidebar-header">

                <router-link :to="{name: 'dashboard'}" class="admin-sidebar-logo">
                    A<span>dmin Panel</span>
                </router-link>

                <button type="button" class="admin-sidebar-close" @click="sidebarRemove()">
                    <i class="bi bi-x-lg"></i>
                </button>

            </div>

            <div class="admin-sidebar-body">

                <router-link :to="{name: 'dashboard'}" class="admin-sidebar-body-link" @click="sidebarRemove()">
                    <i class="bi bi-speedometer"></i>
                    <span class="ms-2"> Dashboard </span>
                </router-link>

                <router-link :to="{name: 'slider'}" class="admin-sidebar-body-link" @click="sidebarRemove()">
                    <i class="bi bi-sliders"></i>
                    <span class="ms-2"> Sliders </span>
                </router-link>

                <router-link :to="{name: 'box'}" class="admin-sidebar-body-link" @click="sidebarRemove()">
                    <i class="bi bi-boxes"></i>
                    <span class="ms-2"> Boxes </span>
                </router-link>

                <router-link :to="{name: 'category'}" class="admin-sidebar-body-link" @click="sidebarRemove()">
                    <i class="bi bi-link-45deg"></i>
                    <span class="ms-2"> Categories </span>
                </router-link>

                <router-link :to="{name: 'product'}" class="admin-sidebar-body-link" @click="sidebarRemove()">
                    <i class="bi bi-bag"></i>
                    <span class="ms-2"> Products </span>
                </router-link>

                <router-link :to="{name: 'blog'}" class="admin-sidebar-body-link" @click="sidebarRemove()">
                    <i class="bi bi-card-text"></i>
                    <span class="ms-2"> Blogs </span>
                </router-link>

                <router-link :to="{name: 'about'}" class="admin-sidebar-body-link" @click="sidebarRemove()">
                    <i class="bi bi-file-person"></i>
                    <span class="ms-2"> About </span>
                </router-link>

                <router-link :to="{name: 'contact'}" class="admin-sidebar-body-link" @click="sidebarRemove()">
                    <i class="bi bi-telephone"></i>
                    <span class="ms-2"> Contact </span>
                </router-link>

                <router-link :to="{name: 'explore'}" class="admin-sidebar-body-link" @click="sidebarRemove()">
                    <i class="bi bi-view-stacked"></i>
                    <span class="ms-2"> Explore </span>
                </router-link>

                <router-link :to="{name: 'customer'}" class="admin-sidebar-body-link" @click="sidebarRemove()">
                    <i class="bi bi-person-hearts"></i>
                    <span class="ms-2"> Customers </span>
                </router-link>

                <router-link :to="{name: 'order'}" class="admin-sidebar-body-link" @click="sidebarRemove()">
                    <i class="bi bi-bag-heart"></i>
                    <span class="ms-2"> Orders </span>
                </router-link>

                <router-link :to="{name: 'settings'}" class="admin-sidebar-body-link" @click="sidebarRemove()">
                    <i class="bi bi-gear"></i>
                    <span class="ms-2"> Settings </span>
                </router-link>

            </div>

            <div class="admin-sidebar-footer">

                <button type="button" class="admin-sidebar-footer-link">
                    <i class="bi bi-box-arrow-in-right"></i>
                    <span class="ms-2"> Logout </span>
                </button>

            </div>

        </div>

        <div class="admin-content">

            <div class="admin-content-header">

                <div class="d-flex justify-content-start">

                    <button type="button" class="admin-sidebar-toggle me-3" @click="sidebarChecked()">
                        <i class="bi bi-justify-left"></i>
                    </button>

                    <div class="d-inline d-md-none">
                        <button type="button" class="btn-icon rounded-3" @click="openGlobalSearchModal()">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>

                    <form class="header">
                        <div class="position-relative d-none d-md-block">
                            <div class="position-absolute top-50 start-0 translate-middle-y ps-3 text-secondary">
                                <i class="bi bi-search"></i>
                            </div>
                            <input type="text" name="keyword" class="form-control py-3 ps-5"
                                   placeholder="Global Search Here" required autocomplete="new-keyword">
                        </div>
                    </form>

                </div>

                <div class="d-flex justify-content-end">

                    <button type="button" class="btn-icon rounded-3">
                        <i class="bi bi-fullscreen"></i>
                    </button>

                    <div class="dropdown ms-3">
                        <button type="button" class="btn-icon rounded-3" data-bs-toggle="dropdown"
                                aria-expanded="false">
                            <i class="bi bi-person-circle"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li class="mb-2">
                                <router-link :to="{name: 'profile'}" class="dropdown-item">
                                    Profile
                                </router-link>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item">
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>

            <div class="admin-content-body">

                <router-view/>

            </div>

        </div>

    </div>

    <div class="modal fade" id="globalSearchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-3 rounded-3 border-0">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"> Search Here </h1>
                    <button type="button" class="btn-close btn-icon" @click="closeGlobalSearchModal()"></button>
                </div>
                <div class="modal-body border-0">
                    <div class="mb-4 header">
                        <input id="keyword" type="text" name="keyword" class="form-control px-3 py-3" required autocomplete="new-keyword" placeholder="Search here anything">
                    </div>
                    <div class="height-300 w-100 d-flex justify-content-center align-items-center flex-column box-inside-shadow rounded-3">
                        <div class="text-center">
                            <div class="mb-3">
                                <i class="bi bi-server text-theme"></i>
                            </div>
                            <div class="text-secondary">
                                There have no data !
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-0">
                    <button type="button" class="btn btn-cancel width-96" @click="closeGlobalSearchModal()">
                        Close
                    </button>
                    <button type="button" class="btn btn-theme width-96">
                        Apply
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    data() {
        return {
            sidebarIsActive: false,
        }
    },
    mounted() {

    },
    methods: {

        /* Function to open global search modal */
        openGlobalSearchModal() {
            const myModal = new bootstrap.Modal("#globalSearchModal", {keyboard: false});
            myModal.show();
        },

        /* Function to close global search modal */
        closeGlobalSearchModal() {
            const myModal = document.querySelector("#globalSearchModal");
            const modal = bootstrap.Modal.getInstance(myModal);
            modal.hide();
        },

        /* Function to toggle sidebar */
        sidebarChecked() {
            this.sidebarIsActive = true
        },

        sidebarRemove() {
            this.sidebarIsActive = false;
        }

    }
}

</script>
