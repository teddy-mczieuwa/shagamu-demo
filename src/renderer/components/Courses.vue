<template>
    <div class="courses">
        <div class="courses__branding">
            <img class="courses__branding--img" src="../../assets/img/ONIBATA_logo.png" alt="Logo">
        </div>
        <h2>Select a Course</h2>
        
        <ul v-for="course in courses" :key="course">
            <router-link :to="'/books/'+ course" tag="li">{{course}}</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    props:['courses']
}
</script>

<style lang="scss" scoped>
    @import '../../assets/sass/components/_courses.scss';
</style>
