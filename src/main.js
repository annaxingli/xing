import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './style.css'
import App from './App.vue'

// Import Components
import Home from './components/Home.vue'
import Laughly from './components/Laughly.vue'
import Newsbite from './components/Newsbite.vue'
import Praiseworthy from './components/Praiseworthy.vue'
import Artworks from './components/Artworks.vue'
import Photography from './components/Photography.vue'

const routes = [
  { 
    path: '/', 
    name: 'Home',
    component: Home,
    meta: { title: 'Home - Xing Li Portfolio' }
  },
  { 
    path: '/laughly', 
    name: 'Laughly',
    component: Laughly,
    meta: { title: 'Laughly - Xing Li Portfolio' }
  },
  { 
    path: '/newsbite', 
    name: 'Newsbite',
    component: Newsbite,
    meta: { title: 'Newsbite - Xing Li Portfolio' }
  },
  { 
    path: '/praiseworthy', 
    name: 'Praiseworthy',
    component: Praiseworthy,
    meta: { title: 'Praiseworthy - Xing Li Portfolio' }
  },
  { 
    path: '/artworks', 
    name: 'Artworks',
    component: Artworks,
    meta: { title: 'Artworks - Xing Li Portfolio' }
  },
  { 
    path: '/photography', 
    name: 'Photography',
    component: Photography,
    meta: { title: 'Photography - Xing Li Portfolio' }
  },
  { 
    path: '/:pathMatch(.*)*', 
    redirect: '/' 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

// Update page title on route change
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Xing Li Portfolio'
  next()
})

const app = createApp(App)

app.use(router)

app.mount('#app')

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
})
