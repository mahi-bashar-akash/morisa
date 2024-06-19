<template>

    <div class="chat-wrapper height-calc-150 border bg-white">
        <div class="chat-sidebar" :class="{ 'active' : chatSidebarActive }">
            <div class="chat-justify-start py-3">

                <div class="d-flex justify-content-center align-items-center flex-column">
                    <div class="d-xl-none mb-3">
                        <button type="button" class="btn-icon rounded-circle box-inside-shadow"
                                @click="chatSidebarClose()">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </div>

                    <div class="position-relative">
                        <img :src="`/images/avatar/avatar-01.jpg`" class="width-45 height-45 rounded-circle"
                             alt="avatar">
                        <div class="position-absolute bottom-0 end-0">
                            <div class="bg-success width-12 height-12 rounded-circle"></div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="mb-3">
                        <button type="button"
                                class="btn width-45 height-45 border rounded-circle d-flex justify-content-center align-items-center"
                                @click="setTab(1)" :class="{ 'btn-light' : tab !== 1, 'btn-theme' : tab === 1 }">
                            <i class="bi bi-chat-dots"></i>
                        </button>
                    </div>

                    <div class="mb-3">
                        <button type="button"
                                class="btn width-45 height-45 border rounded-circle d-flex justify-content-center align-items-center"
                                @click="setTab(2)" :class="{ 'btn-light' : tab !== 2, 'btn-theme' : tab === 2 }">
                            <i class="bi bi-people"></i>
                        </button>
                    </div>

                    <div>
                        <button type="button"
                                class="btn width-45 height-45 border rounded-circle d-flex justify-content-center align-items-center"
                                @click="setTab(3)" :class="{ 'btn-light' : tab !== 3, 'btn-theme' : tab === 3 }">
                            <i class="bi bi-file-image"></i>
                        </button>
                    </div>
                </div>

            </div>
            <div class="chat-justify-adjust">

                <!-- Chat -->
                <template v-if="this.tab === 1">
                    <div class="d-flex justify-content-between align-items-center p-4">
                        <div class="fw-bold">
                            Chats
                        </div>
                        <button type="button"
                                class="btn btn-light-theme p-0 width-35 height-35 border-0 rounded-circle">
                            <i class="bi bi-plus-lg"></i>
                        </button>
                    </div>
                    <div class="px-3">
                        <div class="position-relative w-100">
                            <input type="text" name="keyword" placeholder="Search here..."
                                   class="bg-light form-control p-3 border rounded-0 box-inside-shadow" required
                                   autocomplete="new-keyword">
                            <div class="position-absolute top-50 end-0 translate-middle-y pe-3">
                                <i class="bi bi-search"></i>
                            </div>
                        </div>
                    </div>
                    <div class="mt-3 p-3 height-calc-293 scrollbar">
                        <button type="button"
                                class="btn btn-white-light w-100 mb-1 py-2 px-4 border-0 rounded-0 d-flex justify-content-start align-items-center">
                            <span>
                                <img :src="`/images/avatar/avatar-01.jpg`" class="width-35 height-35 rounded-circle"
                                     alt="avatar">
                            </span>
                            <span class="ms-3">
                                Frank Thomas
                            </span>
                        </button>
                        <button type="button"
                                class="btn btn-white-light w-100 mb-1 py-2 px-4 border-0 rounded-0 d-flex justify-content-start align-items-center">
                            <span>
                                <img :src="`/images/avatar/avatar-02.jpg`" class="width-35 height-35 rounded-circle"
                                     alt="avatar">
                            </span>
                            <span class="ms-3">
                                Clofford Taylor
                            </span>
                        </button>
                        <button type="button"
                                class="btn btn-white-light w-100 mb-1 py-2 px-4 border-0 rounded-0 d-flex justify-content-start align-items-center">
                            <span>
                                <img :src="`/images/avatar/avatar-03.jpg`" class="width-35 height-35 rounded-circle"
                                     alt="avatar">
                            </span>
                            <span class="ms-3">
                                Janete Caster
                            </span>
                        </button>
                        <button type="button"
                                class="btn btn-white-light w-100 mb-1 py-2 px-4 border-0 rounded-0 d-flex justify-content-start align-items-center">
                            <span>
                                <img :src="`/images/avatar/avatar-04.jpg`" class="width-35 height-35 rounded-circle"
                                     alt="avatar">
                            </span>
                            <span class="ms-3">
                                Frank Thomas
                            </span>
                        </button>
                        <button type="button"
                                class="btn btn-white-light w-100 mb-1 py-2 px-4 border-0 rounded-0 d-flex justify-content-start align-items-center">
                            <span>
                                <img :src="`/images/avatar/avatar-05.jpg`" class="width-35 height-35 rounded-circle"
                                     alt="avatar">
                            </span>
                            <span class="ms-3">
                                Clofford Taylor
                            </span>
                        </button>
                        <button type="button"
                                class="btn btn-white-light w-100 mb-1 py-2 px-4 border-0 rounded-0 d-flex justify-content-start align-items-center">
                            <span>
                                <img :src="`/images/avatar/avatar-06.jpg`" class="width-35 height-35 rounded-circle"
                                     alt="avatar">
                            </span>
                            <span class="ms-3">
                                Janete Caster
                            </span>
                        </button>
                        <button type="button"
                                class="btn btn-white-light w-100 mb-1 py-2 px-4 border-0 rounded-0 d-flex justify-content-start align-items-center">
                            <span>
                                <img :src="`/images/avatar/avatar-07.jpg`" class="width-35 height-35 rounded-circle"
                                     alt="avatar">
                            </span>
                            <span class="ms-3">
                                Frank Thomas
                            </span>
                        </button>
                        <button type="button"
                                class="btn btn-white-light w-100 mb-1 py-2 px-4 border-0 rounded-0 d-flex justify-content-start align-items-center">
                            <span>
                                <img :src="`/images/avatar/avatar-08.jpg`" class="width-35 height-35 rounded-circle"
                                     alt="avatar">
                            </span>
                            <span class="ms-3">
                                Clofford Taylor
                            </span>
                        </button>
                        <button type="button"
                                class="btn btn-white-light w-100 mb-1 py-2 px-4 border-0 rounded-0 d-flex justify-content-start align-items-center">
                            <span>
                                <img :src="`/images/avatar/avatar-09.jpg`" class="width-35 height-35 rounded-circle"
                                     alt="avatar">
                            </span>
                            <span class="ms-3">
                                Janete Caster
                            </span>
                        </button>
                    </div>
                </template>

                <!-- Contact -->
                <template v-if="this.tab === 2">
                    <div class="d-flex justify-content-between align-items-center p-4">
                        <div class="fw-bold">
                            Contacts
                        </div>
                        <button type="button"
                                class="btn btn-light-theme p-0 width-35 height-35 border-0 rounded-circle">
                            <i class="bi bi-plus-lg"></i>
                        </button>
                    </div>
                    <div class="px-3">
                        <div class="position-relative w-100">
                            <input type="text" name="keyword" placeholder="Search here..."
                                   class="bg-light form-control p-3 border rounded-0 box-inside-shadow" required
                                   autocomplete="new-keyword">
                            <div class="position-absolute top-50 end-0 translate-middle-y pe-3">
                                <i class="bi bi-search"></i>
                            </div>
                        </div>
                    </div>
                    <div class="mt-3 p-3 height-calc-293 scrollbar">
                        <div class="mb-3">
                            <div class="d-flex justify-content-start align-items-center">
                                <span class="me-2 text-theme fw-bold"> A </span>
                                <hr class="border-theme w-100">
                            </div>
                            <div class="mt-2">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="me-2">
                                        <div
                                            class="width-40 height-40 d-flex justify-content-center align-items-center bg-light-theme fw-medium rounded-circle small">
                                            AC
                                        </div>
                                    </div>
                                    <div class="text-secondary">
                                        Alice Cruickshank
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="d-flex justify-content-start align-items-center">
                                <span class="me-2 text-theme fw-bold"> B </span>
                                <hr class="border-theme w-100">
                            </div>
                            <div class="mt-2">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="me-2">
                                        <div
                                            class="width-40 height-40 d-flex justify-content-center align-items-center bg-light-theme fw-medium rounded-circle small">
                                            BB
                                        </div>
                                    </div>
                                    <div class="text-secondary">
                                        Barrett Brown
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="d-flex justify-content-start align-items-center">
                                <span class="me-2 text-theme fw-bold"> C </span>
                                <hr class="border-theme w-100">
                            </div>
                            <div class="mt-2">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="me-2">
                                        <div
                                            class="width-40 height-40 d-flex justify-content-center align-items-center bg-light-theme fw-medium rounded-circle small">
                                            CK
                                        </div>
                                    </div>
                                    <div class="text-secondary">
                                        Chris Kiernan
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="d-flex justify-content-start align-items-center">
                                <span class="me-2 text-theme fw-bold"> D </span>
                                <hr class="border-theme w-100">
                            </div>
                            <div class="mt-2">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="me-2">
                                        <div
                                            class="width-40 height-40 d-flex justify-content-center align-items-center bg-light-theme fw-medium rounded-circle small">
                                            DK
                                        </div>
                                    </div>
                                    <div class="text-secondary">
                                        Drichar Taylor
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="d-flex justify-content-start align-items-center">
                                <span class="me-2 text-theme fw-bold"> E </span>
                                <hr class="border-theme w-100">
                            </div>
                            <div class="mt-2">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="me-2">
                                        <div
                                            class="width-40 height-40 d-flex justify-content-center align-items-center bg-light-theme fw-medium rounded-circle small">
                                            EE
                                        </div>
                                    </div>
                                    <div class="text-secondary">
                                        Edith Evans
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="d-flex justify-content-start align-items-center">
                                <span class="me-2 text-theme fw-bold"> F </span>
                                <hr class="border-theme w-100">
                            </div>
                            <div class="mt-2">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="me-2">
                                        <div
                                            class="width-40 height-40 d-flex justify-content-center align-items-center bg-light-theme fw-medium rounded-circle small">
                                            FT
                                        </div>
                                    </div>
                                    <div class="text-secondary">
                                        Frank Thomas
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="d-flex justify-content-start align-items-center">
                                <span class="me-2 text-theme fw-bold"> G </span>
                                <hr class="border-theme w-100">
                            </div>
                            <div class="mt-2">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="me-2">
                                        <div
                                            class="width-40 height-40 d-flex justify-content-center align-items-center bg-light-theme fw-medium rounded-circle small">
                                            GB
                                        </div>
                                    </div>
                                    <div class="text-secondary">
                                        Gilbert Beer
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="d-flex justify-content-start align-items-center">
                                <span class="me-2 text-theme fw-bold"> H </span>
                                <hr class="border-theme w-100">
                            </div>
                            <div class="mt-2">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="me-2">
                                        <div
                                            class="width-40 height-40 d-flex justify-content-center align-items-center bg-light-theme fw-medium rounded-circle small">
                                            HD
                                        </div>
                                    </div>
                                    <div class="text-secondary">
                                        Hitach Declor
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="d-flex justify-content-start align-items-center">
                                <span class="me-2 text-theme fw-bold"> I </span>
                                <hr class="border-theme w-100">
                            </div>
                            <div class="mt-2">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="me-2">
                                        <div
                                            class="width-40 height-40 d-flex justify-content-center align-items-center bg-light-theme fw-medium rounded-circle small">
                                            IR
                                        </div>
                                    </div>
                                    <div class="text-secondary">
                                        Ichad Rechard
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>

                <!-- Attachments -->
                <template v-if="this.tab === 3">
                    <div class="d-flex justify-content-between align-items-center p-4">
                        <div class="fw-bold">
                            Attachments
                        </div>
                    </div>
                    <div class="p-3 height-calc-215 scrollbar">
                        <button type="button"
                                class="btn btn-white-light d-flex justify-content-start align-items-center w-100 border mb-2">
                            <span class="me-3 d-inline-block">
                                <span
                                    class="width-40 height-40 p-0 rounded-circle border-theme bg-light-theme text-theme fw-bold d-flex justify-content-center align-items-center">
                                    <i class="bi bi-file-earmark-text"></i>
                                </span>
                            </span>
                            <span class="w-100 text-start">
                                <span class="d-block truncate-to-1-line">
                                    Design-phase-1.jpg
                                </span>
                                <span class="d-block mt-1 text-secondary text-opacity-75">
                                    12.5 MB
                                </span>
                            </span>
                        </button>
                        <button type="button"
                                class="btn btn-white-light d-flex justify-content-start align-items-center w-100 border mb-2">
                            <span class="me-3 d-inline-block">
                                <span
                                    class="width-40 height-40 p-0 rounded-circle border-theme bg-light-theme text-theme fw-bold d-flex justify-content-center align-items-center">
                                    <i class="bi bi-file-earmark-text"></i>
                                </span>
                            </span>
                            <span class="w-100 text-start">
                                <span class="d-block truncate-to-1-line">
                                    Design-phase-2.jpg
                                </span>
                                <span class="d-block mt-1 text-secondary text-opacity-75">
                                    8.5 MB
                                </span>
                            </span>
                        </button>
                        <button type="button"
                                class="btn btn-white-light d-flex justify-content-start align-items-center w-100 border mb-2">
                            <span class="me-3 d-inline-block">
                                <span
                                    class="width-40 height-40 p-0 rounded-circle border-theme bg-light-theme text-theme fw-bold d-flex justify-content-center align-items-center">
                                    <i class="bi bi-file-earmark-text"></i>
                                </span>
                            </span>
                            <span class="w-100 text-start">
                                <span class="d-block truncate-to-1-line">
                                    Design-phase-3.jpg
                                </span>
                                <span class="d-block mt-1 text-secondary text-opacity-75">
                                    5.5 MB
                                </span>
                            </span>
                        </button>
                        <button type="button"
                                class="btn btn-white-light d-flex justify-content-start align-items-center w-100 border mb-2">
                            <span class="me-3 d-inline-block">
                                <span
                                    class="width-40 height-40 p-0 rounded-circle border-theme bg-light-theme text-theme fw-bold d-flex justify-content-center align-items-center">
                                    <i class="bi bi-file-earmark-text"></i>
                                </span>
                            </span>
                            <span class="w-100 text-start">
                                <span class="d-block truncate-to-1-line">
                                    Design-phase-4.jpg
                                </span>
                                <span class="d-block mt-1 text-secondary text-opacity-75">
                                    19.2 MB
                                </span>
                            </span>
                        </button>
                    </div>
                </template>
            </div>
        </div>
        <div class="chat-content">
            <div class="height-70 d-flex justify-content-between align-items-center px-4 border-bottom">
                <div class="d-flex justify-content-start align-items-center">
                    <div class="d-xl-none me-3">
                        <button type="button" class="btn-icon rounded-circle" @click="chatSidebarOpen()">
                            <i class="bi bi-justify-left"></i>
                        </button>
                    </div>
                    <div class="me-2">
                        <div class="position-relative">
                            <img :src="`/images/avatar/avatar-02.jpg`" class="width-45 height-45 rounded-circle"
                                 alt="avatar">
                            <div class="position-absolute bottom-0 end-0">
                                <div class="bg-success width-12 height-12 rounded-circle"></div>
                            </div>
                        </div>
                    </div>
                    <div class="d-inline-block">
                        <div class="text-theme fw-medium d-block"> Frank Thomas</div>
                        <div class="text-secondary"> Online</div>
                    </div>
                </div>
                <div class="d-flex justify-content-end align-items-center gap-2">
                    <div class="dropdown">
                        <button type="button"
                                class="btn-white-light p-0 width-40 height-40 d-flex justify-content-center align-items-center border-0 rounded-circle"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-search"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                                <form class="width-350">
                                    <div class="position-relative w-100">
                                        <input type="text" name="keyword" placeholder="Search Here..."
                                               class="form-control ps-5 border height-46 box-inside-shadow py-3"
                                               required autocomplete="new-keyword">
                                        <div class="position-absolute top-50 start-0 translate-middle-y ps-3">
                                            <i class="bi bi-search"></i>
                                        </div>
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>
                    <button type="button"
                            class="btn-white-light p-0 width-40 height-40 d-flex justify-content-center align-items-center border-0 rounded-circle">
                        <i class="bi bi-camera-video"></i>
                    </button>
                    <button type="button"
                            class="btn-white-light p-0 width-40 height-40 d-flex justify-content-center align-items-center border-0 rounded-circle">
                        <i class="bi bi-telephone"></i>
                    </button>
                    <div class="dropdown">
                        <button type="button"
                                class="btn-white-light p-0 width-40 height-40 d-flex justify-content-center align-items-center border-0 rounded-circle"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-three-dots-vertical"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                                <button type="button" class="dropdown-item">
                                    <i class="bi bi-archive"></i> <span class="ms-2"> Archive </span>
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item">
                                    <i class="bi bi-mic-mute"></i> <span class="ms-2"> Muted </span>
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item">
                                    <i class="bi bi-trash2"></i> <span class="ms-2"> Delete </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="height-calc-222 position-relative">
                <div class="height-calc-271 border-bottom p-4 scrollbar">

                    <div class="d-flex align-items-center justify-content-start">
                        <div class="me-3">
                            <img :src="`/images/avatar/avatar-02.jpg`" class="width-35 height-35 rounded-circle"
                                 alt="avatar">
                        </div>
                        <div>
                            <div class="d-flex align-items-center">
                                <div class="bg-light rounded-3 py-2 px-4 shadow-sm">
                                    Good morning
                                </div>
                                <div class="dropdown ms-3">
                                    <button type="button" class="btn-icon rounded-circle" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                        <i class="bi bi-three-dots-vertical"></i>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a href="javascript:void(0)" class="dropdown-item">
                                                <i class="bi bi-reply"></i> <span class="ms-3"> Reply </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" class="dropdown-item">
                                                <i class="bi bi-forward"></i> <span class="ms-3"> Forward </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" class="dropdown-item">
                                                <i class="bi bi-copy"></i> <span class="ms-3"> Copy </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" class="dropdown-item">
                                                <i class="bi bi-trash2"></i> <span class="ms-3"> Delete </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="text-secondary small mt-2">
                                08.00 am
                            </div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-end align-items-center">
                        <div>
                            <div class="d-flex align-items-center">
                                <div class="dropdown me-3">
                                    <button type="button" class="btn-icon rounded-circle" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                        <i class="bi bi-three-dots-vertical"></i>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0)" class="dropdown-item">
                                                <i class="bi bi-reply"></i> <span class="ms-3"> Reply </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" class="dropdown-item">
                                                <i class="bi bi-forward"></i> <span class="ms-3"> Forward </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" class="dropdown-item">
                                                <i class="bi bi-copy"></i> <span class="ms-3"> Copy </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" class="dropdown-item">
                                                <i class="bi bi-trash2"></i> <span class="ms-3"> Delete </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="bg-theme rounded-3 py-2 px-4 shadow-sm">
                                    Good morning
                                </div>
                            </div>
                            <div class="text-secondary small mt-2 text-end">
                                08.00 am
                            </div>
                        </div>
                    </div>

                </div>
                <form class="w-100">
                    <input type="text" name="message" placeholder="Typing your message"
                           class="form-control p-3 shadow-none rounded-0 border-0" required
                           autocomplete="new-message">
                </form>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    data() {
        return {
            tab: 1,
            chatSidebarActive: false,
        }
    },
    mounted() {
    },
    methods: {

        /* --- --- --- set tab --- --- --- */
        setTab(tab) {
            this.tab = tab
        },

        /* --- --- --- chat sidebar open --- --- --- */
        chatSidebarOpen() {
            if (window.innerWidth < 1201) {
                this.chatSidebarActive = true;
            }
        },

        /* --- --- --- chat sidebar close --- --- --- */
        chatSidebarClose() {
            if (window.innerWidth < 1201) {
                this.chatSidebarActive = false;
            }
        },

    }
}

</script>
