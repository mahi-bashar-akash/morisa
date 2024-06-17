<template>

    <div class="row justify-content-center">

        <div class="col-lg-6 col-xl-4">

            <div class="card bg-white rounded-0 border shadow">

                <div
                    class="card-header d-flex justify-content-start align-items-center gap-3 p-4 bg-white rounded-0 border-0">

                    <button type="button"
                            class="width-35 height-35 d-flex justify-content-center align-items-center border-0 shadow-sm rounded-circle"
                            :class="{ 'bg-light' : tab !== 1, 'bg-theme' : tab === 1 }" @click="setTab(1)">
                        <i class="bi bi-person-fill"></i>
                    </button>

                    <button type="button"
                            class="width-35 height-35 d-flex justify-content-center align-items-center border-0 shadow-sm rounded-circle"
                            :class="{ 'bg-light' : tab !== 2, 'bg-theme' : tab === 2 }" @click="setTab(2)">
                        <i class="bi bi-shield-fill"></i>
                    </button>

                </div>

                <div class="card-body p-4 border-0">

                    <template v-if="tab === 1">
                        <div class="form-group mb-3">
                            <div class="d-flex justify-content-center">
                                <label for="upload-file"
                                       class="width-200 height-200 rounded-circle cursor-pointer d-flex justify-content-center align-items-center shadow fs-1 text-light-gray">
                                    MBA
                                    <input type="file" name="upload-file" id="upload-file" hidden="hidden">
                                </label>
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <label for="full-name" class="form-label">Full Name</label>
                            <input id="full-name" type="text" name="full-name"
                                   class="form-control p-3 shadow-none rounded-0" required autocomplete="new-full-name"
                                   v-model="profileParam.full_name">
                        </div>
                        <div class="form-group mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input id="email" type="email" name="email" class="form-control p-3 shadow-none rounded-0"
                                   required autocomplete="new-email" v-model="profileParam.email">
                        </div>
                        <div class="form-group mb-3">
                            <label for="phone-number" class="form-label">Phone Number</label>
                            <input id="phone-number" type="text" name="phone-number"
                                   class="form-control p-3 shadow-none rounded-0" required
                                   autocomplete="new-phone-number" v-model="profileParam.phone_number">
                        </div>
                        <button type="submit" class="btn btn-theme rounded-0 py-2 width-120">
                            SUBMIT
                        </button>
                    </template>

                    <template v-if="tab === 2">
                        <div class="form-group mb-3">
                            <label for="old-password" class="form-label">Old Password</label>
                            <input id="old-password" type="password" name="old-password"
                                   class="form-control p-3 shadow-none rounded-0" required
                                   autocomplete="new-old-password" v-model="passwordParam.oldPassword">
                        </div>
                        <div class="form-group mb-3">
                            <label for="password" class="form-label">New Password</label>
                            <input id="password" type="password" name="password"
                                   class="form-control p-3 shadow-none rounded-0" required autocomplete="new-password"
                                   v-model="passwordParam.password">
                        </div>
                        <div class="form-group mb-3">
                            <label for="confirm-password" class="form-label">Confirm Password</label>
                            <input id="confirm-password" type="password" name="confirm-password"
                                   class="form-control p-3 shadow-none rounded-0" required
                                   autocomplete="new-confirm-password" v-model="passwordParam.confirmPassword">
                        </div>
                        <button type="submit" class="btn btn-theme py-2 width-120 rounded-0">
                            SUBMIT
                        </button>
                    </template>

                </div>

            </div>

        </div>

    </div>

</template>

<script>

export default {
    data() {
        return {
            tab: 1,
            profileParam: {
                full_name: '',
                email: '',
                phone_number: '',
            },
            passwordParam: {
                oldPassword: '',
                password: '',
                confirmPassword: '',
            },
        }
    },
    mounted() {  },
    methods: {

        /* --- --- --- set tab --- --- --- */
        setTab(tab) {
            this.tab = tab
        }
    }
}

</script>
