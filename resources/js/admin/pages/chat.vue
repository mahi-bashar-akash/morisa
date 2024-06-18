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
                        <button type="button" class="btn width-45 height-45 border rounded-circle d-flex justify-content-center align-items-center" @click="setTab(1)" :class="{ 'btn-light' : tab !== 1, 'btn-theme' : tab === 1 }">
                            <i class="bi bi-chat-dots"></i>
                        </button>
                    </div>

                    <div class="mb-3">
                        <button type="button" class="btn width-45 height-45 border rounded-circle d-flex justify-content-center align-items-center" @click="setTab(2)" :class="{ 'btn-light' : tab !== 2, 'btn-theme' : tab === 2 }">
                            <i class="bi bi-people"></i>
                        </button>
                    </div>

                    <div class="mb-3">
                        <button type="button" class="btn width-45 height-45 border rounded-circle d-flex justify-content-center align-items-center" @click="setTab(3)" :class="{ 'btn-light' : tab !== 3, 'btn-theme' : tab === 3 }">
                            <i class="bi bi-telephone"></i>
                        </button>
                    </div>

                    <div class="mb-3">
                        <button type="button" class="btn width-45 height-45 border rounded-circle d-flex justify-content-center align-items-center" @click="setTab(4)" :class="{ 'btn-light' : tab !== 4, 'btn-theme' : tab === 4 }">
                            <i class="bi bi-star"></i>
                        </button>
                    </div>

                    <div class="mb-3">
                        <button type="button" class="btn width-45 height-45 border rounded-circle d-flex justify-content-center align-items-center" @click="setTab(5)" :class="{ 'btn-light' : tab !== 5, 'btn-theme' : tab === 5 }">
                            <i class="bi bi-file-image"></i>
                        </button>
                    </div>
                </div>

                <div>
                    <div class="dropdown">
                        <button type="button" class="btn width-45 height-45 btn-dark border rounded-2 d-flex justify-content-center align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
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
                <template v-if="tab === 1"></template>
                <template v-if="tab === 2"></template>
                <template v-if="tab === 3"></template>
                <template v-if="tab === 4"></template>
                <template v-if="tab === 5"></template>
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
    data(){
        return{
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
