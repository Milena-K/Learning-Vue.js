import Blogs from './components/Blogs'
import AddBlog from './components/AddBlog'
import VueRouter from 'vue-router'
import SingleBlog from './components/SingleBlog'

export default new VueRouter({
    routes: [
        {path: '/', component: Blogs},
        {path: '/add', component: AddBlog},
        {path: '/blog/:id', component: SingleBlog }
    ],
    mode: 'history'
})