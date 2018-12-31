<template>
    <div class="books">
    
        <div class="center-text">
            <div>
                <h2>Book Shelf: {{$route.params.bookSlug}}</h2>
                <router-link to="/"><button class="btn btn--gray">Logout</button></router-link>
            </div>
            <input type="text" v-model="searchText" placeholder="Search for a book...">      
        </div>

         <ul> 
            <li v-for="book in filterText" @click="openBook(book)" :key="book">{{book}}</li>
        </ul>

    </div>
</template>

<script>
import fs from 'fs'
import {remote, shell} from 'electron'

const docFolder = remote.app.getPath('documents')


import noResult from './NoResult'


export default {
    components: {
        'no-result': noResult
    },
    methods:{
        openBook(book){
            console.log(`${docFolder}/work/e-library/${this.$route.params.bookSlug}/${book}`)
            shell.openItem(`${docFolder}/work/e-library/${this.$route.params.bookSlug}/${book}`)
        }
    },
    data() {
        return {
            searchText: '',
            bookArr: [],
            noResult: false
        }
    }, 
    created(){
        console.log(this.$route.params.bookSlug)
        let x = fs.readdirSync(`${docFolder}/work/e-library/${this.$route.params.bookSlug}`)
        this.bookArr = x
    },
    computed: {
        filterText(){
            return this.bookArr.filter(book => {
                return book.toLowerCase().match(this.searchText.toLowerCase())
            })
        }
    },
    watch: {
        '$route'(to, from){
            this.bookArr = fs.readdirSync(`${docFolder}/work/e-library/${this.$route.params.bookSlug}`)
        } 
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/sass/abstract/_utilities.scss';
    @import '../../assets/sass/components/_books.scss';
</style>

