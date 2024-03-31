import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import BlogDetails from './views/BlogDetails.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/blog/:id', component: BlogDetails, props: true }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
