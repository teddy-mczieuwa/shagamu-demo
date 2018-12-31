import Content from './components/Content.vue'
import AuthPage from './components/AuthPage.vue'
import LibraryPage from './components/LibraryPage.vue'
import Books from './components/Books.vue'
import Rules from './components/Rules.vue'

const routes = [
    {path: '', component: Content,  children: [
        { path:'/', component: AuthPage },
        { path: '/library', component: LibraryPage, children: [
            {path:'', component: Rules},
            {path:'/books/:bookSlug', component: Books}
        ]}
    ]}
]

export default routes
