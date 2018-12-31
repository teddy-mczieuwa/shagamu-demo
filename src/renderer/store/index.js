import Vue from 'vue'
import Vuex from 'vuex'

import fs from 'fs'
import {remote} from 'electron'
const docFolder = remote.app.getPath('documents')


Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        courses:[],
        books:[
            'Harry Potter',
            'Dragons of Autumn Twilight',
            'Lord of the Rings',
            'Artemis Fowl',
            'Eragon',
            'To Kill a Mockingbird',
            'Pride and Prejudice',
            'The Diary of Anne Frank',
            '1984',
            'The Great Gatsby'
        ]
    },
    getters:{
        getCourses(state){
            return this.state.books
        }
    },
    mutations:{},
    actions:{}
})

export default store