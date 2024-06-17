<template>

    <section class="card border-0 rounded-0 bg-white height-calc-150">
        <div
            class="card-header border-0 rounded-0 bg-white p-3 height-50 d-flex justify-content-start align-items-center fw-bold">
            About
        </div>
        <form class="card-body border-0 rounded-0 bg-white p-3 scrollbar">
            <div class="row">
                <div class="col-12">
                    <div class="form-group mb-3">
                        <label for="author-name" class="form-label">Author name</label>
                        <input type="text" name="author-name" id="author-name" class="form-textarea p-3" required
                               autocomplete="new-author-name" placeholder="Enter your name"
                               v-model="formData.author_name">
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group mb-3">
                        <label for="what-we-do" class="form-label fw-medium">What we do?</label>
                        <textarea name="what-we-do" id="what-we-do" cols="30" rows="5" class="form-textarea p-3 resize"
                                  required autocomplete="new-what-we-do" placeholder="Enter what you do"
                                  v-model="formData.what_we_do"></textarea>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group mb-3">
                        <label for="why-we-are" class="form-label fw-medium">Why we are?</label>
                        <textarea name="why-we-are" id="why-we-are" cols="30" rows="5" class="form-textarea p-3 resize"
                                  required autocomplete="new-why-we-are" placeholder="Enter why you are"
                                  v-model="formData.why_we_are"></textarea>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group mb-3">
                        <label for="our-mission" class="form-label fw-medium">Our mission</label>
                        <textarea name="our-mission" id="our-mission" cols="30" rows="5"
                                  class="form-textarea p-3 resize" required autocomplete="new-our-mission"
                                  placeholder="Enter your mission" v-model="formData.our_mission"></textarea>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="form-group mb-3">
                        <label for="our-vision" class="form-label fw-medium">Our vision</label>
                        <textarea name="our-vision" id="our-vision" cols="30" rows="5" class="form-textarea p-3 resize"
                                  required autocomplete="new-our-vision" placeholder="Enter your vision"
                                  v-model="formData.our_vision"></textarea>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-theme py-2 width-120 rounded-0">
                        SUBMIT
                    </button>
                </div>
            </div>
        </form>
    </section>

</template>

<script>

export default {
    data() {
        return {
            formData: {
                author_name: '',
                what_we_do: '',
                why_we_are: '',
                our_mission: '',
                our_vision: '',
            }
        }
    },
    mounted() {

    },
    methods: {}
}

</script>
