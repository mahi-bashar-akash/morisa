<template>
    <div class="admin-wrapper">

        <div class="admin-sidebar">

            <div class="admin-sidebar-header">

                <router-link :to="{name: 'dashboard'}" class="admin-sidebar-logo">
                    A<span>dmin Panel</span>
                </router-link>

                <button type="button" class="admin-sidebar-close">
                    <i class="bi bi-x-lg"></i>
                </button>

            </div>

            <div class="admin-sidebar-body">

                <router-link :to="{name: 'dashboard'}" class="admin-sidebar-body-link">
                    <i class="bi bi-speedometer"></i>
                    <span class="ms-2"> Dashboard </span>
                </router-link>

                <router-link :to="{name: 'slider'}" class="admin-sidebar-body-link">
                    <i class="bi bi-sliders"></i>
                    <span class="ms-2"> Sliders </span>
                </router-link>

                <router-link :to="{name: 'box'}" class="admin-sidebar-body-link">
                    <i class="bi bi-boxes"></i>
                    <span class="ms-2"> Boxes </span>
                </router-link>

                <router-link :to="{name: 'category'}" class="admin-sidebar-body-link">
                    <i class="bi bi-link-45deg"></i>
                    <span class="ms-2"> Categories </span>
                </router-link>

                <router-link :to="{name: 'product'}" class="admin-sidebar-body-link">
                    <i class="bi bi-bag"></i>
                    <span class="ms-2"> Products </span>
                </router-link>

                <router-link :to="{name: 'blog'}" class="admin-sidebar-body-link">
                    <i class="bi bi-card-text"></i>
                    <span class="ms-2"> Blogs </span>
                </router-link>

                <router-link :to="{name: 'about'}" class="admin-sidebar-body-link">
                    <i class="bi bi-file-person"></i>
                    <span class="ms-2"> About </span>
                </router-link>

                <router-link :to="{name: 'contact'}" class="admin-sidebar-body-link">
                    <i class="bi bi-telephone"></i>
                    <span class="ms-2"> Contact </span>
                </router-link>

                <router-link :to="{name: 'explore'}" class="admin-sidebar-body-link">
                    <i class="bi bi-view-stacked"></i>
                    <span class="ms-2"> Explore </span>
                </router-link>

                <router-link :to="{name: 'customer'}" class="admin-sidebar-body-link">
                    <i class="bi bi-person-hearts"></i>
                    <span class="ms-2"> Customers </span>
                </router-link>

                <router-link :to="{name: 'order'}" class="admin-sidebar-body-link">
                    <i class="bi bi-bag-heart"></i>
                    <span class="ms-2"> Orders </span>
                </router-link>

                <router-link :to="{name: 'settings'}" class="admin-sidebar-body-link">
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

                    <button type="button" class="admin-sidebar-toggle me-3">
                        <i class="bi bi-justify-left"></i>
                    </button>

                    <form class="header">
                        <div class="position-relative">
                            <div class="position-absolute top-50 start-0 translate-middle-y ps-3 text-secondary">
                                <i class="bi bi-search"></i>
                            </div>
                            <input type="text" name="keyword" class="form-control py-3 ps-5" placeholder="Global Search Here" required autocomplete="new-keyword">
                        </div>
                    </form>

                </div>

                <div class="d-flex justify-content-end">

                    <button type="button" class="btn-icon rounded-3">
                        <i class="bi bi-fullscreen"></i>
                    </button>

                    <div class="dropdown ms-3">
                        <button type="button" class="btn-icon rounded-3" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-person-circle"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                                <a class="dropdown-item" href="javascript:void(0)">
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="javascript:void(0)">
                                    Logout
                                </a>
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

</template>

<script>

export default {
    data() {
        return {}
    },
    mounted() {

    },
    methods: {}
}

</script>
