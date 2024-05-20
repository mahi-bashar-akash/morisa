<template>

    <!-- breadcrumb -->
    <section class="w-100 py-5">
        <div class="container">
            <div class="position-relative">
                <img :src="`/images/breadcrumb.webp`" class="img-fluid object-fit-cover height-320 w-100"
                     alt="breadcrumb">
                <div
                    class="position-absolute start-0 top-0 w-100 h-100 text-center d-flex justify-content-center align-items-center flex-column">
                    <div class="fs-1 mb-3">Cart</div>
                    <div class="d-flex justify-content-center align-items-center">
                        <router-link :to="{name: 'home'}" class="text-decoration-none text-secondary">
                            Home
                        </router-link>
                        <div class="mx-3"> -</div>
                        <router-link :to="{name: 'cart'}" class="text-decoration-none text-theme">
                            Cart
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- cart items -->
    <section class="mt-4">
        <div class="container">
            <div class="table-responsive">
                <table class="table table-bordered align-middle text-center">
                    <thead>
                    <tr>
                        <th class="width-250"> IMAGE </th>
                        <th class="width-250"> PRODUCT </th>
                        <th class="width-250"> PRICE </th>
                        <th class="width-250"> QUANTITY </th>
                        <th class="width-250"> TOTAL </th>
                        <th class="width-250"> REMOVE </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="width-250"> <img :src="`/images/product/product-01.jpg`" class="img-fluid object-fit-cover width-120" alt="product"> </td>
                        <td class="width-250"> <div class="text-secondary fw-medium">Vestibulum suscipit</div> </td>
                        <td class="width-250"> $120.00 </td>
                        <td class="width-250">
                            <div class="d-flex align-items-center justify-content-center">
                                <button type="button" class="btn bg-secondary-subtle p-3 border-0 mx-1">
                                    <i class="bi bi-dash-lg"></i>
                                </button>
                                <input type="text" name="quantity" class="form-control border shadow-none p-3 text-center width-60" disabled value="1">
                                <button type="button" class="btn bg-secondary-subtle p-3 border-0 mx-1">
                                    <i class="bi bi-plus-lg"></i>
                                </button>
                            </div>
                        </td>
                        <td class="width-250"> $120.00 </td>
                        <td class="width-250"> <i class="bi bi-x-lg"></i> </td>
                    </tr>
                    <tr>
                        <td class="width-250"> <img :src="`/images/product/product-01.jpg`" class="img-fluid object-fit-cover width-120" alt="product"> </td>
                        <td class="width-250"> <div class="text-secondary fw-medium">Vestibulum suscipit</div> </td>
                        <td class="width-250"> $120.00 </td>
                        <td class="width-250">
                            <div class="d-flex align-items-center justify-content-center">
                                <button type="button" class="btn bg-secondary-subtle p-3 border-0 mx-1">
                                    <i class="bi bi-dash-lg"></i>
                                </button>
                                <input type="text" name="quantity" class="form-control border shadow-none p-3 text-center width-60" disabled value="1">
                                <button type="button" class="btn bg-secondary-subtle p-3 border-0 mx-1">
                                    <i class="bi bi-plus-lg"></i>
                                </button>
                            </div>
                        </td>
                        <td class="width-250"> $120.00 </td>
                        <td class="width-250"> <i class="bi bi-x-lg"></i> </td>
                    </tr>
                    <tr>
                        <td class="width-250"> <img :src="`/images/product/product-01.jpg`" class="img-fluid object-fit-cover width-120" alt="product"> </td>
                        <td class="width-250"> <div class="text-secondary fw-medium">Vestibulum suscipit</div> </td>
                        <td class="width-250"> $120.00 </td>
                        <td class="width-250">
                            <div class="d-flex align-items-center justify-content-center">
                                <button type="button" class="btn bg-secondary-subtle p-3 border-0 mx-1">
                                    <i class="bi bi-dash-lg"></i>
                                </button>
                                <input type="text" name="quantity" class="form-control border shadow-none p-3 text-center width-60" disabled value="1">
                                <button type="button" class="btn bg-secondary-subtle p-3 border-0 mx-1">
                                    <i class="bi bi-plus-lg"></i>
                                </button>
                            </div>
                        </td>
                        <td class="width-250"> $120.00 </td>
                        <td class="width-250"> <i class="bi bi-x-lg"></i> </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- cart details -->
    <section class="w-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mt-4">
                    <div class="row mb-4">
                        <div class="col-sm-6 mb-3">
                            <a href="javascript:void(0)" class="btn btn-dark p-3 rounded-0 w-100">
                                CONTINUE SHOPPING
                            </a>
                        </div>
                        <div class="col-sm-6 mb-3">
                            <a href="javascript:void(0)" class="btn btn-dark p-3 rounded-0 w-100">
                                UPDATE CART
                            </a>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-12 mb-3 fw-bold"> COUPON </div>
                        <div class="col-12 mb-3"> Enter your coupon code if you have one. </div>
                        <div class="col-sm-6 mb-3">
                            <input type="text" name="coupon-code" placeholder="Coupon Code" class="form-control shadow-none border p-3 rounded-0">
                        </div>
                        <div class="col-sm-6 mb-3">
                            <button type="submit" class="btn btn-dark p-3 rounded-0 w-100">
                                APPLY COUPON
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mt-4 d-lg-flex justify-content-end">
                    <div class="col-lg-8">
                        <div class="fs-1 text-sm-end">
                            Cart Details
                        </div>
                        <div class="table-responsive">
                            <table class="table table-borderless">
                                <tbody>
                                <tr>
                                    <td> <div class="fw-medium"> SUBTOTAL </div> </td>
                                    <td> <div class="text-theme fw-medium w-100 text-end"> £215.00 </div> </td>
                                </tr>
                                <tr>
                                    <td> <div class="fw-medium"> SHIPPING </div> </td>
                                    <td>
                                        <div class="fw-medium w-100 text-end">
                                            <label for="flat-rate" class="form-check-label d-block mb-3">
                                                <input type="radio" name="shippingType" id="flat-rate" class="form-radio">
                                                Flat Rate: <span class="text-theme"> £7.00 </span>
                                            </label>
                                            <label for="free-shipping" class="form-check-label d-block">
                                                <input type="radio" name="shippingType" id="free-shipping" class="form-radio" checked>
                                                Free Shipping
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td> <div class="fw-medium"> TOTAL </div> </td>
                                    <td> <div class="text-theme fw-medium w-100 text-end"> £215.00 </div> </td>
                                </tr>
                                </tbody>
                            </table>
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
        return{}
    },
    mounted() {
    },
    methods: {
    }
}

</script>
