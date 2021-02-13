import Blogs from './components/Blogs'
import AddBlog from './components/AddBlog'
import VueRouter from 'vue-router'

export default new VueRouter({
    routes: [
        {path: '/', component: Blogs},
        {path: '/add', component: AddBlog}
    ],
    mode: 'history'
})