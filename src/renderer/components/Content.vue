<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import Branding from './Branding'
import StudentAuth from './StudentAuth'
export default {
    components: {
        'student-auth': StudentAuth,
        'branding': Branding
    }
}
</script>
