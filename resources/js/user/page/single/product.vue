<template>

    <!-- breadcrumb -->
    <section class="w-100 py-5">
        <div class="container">
            <div class="position-relative">
                <img :src="`/images/breadcrumb.webp`" class="img-fluid object-fit-cover height-320 w-100"
                     alt="breadcrumb">
                <div
                    class="position-absolute start-0 top-0 w-100 h-100 text-center d-flex justify-content-center align-items-center flex-column">
                    <div class="fs-1 mb-3">Product</div>
                    <div class="d-flex justify-content-center align-items-center">
                        <router-link :to="{name: 'home'}" class="text-decoration-none text-secondary">
                            Home
                        </router-link>
                        <div class="mx-3"> - </div>
                        <router-link :to="{name: 'shop'}" class="text-decoration-none text-secondary">
                            Shop
                        </router-link>
                        <div class="mx-3"> - </div>
                        <router-link :to="{name: 'singleProduct'}" class="text-decoration-none text-theme">
                            Details
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- single product -->
    <section class="w-100 py-5">
        <div class="container">

            <!-- single product -->
            <div class="p-2">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="row">
                            <div class="col-12 px-3 pt-3 pb-1">
                                <img :src="`/images/product/product-01.jpg`" class="img-fluid object-fit-cover w-100" alt="product">
                            </div>
                            <div class="d-flex justify-content-center flex-wrap">
                                <div class="col-6 col-md-3 p-1">
                                    <img :src="`/images/product/product-01.jpg`" class="img-fluid object-fit-cover w-100" alt="product">
                                </div>
                                <div class="col-6 col-md-3 p-1">
                                    <img :src="`/images/product/product-02.jpg`" class="img-fluid object-fit-cover w-100" alt="product">
                                </div>
                                <div class="col-6 col-md-3 p-1">
                                    <img :src="`/images/product/product-03.jpg`" class="img-fluid object-fit-cover w-100" alt="product">
                                </div>
                                <div class="col-6 col-md-3 p-1">
                                    <img :src="`/images/product/product-04.jpg`" class="img-fluid object-fit-cover w-100" alt="product">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="pt-3 px-3 truncate-to-1-line fw-medium fs-4">
                            Aopo Designs Woolrich Klettersack Backpack
                        </div>
                        <div class="d-flex align-items-center justify-content-start pt-3 px-3 text-warning">
                            <i class="me-1 bi bi-star-fill"> </i>
                            <i class="me-1 bi bi-star-fill"> </i>
                            <i class="me-1 bi bi-star-fill"> </i>
                            <i class="me-1 bi bi-star-fill"> </i>
                            <i class="me-1 bi bi-star-fill"> </i>
                        </div>
                        <div class="pt-3 px-3 text-secondary">
                            $122.00
                        </div>
                        <div class="pt-3 px-3 text-secondary">
                            Mauris blandit, metus a venenatis lacinia, felis enim tincidunt est, condimentum vulputate orci augue eu metus. Fusce dictum, nisi et semper ultricies, felis tortor blandit odio, egestas consequat pur..
                        </div>
                        <div class="pt-3 px-3 text-secondary">
                            <div class="mb-3">
                                Ex Tax: <span class="text-theme"> $10.00 </span>
                            </div>
                            <div class="mb-3">
                                Reward Points: <span class="text-theme"> %s 200 </span>
                            </div>
                            <div class="mb-3">
                                Brands: <span class="text-theme"> Armani </span>
                            </div>
                            <div class="mb-3">
                                Product Code: <span class="text-theme"> Product 1 </span>
                            </div>
                            <div class="mb-3">
                                Reward Points: <span class="text-theme"> 400 </span>
                            </div>
                            <div class="mb-3">
                                Availability: <span class="text-theme"> In Stock </span>
                            </div>
                        </div>
                        <div class="px-3 pt-3">
                            <div class="py-3 px-4 border">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group mb-3">
                                            <label for="color-option" class="form-label fs-4 fw-medium"> Color Options </label>
                                            <select name="color-option" id="color-option" class="form-select shadow-none border p-3" required autocomplete="new-color-options">
                                                <option value="select-color"> Select Color </option>
                                                <option value="red"> Red </option>
                                                <option value="blue"> Blue </option>
                                                <option value="green"> Green </option>
                                                <option value="yellow"> Yellow </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group mb-3">
                                            <label for="size-option" class="form-label fs-4 fw-medium"> Size Options </label>
                                            <select name="size-option" id="size-option" class="form-select shadow-none border p-3" required autocomplete="new-size-options">
                                                <option value="select-color"> Select Size </option>
                                                <option value="small"> Small </option>
                                                <option value="medium"> Medium </option>
                                                <option value="large"> Large </option>
                                                <option value="extra-large"> Extra Large </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pt-3 px-3">
                            <div class="row">
                                <div class="col-12 col-md-4 p-3">
                                    <input type="text" name="quantity" class="form-control text-center p-3 shadow-none rounded-0 border" autocomplete="new-quantity" value="1">
                                </div>
                                <div class="col-12 col-md-4 p-3">
                                    <button type="button" class="btn btn-outline-theme rounded-0 w-100 p-3">
                                        Add to cart
                                    </button>
                                </div>
                                <div class="col-12 col-md-4 p-3">
                                    <button type="button" class="btn btn-outline-theme rounded-0 w-100 p-3">
                                        <i class="bi bi-heart-fill me-2"></i>
                                        Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <div class="mt-5">
        <div class="container">
            <div class="d-flex justify-content-center align-items-center mb-5">
                <button type="button" class="btn border-0 px-4 py-2 mx-2 rounded-0" @click="setTabChange('description')" :class="{ 'bg-dark text-white' : this.tab === 'description', 'bg-secondary-subtle' : this.tab !== 'description' }">
                    Description
                </button>
                <button type="button" class="btn border-0 px-4 py-2 mx-2 rounded-0" @click="setTabChange('review')" :class="{ 'bg-dark text-white' : this.tab === 'review', 'bg-secondary-subtle' : this.tab !== 'review' }">
                    Review (0)
                </button>
            </div>
            <div v-if="tab === 'description'">
                <div class="mb-3 text-secondary text-opacity-75">
                    Bacon ipsum dolor sit amet ut nostrud chuck, voluptate adipisicing veniam kielbasa fugiat ex spare ribs. Incididunt sint officia non cow, ut et. Cillum porchetta tongue occaecat laborum bacon aliquip fatback flank dolore short loin ball tip bresaola deserunt dolor. Shoulder fugiat ut in ut tail swine dolore, capicola ullamco beef occaecat meatball. Laboris turkey in et chuck deserunt ad incididunt do.
                </div>
                <div class="mb-3 text-secondary text-opacity-75">
                    Capicola chuck tongue, anim consequat leberkas laborum ut enim bacon. Ribeye hamburger pastrami nisi ad consectetur dolor exercitation pork belly officia brisket pariatur mollit nulla turkey. Est dolore nulla cupidatat pork chop. Sausage officia pastrami chicken.
                </div>
                <div class="mb-3 text-secondary text-opacity-75">
                    Tail sed sausage magna quis commodo swine. Aliquip strip steak esse ex in ham hock fugiat in. Labore velit pork belly eiusmod ut shank doner capicola consectetur landjaeger fugiat excepteur short loin. Pork belly laboris mollit in leberkas qui. Pariatur swine aliqua pork chop venison veniam. Venison sed cow short loin bresaola shoulder cupidatat capicola drumstick dolore magna shankle.
                </div>
                <div class="mb-3 text-secondary text-opacity-75">
                    Sunt tail est sirloin meatloaf shank, brisket tempor duis swine fugiat dolore. Spare ribs esse jowl consectetur hamburger quis magna. Doner andouille dolore eiusmod, shank short ribs sausage adipisicing ball tip drumstick et. Ribeye in tenderloin bresaola laborum eu voluptate dolor sausage.
                </div>
            </div>
            <div v-if="tab === 'review'">
                <div class="fw-medium fs-3 border-bottom pb-2">
                    Reviews
                </div>
                <div class="text-secondary my-3">
                    Be the first to review “Apple 16Gb iPad Mini”
                </div>
                <div class="fw-medium fs-3 my-3">
                    Your Rating
                </div>

                <div class="mb-3">
                    <div class="d-flex justify-content-start align-items-center">
                        <input type="checkbox" id="star1" class="form-checkbox d-none" v-model="productReviewParam.rating" value="1" @click="updateRating(1)" />
                        <label for="star1" class="me-2 cursor-pointer text-warning" :class="{ 'bi bi-star-fill': productReviewParam.rating.includes('1'), 'bi bi-star': !productReviewParam.rating.includes('1') }"></label>
                        <input type="checkbox" id="star2" class="form-checkbox d-none" v-model="productReviewParam.rating" value="2" @click="updateRating(2)" />
                        <label for="star2" class="me-2 cursor-pointer text-warning" :class="{ 'bi bi-star-fill': productReviewParam.rating.includes('2'), 'bi bi-star': !productReviewParam.rating.includes('2') }"></label>
                        <input type="checkbox" id="star3" class="form-checkbox d-none" v-model="productReviewParam.rating" value="3" @click="updateRating(3)" />
                        <label for="star3" class="me-2 cursor-pointer text-warning" :class="{ 'bi bi-star-fill': productReviewParam.rating.includes('3'), 'bi bi-star': !productReviewParam.rating.includes('3') }"></label>
                        <input type="checkbox" id="star4" class="form-checkbox d-none" v-model="productReviewParam.rating" value="4" @click="updateRating(4)" />
                        <label for="star4" class="me-2 cursor-pointer text-warning" :class="{ 'bi bi-star-fill': productReviewParam.rating.includes('4'), 'bi bi-star': !productReviewParam.rating.includes('4') }"></label>
                        <input type="checkbox" id="star5" class="form-checkbox d-none" v-model="productReviewParam.rating" value="5" @click="updateRating(5)" />
                        <label for="star5" class="me-2 cursor-pointer text-warning" :class="{ 'bi bi-star-fill': productReviewParam.rating.includes('5'), 'bi bi-star': !productReviewParam.rating.includes('5') }"></label>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group mb-3">
                            <label for="review-message" class="form-label">Your Review</label>
                            <textarea name="review-message" id="review-message" class="form-textarea p-3 border" cols="30" rows="5" required autocomplete="new-message"></textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input id="name" type="text" name="name" class="form-control border shadow-none p-3" required autocomplete="new-name">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input id="email" type="email" name="email" class="form-control border shadow-none p-3" required autocomplete="new-email">
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-light-theme p-3 width-96 rounded-0">
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-4">
        <div class="container">
            <div class="fs-3 fw-medium text-center mb-4">
                Related Products
            </div>
            <div class="text-center text-secondary mb-4">
                Order online and have your products delivered to your closest store for free
            </div>
            <div class="related-product-owl-carousel owl-carousel owl-theme">
                <div class="p-1">
                    <div class="position-relative">
                        <img :src="`/images/product/product-04.jpg`" class="img-fluid object-fit-contain" alt="product ">
                        <div class="position-absolute top-0 end-0 p-3">
                            <div class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                Sale
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center py-3">
                        <div class="text-light-gray-hover cursor-pointer">
                            Chanel
                        </div>
                        <div class="d-flex align-items-center justify-content-end">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                        </div>
                    </div>
                    <div class="py-3 fs-6 fw-bold line-height-2">
                        Dopo Designs Woolrich Klettersack Backpack
                    </div>
                    <div class="fs-4 text-secondary text-opacity-75"> $98.00 </div>
                </div>
                <div class="p-1">
                    <div class="position-relative">
                        <img :src="`/images/product/product-05.jpg`" class="img-fluid object-fit-contain" alt="product ">
                        <div class="position-absolute top-0 end-0 p-3 invisible">
                            <div class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                Sale
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center py-3">
                        <div class="text-light-gray-hover cursor-pointer">
                            Chanel
                        </div>
                        <div class="d-flex align-items-center justify-content-end">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                        </div>
                    </div>
                    <div class="py-3 fs-6 fw-bold line-height-2">
                        Dopo Designs Woolrich Klettersack Backpack
                    </div>
                    <div class="fs-4 text-secondary text-opacity-75"> $26.00 </div>
                </div>
                <div class="p-1">
                    <div class="position-relative">
                        <img :src="`/images/product/product-06.jpg`" class="img-fluid object-fit-contain" alt="product ">
                        <div class="position-absolute top-0 end-0 p-3">
                            <div class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                Sale
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center py-3">
                        <div class="text-light-gray-hover cursor-pointer">
                            Chanel
                        </div>
                        <div class="d-flex align-items-center justify-content-end">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                        </div>
                    </div>
                    <div class="py-3 fs-6 fw-bold line-height-2">
                        Dopo Designs Woolrich Klettersack Backpack
                    </div>
                    <div class="fs-4 text-secondary text-opacity-75"> $46.00 </div>
                </div>
                <div class="p-1">
                    <div class="position-relative">
                        <img :src="`/images/product/product-07.jpg`" class="img-fluid object-fit-contain" alt="product ">
                        <div class="position-absolute top-0 end-0 p-3 invisible">
                            <div class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                Sale
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center py-3">
                        <div class="text-light-gray-hover cursor-pointer">
                            Chanel
                        </div>
                        <div class="d-flex align-items-center justify-content-end">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                        </div>
                    </div>
                    <div class="py-3 fs-6 fw-bold line-height-2">
                        Dopo Designs Woolrich Klettersack Backpack
                    </div>
                    <div class="fs-4 text-secondary text-opacity-75"> $21.00 </div>
                </div>
                <div class="p-1">
                    <div class="position-relative">
                        <img :src="`/images/product/product-08.jpg`" class="img-fluid object-fit-contain" alt="product ">
                        <div class="position-absolute top-0 end-0 p-3">
                            <div class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                Sale
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center py-3">
                        <div class="text-light-gray-hover cursor-pointer">
                            Chanel
                        </div>
                        <div class="d-flex align-items-center justify-content-end">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                        </div>
                    </div>
                    <div class="py-3 fs-6 fw-bold line-height-2">
                        Dopo Designs Woolrich Klettersack Backpack
                    </div>
                    <div class="fs-4 text-secondary text-opacity-75"> $102.00 </div>
                </div>
                <div class="p-1">
                    <div class="position-relative">
                        <img :src="`/images/product/product-09.jpg`" class="img-fluid object-fit-contain" alt="product ">
                        <div class="position-absolute top-0 end-0 p-3 invisible">
                            <div class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                Sale
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center py-3">
                        <div class="text-light-gray-hover cursor-pointer">
                            Chanel
                        </div>
                        <div class="d-flex align-items-center justify-content-end">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                        </div>
                    </div>
                    <div class="py-3 fs-6 fw-bold line-height-2">
                        Dopo Designs Woolrich Klettersack Backpack
                    </div>
                    <div class="fs-4 text-secondary text-opacity-75"> $98.00 </div>
                </div>
                <div class="p-1">
                    <div class="position-relative">
                        <img :src="`/images/product/product-10.jpg`" class="img-fluid object-fit-contain" alt="product ">
                        <div class="position-absolute top-0 end-0 p-3">
                            <div class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                Sale
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center py-3">
                        <div class="text-light-gray-hover cursor-pointer">
                            Chanel
                        </div>
                        <div class="d-flex align-items-center justify-content-end">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                        </div>
                    </div>
                    <div class="py-3 fs-6 fw-bold line-height-2">
                        Dopo Designs Woolrich Klettersack Backpack
                    </div>
                    <div class="fs-4 text-secondary text-opacity-75"> $116.00 </div>
                </div>
                <div class="p-1">
                    <div class="position-relative">
                        <img :src="`/images/product/product-11.jpg`" class="img-fluid object-fit-contain" alt="product ">
                        <div class="position-absolute top-0 end-0 p-3 invisible">
                            <div class="width-60 height-60 rounded-circle bg-dark d-flex justify-content-center align-items-center text-white">
                                Sale
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center py-3">
                        <div class="text-light-gray-hover cursor-pointer">
                            Chanel
                        </div>
                        <div class="d-flex align-items-center justify-content-end">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                        </div>
                    </div>
                    <div class="py-3 fs-6 fw-bold line-height-2">
                        Dopo Designs Woolrich Klettersack Backpack
                    </div>
                    <div class="fs-4 text-secondary text-opacity-75"> $39.00 </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    data(){
        return {
            tab: 'description',
            productReviewParam: {
                rating: [],
            },
        }
    },
    mounted() {
        this.relatedProductOwlCarousel();
    },
    methods: {

        /* Function of update rating of product review */
        updateRating(selectedRating) {
            this.productReviewParam.rating = [];
            for (let i = 1; i <= selectedRating; i++) {
                this.productReviewParam.rating.push(i.toString());
            }
        },

        /* Function to product description or review tab change */
        setTabChange(tab) {
            this.tab = tab;
        },

        /* Function to feature product owl carousel */
        relatedProductOwlCarousel() {
            $('.related-product-owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: false,
                autoplay:true,
                slideTransition: 'linear',
                autoplaySpeed: 4000,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    991: {
                        items: 3
                    },
                    1200: {
                        items: 5
                    }
                }
            })
        },

    }
}

</script>
