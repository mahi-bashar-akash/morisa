<template>

    <div class="card">
        <div class="card-body">
            <form class="row">
                <div class="col-lg-4">
                    <div class="form-group mb-3 mb-lg-0">
                        <label for="phone-number" class="form-label fw-medium">Phone Number</label>
                        <input id="phone-number" type="text" name="phone-number" class="form-control p-3 border rounded-0 shadow-none" required autocomplete="new-phone-number">
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group mb-3 mb-lg-0">
                        <label for="email" class="form-label fw-medium">Email</label>
                        <input id="email" type="email" name="email" class="form-control p-3 border rounded-0 shadow-none" required autocomplete="new-email">
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group mb-3 mb-lg-0">
                        <label for="address" class="form-label fw-medium">Address</label>
                        <input id="address" type="text" name="address" class="form-control p-3 border rounded-0 shadow-none" required autocomplete="new-address">
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>

<script>

export default {
    data(){
        return{

        }
    },
    mounted() {

    },
    methods: {

    }
}

</script>
