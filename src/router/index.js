import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/Home.vue'
import ArticlePage from '@/views/Article.vue'
import ProjectPage from '@/views/Project.vue'
import NotePage from '@/views/Note.vue'
import AboutPage from '@/views/About.vue'
import LinksPage from '@/views/Links.vue'
import TimelinePage from '@/views/Timeline.vue'

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
    path: '/article/:id',
    name: 'ArticleDetail',
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
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/links',
    name: 'LinksPage',
    component: LinksPage
  },
  {
    path: '/timeline',
    name: 'TimelinePage',
    component: TimelinePage
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router