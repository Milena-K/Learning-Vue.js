import Blogs from './components/Blogs'
import AddBlog from './components/AddBlog'
import SingleBlog from './components/SingleBlog'
import VueRouter from 'vue-router'

export default new VueRouter({
    routes: [
        {path: '/', component: Blogs},
        {path: '/add', component: AddBlog},
        {path: '/blog/:id', component: SingleBlog }
    ],
    mode: 'history'
})
