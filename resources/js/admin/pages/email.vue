<template>

    <div class="email-wrapper height-calc-150 border bg-white">
        <div class="email-sidebar p-4" :class="{ 'active' : emailSidebarActive }">

            <!-- compose btn -->
            <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="w-100">
                    <button type="button" class="btn btn-light-theme w-100" @click="openComposeModal()">
                        <i class="bi bi-plus-lg"></i>
                        <span class="ms-2"> Compose </span>
                    </button>
                </div>
                <div class="ms-3 d-xl-none">
                    <button type="button" class="btn-icon rounded-circle box-inside-shadow" @click="sidebarClose()">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
            </div>

            <!-- list of type calling -->
            <div class="mb-3">
                <button type="button"
                        class="btn px-0 border-0 d-flex justify-content-between align-items-center text-light-gray-hover w-100 mb-2"
                        @click="sidebarClose()">
                    <span>
                        <i class="bi bi-envelope"></i>
                        <span class="ms-2"> All </span>
                    </span>
                    <span
                        class="bg-light fw-medium rounded-1 px-2 height-25 d-flex justify-content-center align-items-center border">
                        5
                    </span>
                </button>
                <button type="button"
                        class="btn px-0 border-0 d-flex justify-content-between align-items-center text-light-gray-hover w-100 mb-2"
                        @click="sidebarClose()">
                    <span>
                        <i class="bi bi-archive"></i>
                        <span class="ms-2"> Index </span>
                    </span>
                    <span
                        class="bg-light fw-medium rounded-1 px-2 height-25 d-flex justify-content-center align-items-center border">
                        5
                    </span>
                </button>
                <button type="button"
                        class="btn px-0 border-0 d-flex justify-content-between align-items-center text-light-gray-hover w-100 mb-2"
                        @click="sidebarClose()">
                    <span>
                        <i class="bi bi-send"></i>
                        <span class="ms-2"> Sent </span>
                    </span>
                </button>
                <button type="button"
                        class="btn px-0 border-0 d-flex justify-content-between align-items-center text-light-gray-hover w-100 mb-2"
                        @click="sidebarClose()">
                    <span>
                        <i class="bi bi-pencil-square"></i>
                        <span class="ms-2"> Draft </span>
                    </span>
                </button>
                <button type="button"
                        class="btn px-0 border-0 d-flex justify-content-between align-items-center text-light-gray-hover w-100 mb-2"
                        @click="sidebarClose()">
                    <span>
                        <i class="bi bi-exclamation-diamond"></i>
                        <span class="ms-2"> Spam </span>
                    </span>
                </button>
                <button type="button"
                        class="btn px-0 border-0 d-flex justify-content-between align-items-center text-light-gray-hover w-100 mb-2"
                        @click="sidebarClose()">
                    <span>
                        <i class="bi bi-trash2"></i>
                        <span class="ms-2"> Trash </span>
                    </span>
                </button>
                <button type="button"
                        class="btn px-0 border-0 d-flex justify-content-between align-items-center text-light-gray-hover w-100 mb-2"
                        @click="sidebarClose()">
                    <span>
                        <i class="bi bi-bookmark-star"></i>
                        <span class="ms-2"> Starred </span>
                    </span>
                </button>
                <button type="button"
                        class="btn px-0 border-0 d-flex justify-content-between align-items-center text-light-gray-hover w-100 mb-2"
                        @click="sidebarClose()">
                    <span>
                        <i class="bi bi-tags"></i>
                        <span class="ms-2"> Important </span>
                    </span>
                </button>
            </div>

            <!-- list of label -->
            <div class="fw-bold text-light-gray mb-3"> LABELS</div>
            <div class="mb-3">
                <button type="button"
                        class="btn px-0 border-0 d-flex justify-content-between align-items-center text-light-gray-hover w-100 mb-2"
                        @click="sidebarClose()">
                    <span>
                        <i class="bi bi-circle"></i>
                        <span class="ms-2"> Support </span>
                    </span>
                    <span
                        class="bg-light fw-medium rounded-1 px-2 height-25 d-flex justify-content-center align-items-center border">
                        5
                    </span>
                </button>
                <button type="button"
                        class="btn px-0 border-0 d-flex justify-content-between align-items-center text-light-gray-hover w-100 mb-2"
                        @click="sidebarClose()">
                    <span>
                        <i class="bi bi-circle"></i>
                        <span class="ms-2"> Freelance </span>
                    </span>
                </button>
                <button type="button"
                        class="btn px-0 border-0 d-flex justify-content-between align-items-center text-light-gray-hover w-100 mb-2"
                        @click="sidebarClose()">
                    <span>
                        <i class="bi bi-circle"></i>
                        <span class="ms-2"> Social </span>
                    </span>
                </button>
                <button type="button"
                        class="btn px-0 border-0 d-flex justify-content-between align-items-center text-light-gray-hover w-100 mb-2"
                        @click="sidebarClose()">
                    <span>
                        <i class="bi bi-circle"></i>
                        <span class="ms-2"> Friendly </span>
                    </span>
                    <span
                        class="bg-light fw-medium rounded-1 px-2 height-25 d-flex justify-content-center align-items-center border">
                        5
                    </span>
                </button>
            </div>
        </div>

        <!-- email content -->
        <div class="email-content">

            <!-- email information -->
            <div class="email-information" :class="{ 'active' : mailSidebarActive }">

                <div class="p-3 d-flex justify-content-start align-items-center">
                    <div class="me-3">
                        <button type="button" class="btn-icon box-inside-shadow rounded-circle"
                                @click="closeMailSidebar()">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <div class="d-flex align-items-center justify-content-start">
                        <div class="me-3">
                            <img :src="`/images/avatar/avatar-03.jpg`" class="width-45 height-45 rounded-circle"
                                 alt="avatar">
                        </div>
                        <div class="d-inline-block fw-bold text-theme">
                            Peter, me
                        </div>
                    </div>
                </div>

                <div class="p-3 mt-4 scrollbar height-calc-490">
                    <div class="border p-3 mb-3">
                        Hi,
                        <br><br>
                        Everyone realizes why a new common language would be desirable: one could refuse to pay
                        expensive
                        translators. To achieve this, it would be necessary to have uniform grammar pronunciation.
                        <br><br>
                        Thank you
                    </div>
                </div>

                <div class="p-3">
                    <div class="form-group mb-3">
                        <label for="reply" class="form-label fw-bold"> Reply </label>
                        <textarea name="reply" class="form-textarea p-3 rounded-0 resize" id="reply" placeholder="Write here anything" cols="30" rows="5"
                                  required autocomplete="new-reply"></textarea>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-theme rounded-0 width-95">
                            SUBMIT
                        </button>
                    </div>
                </div>

            </div>

            <div class="container-fluid">

                <div class="height-70 row align-items-center px-2">
                    <div class="col-7 col-lg-4 d-flex justify-content-start align-items-center">

                        <div class="d-xl-none me-2">
                            <button type="button" class="btn-icon rounded-circle" @click="sidebarOpen()">
                                <i class="bi bi-justify-left"></i>
                            </button>
                        </div>

                        <!-- search -->
                        <div class="w-100 position-relative">
                            <input type="text" name="keyword"
                                   class="w-100 form-control bg-light shadow-none border-0 rounded-0 py-2 ps-5"
                                   placeholder="Search Here . . ." required autocomplete="new-keyword">
                            <div class="position-absolute top-50 start-0 translate-middle-y ps-3">
                                <i class="bi bi-search text-light-gray"></i>
                            </div>
                        </div>

                    </div>
                    <div class="col-5 col-lg-8 d-flex justify-content-end align-items-center">

                        <!-- btn -->
                        <button type="button" class="btn-icon rounded-circle p-0 box-inside-shadow">
                            <i class="bi bi-arrow-clockwise"></i>
                        </button>

                    </div>
                </div>

                <!-- group btn -->
                <div class="pb-3 ps-2">
                    <div class="ps-1 d-flex justify-content-start align-items-center gap-2">
                        <input type="checkbox" class="form-checkbox border-secondary">
                        <button type="button" class="btn-icon rounded-circle p-0" @click="openArchiveModel()">
                            <i class="bi bi-archive"></i>
                        </button>
                        <button type="button" class="btn-icon rounded-circle p-0" @click="openSpamModel()">
                            <i class="bi bi-exclamation-diamond"></i>
                        </button>
                    </div>
                </div>

                <div class="table-responsive height-calc-335 scrollbar border">
                    <table class="table table-borderless table-hover">
                        <tbody>

                        <!-- list of data -->
                        <tr class="align-middle cursor-pointer"
                            v-for="each in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]">
                            <td>
                                <div class="min-width-70 p-1 d-flex align-items-center justify-content-start">
                                    <input type="checkbox" class="form-checkbox border-secondary">
                                    <div class="ms-3">
                                        <i class="bi bi-star-fill text-light-gray"></i>
                                    </div>
                                </div>
                            </td>
                            <td @click="openMailSidebar()">
                                <div class="min-width-150 p-1">
                                    <div class="truncate-to-1-line">
                                        Peter, me
                                    </div>
                                </div>
                            </td>
                            <td @click="openMailSidebar()">
                                <div class="min-width-300 p-1 d-flex align-items-center justify-content-start">
                                        <span class="fw-medium">
                                            Hello
                                        </span>
                                    <i class="bi bi-dash-lg mx-2"></i>
                                    <span class="text-light-gray truncate-to-1-line">
                                            Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm.
                                            Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm.
                                        </span>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <!-- pagination -->
                <div class="d-flex justify-content-between align-items-center p-3">
                    <div aria-label="Page navigation example" class="admin-pagination">
                        <div class="pagination">
                            <div class="page-item">
                                <a class="page-link disabled" href="javascript:void(0)">
                                    <i class="bi bi-chevron-left"></i>
                                </a>
                            </div>
                            <div class="page-item active">
                                <a class="page-link" href="javascript:void(0)">
                                    1
                                </a>
                            </div>
                            <div class="page-item">
                                <a class="page-link" href="javascript:void(0)">
                                    2
                                </a>
                            </div>
                            <div class="page-item">
                                <a class="page-link" href="javascript:void(0)">
                                    3
                                </a>
                            </div>
                            <div class="page-item">
                                <a class="page-link" href="javascript:void(0)">
                                    <i class="bi bi-chevron-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="text-light-gray">
                        Showing 1 - 12 of 13 items
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- compose modal -->
    <div class="modal fade" id="composeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content rounded-0 p-3 border-0">
                <div class="modal-header border-0 rounded-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        New Message
                    </h1>
                    <button type="button" class="btn-close" @click="closeComposeModal()"></button>
                </div>
                <div class="modal-body border-0 rounded-0">
                    <div class="form-group mb-3">
                        <label for="to" class="form-label">To</label>
                        <input id="to" type="text" name="to" class="form-control rounded-0 p-3 shadow-none border"
                               required autocomplete="new-to">
                    </div>
                    <div class="form-group mb-3">
                        <label for="subject" class="form-label">Subject</label>
                        <input id="subject" type="text" name="subject"
                               class="form-control rounded-0 p-3 shadow-none border" required
                               autocomplete="new-subject">
                    </div>
                    <div class="form-group">
                        <label for="message" class="form-label">Message</label>
                        <textarea name="message" id="message" cols="30" rows="5"
                                  class="form-textarea rounded-0 p-3 shadow-none border" required
                                  autocomplete="new-message"></textarea>
                    </div>
                </div>
                <div class="modal-footer border-0 rounded-0">
                    <button type="button" class="btn btn-secondary width-96 py-2 rounded-0"
                            @click="closeComposeModal()">
                        Discard
                    </button>
                    <button type="button" class="btn btn-theme width-96 py-2 rounded-0">
                        Send
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- archive modal -->
    <div class="modal fade" id="archiveModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content rounded-0 p-3 border-0">
                <div class="modal-header border-0 rounded-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Archive
                    </h1>
                    <button type="button" class="btn-close" @click="closeArchiveModel()"></button>
                </div>
                <div class="modal-body border-0 rounded-0">
                    <div class="mb-3 text-center pt-4 fs-6">
                        Are you sure? To archive to transfer into trash for storage content 30 days.
                    </div>
                </div>
                <div class="modal-footer border-0 rounded-0">
                    <button type="button" class="btn btn-secondary width-96 py-2 rounded-0"
                            @click="closeArchiveModel()">
                        Close
                    </button>
                    <button type="button" class="btn btn-theme width-96 py-2 rounded-0">
                        Send
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- spam modal -->
    <div class="modal fade" id="spamModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content rounded-0 p-3 border-0">
                <div class="modal-header border-0 rounded-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Spam
                    </h1>
                    <button type="button" class="btn-close" @click="closeSpamModel()"></button>
                </div>
                <div class="modal-body border-0 rounded-0">
                    <div class="mb-3 text-center pt-4 fs-5">
                        Are you Sure?
                    </div>
                </div>
                <div class="modal-footer border-0 d-flex justify-content-between align-items-center">
                    <div class="col-5">
                        <button type="button" class="btn btn-secondary py-2 w-100 rounded-0"
                                @click="closeSpamModel()">
                            Close
                        </button>
                    </div>
                    <div class="col-5">
                        <button type="submit" class="btn btn-theme py-2 w-100 rounded-0">
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    data() {
        return {
            emailSidebarActive: false,
            mailSidebarActive: false,
        }
    },
    mounted() {
    },
    methods: {

        /* --- --- --- open compose model --- --- --- */
        openComposeModal() {
            const myModal = new bootstrap.Modal("#composeModal", {keyboard: false});
            myModal.show();
        },

        /* --- --- --- close compose modal --- --- --- */
        closeComposeModal() {
            let myModalEl = document.getElementById('composeModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

        /* --- --- --- open archive model --- --- --- */
        openArchiveModel() {
            const myModal = new bootstrap.Modal("#archiveModal", {keyboard: false});
            myModal.show();
        },

        /* --- --- --- close archive modal --- --- --- */
        closeArchiveModel() {
            let myModalEl = document.getElementById('archiveModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

        /* --- --- --- open spam model --- --- --- */
        openSpamModel() {
            const myModal = new bootstrap.Modal("#spamModal", {keyboard: false});
            myModal.show();
        },

        /* --- --- --- close spam modal --- --- --- */
        closeSpamModel() {
            let myModalEl = document.getElementById('spamModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

        /* --- --- --- email sidebar open --- --- --- */
        sidebarOpen() {
            if (window.innerWidth < 1201) {
                this.emailSidebarActive = true;
            }
        },

        /* --- --- --- email sidebar close --- --- --- */
        sidebarClose() {
            if (window.innerWidth < 1201) {
                this.emailSidebarActive = false;
            }
        },

        /* --- --- --- mail sidebar open --- --- --- */
        openMailSidebar() {
            this.mailSidebarActive = true;
        },

        /* --- --- --- mail sidebar close --- --- --- */
        closeMailSidebar() {
            this.mailSidebarActive = false;
        }

    }
}

</script>
