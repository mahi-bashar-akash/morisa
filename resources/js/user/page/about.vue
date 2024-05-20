<template>

    <!-- breadcrumb -->
    <section class="w-100 py-5">
        <div class="container">
            <div class="position-relative">
                <img :src="`/images/breadcrumb.webp`" class="img-fluid object-fit-cover height-320 w-100" alt="breadcrumb">
                <div class="position-absolute start-0 top-0 w-100 h-100 text-center d-flex justify-content-center align-items-center flex-column">
                    <div class="fs-1 mb-3">About</div>
                    <div class="d-flex justify-content-center align-items-center">
                        <router-link :to="{name: 'home'}" class="text-decoration-none text-secondary">
                            Home
                        </router-link>
                        <div class="mx-3"> -</div>
                        <router-link :to="{name: 'about'}" class="text-decoration-none text-theme">
                            About
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- why we are -->
    <section class="w-100 py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-5 background-effect">
                    <div class="overflow-hidden">
                        <img :src="`/images/about.webp`" class="img-fluid object-fit-cover image-effect" alt="about">
                    </div>
                </div>
                <div class="col-md-6 col-lg-7">
                    <div class="fs-1 fw-medium mb-3">Why we are?</div>
                    <div class="text-dark mb-3">
                        Mellentesque faucibus dapibus dapibus. Morbi aliquam aliquet neque. Donec placerat dapibus
                        sollicitudin. Morbi arcu nisi, mattis ut ullamcorper in, dapibus ac nunc. Cras bibendum
                        mauris et sapien feugiat. scelerisque accumsan nibh gravida. Quisque aliquet justo elementum
                        lectus ultrices bibendum.
                    </div>
                    <div>
                        <div class="mb-3">
                            <i class="bi bi-check me-2"></i>
                            Amazing wordpress theme
                        </div>
                        <div class="mb-3">
                            <i class="bi bi-check me-2"></i>
                            HTML & CSS3 build with bootstrap
                        </div>
                        <div class="mb-3">
                            <i class="bi bi-check me-2"></i>
                            Powerfull admin panel
                        </div>
                        <div class="mb-3">
                            <i class="bi bi-check me-2"></i>
                            Icon well organized & SEO optimized friendy
                        </div>
                        <div class="mb-3">
                            <i class="bi bi-check me-2"></i>
                            Iconncredible design
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="w-100 py-5">
        <div class="container">
            <div class="row">

                <!-- what we do -->
                <div class="col-md-4">
                    <div class="fs-1 fw-medium p-3"> What we do?</div>
                    <div class="text-secondary px-3 pb-4 h-100">
                        Huis nostrud exerci tation ullamcorper suscipites lobortis nisl ut aliquip ex ea commodo
                        consequat. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius
                        claritas.
                    </div>
                </div>

                <!-- our mission -->
                <div class="col-md-4">
                    <div class="fs-1 fw-medium p-3"> Our mission</div>
                    <div class="text-secondary px-3 pb-4 h-100">
                        Huis nostrud exerci tation ullamcorper suscipites lobortis nisl ut aliquip ex ea commodo
                        consequat. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius
                        claritas.
                    </div>
                </div>

                <!-- our vision -->
                <div class="col-md-4">
                    <div class="fs-1 fw-medium p-3"> Our vision</div>
                    <div class="text-secondary px-3 pb-4 h-100">
                        Huis nostrud exerci tation ullamcorper suscipites lobortis nisl ut aliquip ex ea commodo
                        consequat. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius
                        claritas.
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- count -->
    <section class="w-100 py-5">
        <div class="py-5"
             :style="{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: 'url(/images/counter.webp)' }">
            <div class="container">
                <div class="row text-center">
                    <div class="col-12 col-md-4 col-lg-4 py-5">
                        <div class="fs-2 fw-medium mb-3"> 300</div>
                        <div class="fs-6 text-secondary fw-bold"> PROJECTS COMPLETED</div>
                    </div>
                    <div class="col-12 col-md-4 col-lg-4 py-5">
                        <div class="fs-2 fw-medium mb-3"> 250</div>
                        <div class="fs-6 text-secondary fw-bold"> HAPPY CLIENTS</div>
                    </div>
                    <div class="col-12 col-md-4 col-lg-4 py-5">
                        <div class="fs-2 fw-medium mb-3"> 150</div>
                        <div class="fs-6 text-secondary fw-bold"> AWARDS WINNER</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Our crazy Team -->
    <section class="w-100 py-5">
        <div class="py-5">
            <div class="fs-1 fw-medium mb-4 text-center">Our Crazy Team</div>
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-4">
                    <div class="p-2">
                        <div class="background-effect">
                            <div class="overflow-hidden before-effect">
                                <img :src="`/images/teams/team-1.jpg`"
                                     class="img-fluid w-100 object-fit-cover image-effect" alt="team 1">
                            </div>
                        </div>
                        <div class="fs-4 fw-medium py-3 text-center"> Marcos Alonso </div>
                        <div class="fw-medium pb-3 text-center"> Marketer </div>
                    </div>
                    <div class="p-2">
                        <div class="background-effect">
                            <div class="overflow-hidden before-effect">
                                <img :src="`/images/teams/team-2.jpg`"
                                     class="img-fluid w-100 object-fit-cover image-effect" alt="team 2">
                            </div>
                        </div>
                        <div class="fs-4 fw-medium py-3 text-center"> Marcos Alonso </div>
                        <div class="fw-medium pb-3 text-center"> Accountant </div>
                    </div>
                    <div class="p-2">
                        <div class="background-effect">
                            <div class="overflow-hidden before-effect">
                                <img :src="`/images/teams/team-3.jpg`"
                                     class="img-fluid w-100 object-fit-cover image-effect" alt="team 3">
                            </div>
                        </div>
                        <div class="fs-4 fw-medium py-3 text-center"> Marcos Alonso </div>
                        <div class="fw-medium pb-3 text-center"> Finance adviser </div>
                    </div>
                    <div class="p-2">
                        <div class="background-effect">
                            <div class="overflow-hidden before-effect">
                                <img :src="`/images/teams/team-4.jpg`"
                                     class="img-fluid w-100 object-fit-cover image-effect" alt="team 4">
                            </div>
                        </div>
                        <div class="fs-4 fw-medium py-3 text-center"> Marcos Alonso </div>
                        <div class="fw-medium pb-3 text-center"> Full stack web developer </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why choose domino html template -->
    <section class="w-100 py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mb-4">
                    <div class="fs-2 fw-medium mb-3"> Why choose domino html template? </div>
                    <div class="text-secondary mb-3">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat. sed diam voluptua ater vero. Lorem
                        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumys eirmod tempor empor
                        invidunt ut labore et dolore.
                    </div>
                    <a href="javascript:void(0)" class="pb-1 text-dark text-decoration-none border-bottom border-secondary border-opacity-50">
                        Read more . . .
                    </a>
                </div>
                <div class="col-lg-6 mb-4">
                    <div class="mb-3 fw-medium d-flex justify-content-between">
                        <span> STRATEGY </span> <span> 79% </span>
                    </div>
                    <div class="w-100 bg-secondary-subtle height-8 mb-3">
                        <div class="bg-secondary h-100" style="width: 79%"></div>
                    </div>
                    <div class="mb-3 fw-medium d-flex justify-content-between">
                        <span> MARKETING </span> <span> 96% </span>
                    </div>
                    <div class="w-100 bg-secondary-subtle height-8 mb-3">
                        <div class="bg-secondary h-100" style="width: 96%"></div>
                    </div>
                    <div class="mb-3 fw-medium d-flex justify-content-between">
                        <span> THEME DEVELOPMENT </span> <span> 65% </span>
                    </div>
                    <div class="w-100 bg-secondary-subtle height-8 mb-3">
                        <div class="bg-secondary h-100" style="width: 65%"></div>
                    </div>
                    <div class="mb-3 fw-medium d-flex justify-content-between">
                        <span> UI/UX DESIGN </span> <span> 92% </span>
                    </div>
                    <div class="w-100 bg-secondary-subtle height-8 mb-3">
                        <div class="bg-secondary h-100" style="width: 92%"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

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
