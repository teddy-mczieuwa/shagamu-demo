<template>
    <div class="authPage">
        <branding></branding>
        <student-auth></student-auth>
    </div>
</template>

<script>
import Branding from './Branding'
import StudentAuth from './StudentAuth'

export default {
    components: {
        'branding': Branding,
        'student-auth': StudentAuth
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/sass/pages/_authPage.scss';
</style>
