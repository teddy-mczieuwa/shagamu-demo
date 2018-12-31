<template>
    <div class="student-auth">
        <form @submit.prevent="authSubmit">
            <input type="text" placeholder="Enter Student ID">
            <input type="password" placeholder="Enter Password">
            <button>Enter</button>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        authSubmit(){
            console.log('submitted')
            this.$router.push('/library')
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/sass/components/_studentAuth.scss';
</style>
