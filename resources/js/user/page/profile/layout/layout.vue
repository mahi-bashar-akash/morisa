<template>
    <router-view/>
</template>

<script>

export default {
    data() {
        return {
            UserInfo: window.core.UserInfo
        }
    },
    mounted() {
        if(this.UserInfo === null) {
            this.$router.push({name: 'login'});
        }
    },
    methods: {}
}

</script>
