<template>

    <!-- breadcrumb -->
    <section class="w-100 py-5">
        <div class="container">
            <div class="position-relative">
                <img :src="`/images/breadcrumb.webp`" class="img-fluid object-fit-cover height-320 w-100" alt="breadcrumb">
                <div class="position-absolute start-0 top-0 w-100 h-100 text-center d-flex justify-content-center align-items-center flex-column">
                    <div class="fs-1 mb-3">Checkout</div>
                    <div class="d-flex justify-content-center align-items-center">
                        <router-link :to="{name: 'home'}" class="text-decoration-none text-secondary">
                            Home
                        </router-link>
                        <div class="mx-3"> - </div>
                        <router-link :to="{name: 'cart'}" class="text-decoration-none text-secondary">
                            Cart
                        </router-link>
                        <div class="mx-3"> - </div>
                        <router-link :to="{name: 'checkout'}" class="text-decoration-none text-theme">
                            Checkout
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- checkout -->
    <section class="w-100 py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="fs-3 fw-medium mb-3">
                        BILLING DETAILS
                    </div>
                    <form class="row">
                        <div class="col-md-12">
                            <div class="form-group mb-3">
                                <label for="country" class="form-label"> Country <span class="text-theme">*</span> </label>
                                <select name="country" id="country" class="form-select border shadow-none p-3" required autocomplete="new-country">
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="first-name" class="form-label"> First Name </label>
                                <input id="first-name" type="text" name="first-name" class="form-control border shadow-none p-3" placeholder="( Required )" required autocomplete="new-first-name">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="last-name" class="form-label"> Last Name </label>
                                <input id="last-name" type="text" name="last-name" class="form-control border shadow-none p-3" placeholder="( Required )" required autocomplete="new-last-name">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="present-address" class="form-label"> Present Address </label>
                                <input id="present-address" type="text" name="present-address" class="form-control border shadow-none p-3" placeholder="( Required )" required autocomplete="new-present-address">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="email" class="form-label"> Email </label>
                                <input id="email" type="email" name="email" class="form-control border shadow-none p-3" placeholder="( Required )" required autocomplete="new-email">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group mb-3">
                                <label for="phone-number" class="form-label"> Phone Number </label>
                                <input id="phone-number" type="text" name="phone-number" class="form-control border shadow-none p-3" placeholder="( Required )" required autocomplete="new-phone-number">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group mb-3">
                                <label for="order-notes" class="form-label"> Order Notes </label>
                                <textarea name="order-notes" id="order-notes" class="form-textarea border shadow-none p-3" cols="30" rows="5" placeholder="Notes about your order, e.g. special notes for delivery." autocomplete="new-order-notes"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-6">
                    <div class="fs-3 fw-medium mb-3">
                        YOUR ORDERS
                    </div>
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <tbody>
                            <tr v-for="each in [1,2,3,4,5]">
                                <td>
                                    <div class="fw-medium py-2 ps-3">
                                        Vestibulum suscipit
                                    </div>
                                </td>
                                <td>
                                    <div class="text-theme fw-medium w-100 text-end py-2 pe-3">
                                        $120.00
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="fw-medium py-2 ps-3">
                                        SUBTOTAL
                                    </div>
                                </td>
                                <td>
                                    <div class="text-theme fw-medium w-100 text-end py-2 pe-3">
                                        $215.00
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="fw-medium py-2 ps-3">
                                        SHIPPING
                                    </div>
                                </td>
                                <td>
                                    <div class="fw-medium w-100 text-end py-2 pe-3">
                                        <label for="flat-rate" class="form-check-label d-block mb-3 cursor-pointer">
                                            <input type="radio" name="shippingType" id="flat-rate" class="form-radio me-2">
                                            Flat Rate: <span class="text-theme"> $7.00 </span>
                                        </label>
                                        <label for="free-shipping" class="form-check-label d-block cursor-pointer">
                                            <input type="radio" name="shippingType" id="free-shipping" class="form-radio me-2" checked>
                                            Free Shipping
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="fw-medium py-2 ps-3">
                                        TOTAL
                                    </div>
                                </td>
                                <td>
                                    <div class="text-theme fw-medium w-100 text-end py-2 pe-3">
                                        $215.00
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item rounded-0">
                            <h2 class="accordion-header rounded-0">
                                <button class="accordion-button rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Direct Bank Transfer
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show rounded-0" data-bs-parent="#accordionExample">
                                <div class="accordion-body rounded-0">
                                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item rounded-0">
                            <h2 class="accordion-header rounded-0">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Cheque Payment
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse rounded-0" data-bs-parent="#accordionExample">
                                <div class="accordion-body rounded-0">
                                    Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item rounded-0">
                            <h2 class="accordion-header rounded-0">
                                <button class="accordion-button collapsed rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    PayPal payment
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse rounded-0" data-bs-parent="#accordionExample">
                                <div class="accordion-body rounded-0">
                                    <div class="mb-3">
                                        Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
                                    </div>
                                    <div class="d-block">
                                        <img :src="`/images/card-image.webp`" class="img-fluid" alt="card-image">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>

export default {
    data(){
        return {

        }
    },
    mounted() {

    },
    methods: {

    }
}

</script>
