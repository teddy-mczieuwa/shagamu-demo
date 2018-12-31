<template>
    <div class="libraryPage">
        <courses :courses="findCourses"></courses>
        <router-view></router-view>        
    </div>
</template>

<script>
import fs from 'fs'
import {remote} from 'electron'
const shelves = remote.app.getPath('documents')

import Courses from '../components/Courses'
export default {
    components: {
        'courses': Courses
    },
    computed: {
        findCourses(){
            let courses = fs.readdirSync(`${shelves}/work/e-library`)
            return courses
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/sass/pages/_libraryPage.scss';
</style>
