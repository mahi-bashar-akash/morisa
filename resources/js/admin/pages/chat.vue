<template>

    <div class="chat-wrapper height-calc-150 border bg-white">
        <div class="chat-sidebar">
            <div class="chat-justify-start py-3">

                <div class="position-relative">
                    <img :src="`/images/avatar/avatar-01.jpg`" class="width-45 height-45 rounded-circle" alt="avatar">
                    <div class="position-absolute bottom-0 end-0">
                        <div class="bg-success width-12 height-12 rounded-circle"></div>
                    </div>
                </div>

                <div class="my-4">
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

                    <div class="mb-3">
                        <button type="button"
                                class="btn width-45 height-45 border rounded-circle d-flex justify-content-center align-items-center"
                                @click="setTab(3)" :class="{ 'btn-light' : tab !== 3, 'btn-theme' : tab === 3 }">
                            <i class="bi bi-file-image"></i>
                        </button>
                    </div>
                </div>

                <div>
                    <div class="dropdown">
                        <button type="button"
                                class="btn width-45 height-45 btn-dark border rounded-2 d-flex justify-content-center align-items-center"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-gear"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="javascript:void(0)">
                                    Action
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="javascript:void(0)">
                                    Another action
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="javascript:void(0)">
                                    Something else here
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div class="chat-justify-adjust">
                <template v-if="this.tab === 1">
                    <div class="d-flex justify-content-between align-items-center p-4">
                        <div class="fw-bold">
                            Chats
                        </div>
                        <button type="button" class="btn btn-light-theme p-0 width-35 height-35 border-0 rounded-circle">
                            <i class="bi bi-plus-lg"></i>
                        </button>
                    </div>
                    <div class="px-3">
                        <div class="position-relative w-100">
                            <input type="text" name="keyword" placeholder="Search here..." class="bg-light form-control p-3 border rounded-0 box-inside-shadow" required autocomplete="new-keyword">
                            <div class="position-absolute top-50 end-0 translate-middle-y pe-3">
                                <i class="bi bi-search"></i>
                            </div>
                        </div>
                    </div>
                    <div class="mt-3 p-3 height-calc-293 scrollbar">
                        <button type="button" class="btn btn-white-light w-100 mb-1 p-2 border-0 rounded-0 d-flex justify-content-start align-items-center">
                            <span>
                                <img :src="`/images/avatar/avatar-01.jpg`" class="width-35 height-35 rounded-circle" alt="avatar">
                            </span>
                            <span class="ms-3">
                                Frank Thomas
                            </span>
                        </button>
                        <button type="button" class="btn btn-white-light w-100 mb-1 p-2 border-0 rounded-0 d-flex justify-content-start align-items-center">
                            <span>
                                <img :src="`/images/avatar/avatar-02.jpg`" class="width-35 height-35 rounded-circle" alt="avatar">
                            </span>
                            <span class="ms-3">
                                Clofford Taylor
                            </span>
                        </button>
                        <button type="button" class="btn btn-white-light w-100 mb-1 p-2 border-0 rounded-0 d-flex justify-content-start align-items-center">
                            <span>
                                <img :src="`/images/avatar/avatar-03.jpg`" class="width-35 height-35 rounded-circle" alt="avatar">
                            </span>
                            <span class="ms-3">
                                Janete Caster
                            </span>
                        </button>
                        <button type="button" class="btn btn-white-light w-100 mb-1 p-2 border-0 rounded-0 d-flex justify-content-start align-items-center">
                            <span>
                                <img :src="`/images/avatar/avatar-04.jpg`" class="width-35 height-35 rounded-circle" alt="avatar">
                            </span>
                            <span class="ms-3">
                                Frank Thomas
                            </span>
                        </button>
                        <button type="button" class="btn btn-white-light w-100 mb-1 p-2 border-0 rounded-0 d-flex justify-content-start align-items-center">
                            <span>
                                <img :src="`/images/avatar/avatar-05.jpg`" class="width-35 height-35 rounded-circle" alt="avatar">
                            </span>
                            <span class="ms-3">
                                Clofford Taylor
                            </span>
                        </button>
                        <button type="button" class="btn btn-white-light w-100 mb-1 p-2 border-0 rounded-0 d-flex justify-content-start align-items-center">
                            <span>
                                <img :src="`/images/avatar/avatar-06.jpg`" class="width-35 height-35 rounded-circle" alt="avatar">
                            </span>
                            <span class="ms-3">
                                Janete Caster
                            </span>
                        </button>
                        <button type="button" class="btn btn-white-light w-100 mb-1 p-2 border-0 rounded-0 d-flex justify-content-start align-items-center">
                            <span>
                                <img :src="`/images/avatar/avatar-07.jpg`" class="width-35 height-35 rounded-circle" alt="avatar">
                            </span>
                            <span class="ms-3">
                                Frank Thomas
                            </span>
                        </button>
                        <button type="button" class="btn btn-white-light w-100 mb-1 p-2 border-0 rounded-0 d-flex justify-content-start align-items-center">
                            <span>
                                <img :src="`/images/avatar/avatar-08.jpg`" class="width-35 height-35 rounded-circle" alt="avatar">
                            </span>
                            <span class="ms-3">
                                Clofford Taylor
                            </span>
                        </button>
                        <button type="button" class="btn btn-white-light w-100 mb-1 p-2 border-0 rounded-0 d-flex justify-content-start align-items-center">
                            <span>
                                <img :src="`/images/avatar/avatar-09.jpg`" class="width-35 height-35 rounded-circle" alt="avatar">
                            </span>
                            <span class="ms-3">
                                Janete Caster
                            </span>
                        </button>
                    </div>
                </template>
                <template v-if="this.tab === 2">
                    <div class="d-flex justify-content-between align-items-center p-4">
                        <div class="fw-bold">
                            Contacts
                        </div>
                        <button type="button" class="btn btn-light-theme p-0 width-35 height-35 border-0 rounded-circle">
                            <i class="bi bi-plus-lg"></i>
                        </button>
                    </div>
                    <div class="px-3">
                        <div class="position-relative w-100">
                            <input type="text" name="keyword" placeholder="Search here..." class="bg-light form-control p-3 border rounded-0 box-inside-shadow" required autocomplete="new-keyword">
                            <div class="position-absolute top-50 end-0 translate-middle-y pe-3">
                                <i class="bi bi-search"></i>
                            </div>
                        </div>
                    </div>
                    <div class="mt-3 p-3 height-calc-293 scrollbar">
                        <div class="mb-3">
                            <div class="d-flex justify-content-start align-items-center">
                                <span class="me-2 text-theme fw-bold"> A </span> <hr class="border-theme w-100">
                            </div>
                            <div class="mt-2">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="me-2">
                                        <div class="width-40 height-40 d-flex justify-content-center align-items-center bg-light-theme fw-medium rounded-circle small">
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
                                <span class="me-2 text-theme fw-bold"> B </span> <hr class="border-theme w-100">
                            </div>
                            <div class="mt-2">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="me-2">
                                        <div class="width-40 height-40 d-flex justify-content-center align-items-center bg-light-theme fw-medium rounded-circle small">
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
                                <span class="me-2 text-theme fw-bold"> C </span> <hr class="border-theme w-100">
                            </div>
                            <div class="mt-2">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="me-2">
                                        <div class="width-40 height-40 d-flex justify-content-center align-items-center bg-light-theme fw-medium rounded-circle small">
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
                                <span class="me-2 text-theme fw-bold"> D </span> <hr class="border-theme w-100">
                            </div>
                            <div class="mt-2">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="me-2">
                                        <div class="width-40 height-40 d-flex justify-content-center align-items-center bg-light-theme fw-medium rounded-circle small">
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
                                <span class="me-2 text-theme fw-bold"> E </span> <hr class="border-theme w-100">
                            </div>
                            <div class="mt-2">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="me-2">
                                        <div class="width-40 height-40 d-flex justify-content-center align-items-center bg-light-theme fw-medium rounded-circle small">
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
                                <span class="me-2 text-theme fw-bold"> F </span> <hr class="border-theme w-100">
                            </div>
                            <div class="mt-2">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="me-2">
                                        <div class="width-40 height-40 d-flex justify-content-center align-items-center bg-light-theme fw-medium rounded-circle small">
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
                                <span class="me-2 text-theme fw-bold"> G </span> <hr class="border-theme w-100">
                            </div>
                            <div class="mt-2">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="me-2">
                                        <div class="width-40 height-40 d-flex justify-content-center align-items-center bg-light-theme fw-medium rounded-circle small">
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
                                <span class="me-2 text-theme fw-bold"> H </span> <hr class="border-theme w-100">
                            </div>
                            <div class="mt-2">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="me-2">
                                        <div class="width-40 height-40 d-flex justify-content-center align-items-center bg-light-theme fw-medium rounded-circle small">
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
                                <span class="me-2 text-theme fw-bold"> I </span> <hr class="border-theme w-100">
                            </div>
                            <div class="mt-2">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="me-2">
                                        <div class="width-40 height-40 d-flex justify-content-center align-items-center bg-light-theme fw-medium rounded-circle small">
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
                <template v-if="this.tab === 3">

                </template>
            </div>
        </div>
        <div class="chat-content">
            <div class="chat-content-header">

            </div>
            <div class="chat-content-body">

            </div>
        </div>
    </div>

</template>

<script>

export default {
    data() {
        return {
            tab: 1,
        }
    },
    mounted() {
    },
    methods: {

        /* --- --- --- set tab --- --- --- */
        setTab(tab) {
            this.tab = tab
        }

    }
}

</script>
