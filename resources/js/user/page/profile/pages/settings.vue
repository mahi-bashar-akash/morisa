<template>

    <section class="w-100 py-5">
        <div class="container">

            <div class="col-lg-6 px-0 mb-4">
                <div class="col-md-12 mb-3 fs-4"> Edit Profile</div>
                <div class="px-3">
                    <form class="w-100 px-3 py-4 border row">
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="full-name" class="form-label">Full Name</label>
                                <input type="text" name="full-name" id="full-name"
                                       class="form-control rounded-0 border shadow-none p-3" required
                                       autocomplete="new-full-name">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="text" name="email" id="email"
                                       class="form-control rounded-0 border shadow-none p-3" required
                                       autocomplete="new-email">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="phone-number" class="form-label">Phone Number</label>
                                <input type="text" name="phone-number" id="phone-number"
                                       class="form-control rounded-0 border shadow-none p-3" required
                                       autocomplete="new-phone-number">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="present-address" class="form-label">Present Address</label>
                                <input type="text" name="present-address"
                                       class="form-control rounded-0 border shadow-none p-3" required
                                       autocomplete="new-present-address">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <button type="submit" class="btn btn-outline-theme py-3 width-96 rounded-0">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="col-lg-6 px-0">
                <div class="col-md-12 mb-3 fs-4"> Change Password</div>
                <div class="px-3">
                    <form class="w-100 px-3 py-4 border row">
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="old-password" class="form-label">Old Password</label>
                                <input type="text" name="old-password" id="old-password"
                                       class="form-control rounded-0 border shadow-none p-3" required
                                       autocomplete="new-old-password">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="new-password" class="form-label">New Password</label>
                                <input type="text" name="new-password" id="new-password"
                                       class="form-control rounded-0 border shadow-none p-3" required
                                       autocomplete="new-new-password">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="confirm-password" class="form-label">Confirm
                                    Password</label>
                                <input type="text" name="confirm-password" id="confirm-password"
                                       class="form-control rounded-0 border shadow-none p-3" required
                                       autocomplete="new-confirm-password">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <button type="submit" class="btn btn-outline-theme py-3 width-96 rounded-0">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </section>

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
