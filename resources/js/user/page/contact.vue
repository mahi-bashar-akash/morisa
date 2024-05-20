<template>

    <!-- breadcrumb -->
    <section class="w-100 py-5">
        <div class="container">
            <div class="position-relative">
                <img :src="`/images/breadcrumb.webp`" class="img-fluid object-fit-cover height-320 w-100" alt="breadcrumb">
                <div class="position-absolute start-0 top-0 w-100 h-100 text-center d-flex justify-content-center align-items-center flex-column">
                    <div class="fs-1 mb-3">Contact</div>
                    <div class="d-flex justify-content-center align-items-center">
                        <router-link :to="{name: 'home'}" class="text-decoration-none text-secondary">
                            Home
                        </router-link>
                        <div class="mx-3"> -</div>
                        <router-link :to="{name: 'contact'}" class="text-decoration-none text-theme">
                            Contact
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="w-100 h-100 py-5">
        <div class="container">
            <iframe class="w-100 height-400" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=jessore%20sadar%20+(jessore)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
    </section>

    <section class="w-100 h-100 py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6 pe-3">
                    <div class="fw-medium fs-3 pb-3 border-bottom"> CONTACT INFO </div>
                    <div class="d-flex align-items-center py-3">
                        <i class="bi bi-geo-alt me-2"></i>
                        <span class="me-2 fw-medium">Address</span>
                        Jessore Sadar, Jessore, Bangladesh
                    </div>
                    <div class="d-flex align-items-center py-3">
                        <i class="bi bi-envelope me-2"></i>
                        <span class="me-2 fw-medium">Email</span>
                        mahibashar2023@gmail.com
                    </div>
                    <div class="d-flex align-items-center py-3">
                        <i class="bi bi-phone me-2"></i>
                        <span class="me-2 fw-medium">Phone Number</span>
                        01400125289
                    </div>
                </div>
                <div class="col-md-6 pe-3">
                    <div class="fw-medium fs-3 pb-3 border-bottom"> LEAVE A MESSAGE </div>
                    <form class="py-3">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group mb-3">
                                    <label for="name" class="form-label"> Name </label>
                                    <input id="name" type="text" name="name" class="form-control border shadow-none rounded-0 p-3" placeholder="Name ( Required )" required autocomplete="new-name">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group mb-3">
                                    <label for="email" class="form-label"> Email </label>
                                    <input id="email" type="email" name="email" class="form-control border shadow-none rounded-0 p-3" placeholder="Email ( Required )" required autocomplete="new-email">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group mb-3">
                                    <label for="subject" class="form-label"> Subject </label>
                                    <input id="subject" type="text" name="subject" class="form-control border shadow-none rounded-0 p-3" placeholder="Subject" autocomplete="new-subject">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group mb-3">
                                    <label for="message" class="form-label"> Message </label>
                                    <textarea name="message" class="form-textarea p-3" id="message" cols="30" rows="5" placeholder="Message" required autocomplete="new-message"></textarea>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <button type="submit" class="btn btn-dark py-3 px-4 rounded-0">
                                    SUBMIT FORM
                                </button>
                            </div>
                        </div>
                    </form>
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
