import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/Home.vue'
import ArticlePage from '@/views/Article.vue'
import ProjectPage from '@/views/Project.vue'
import NotePage from '@/views/Note.vue'
import ResourcePage from '@/views/Resource.vue'
import AboutPage from '@/views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/articles',
    name: 'ArticlePage',
    component: ArticlePage
  },
  {
    path: '/projects',
    name: 'ProjectPage',
    component: ProjectPage
  },
  {
    path: '/notes',
    name: 'NotePage',
    component: NotePage
  },
  {
    path: '/resources',
    name: 'ResourcePage',
    component: ResourcePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  }
]

const router = new VueRouter({
  routes
})

export default router