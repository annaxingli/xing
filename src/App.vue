<template>
  <div id="app" class="min-h-screen bg-gradient-to-br from-gray-50 to-white">
    <!-- Navigation -->
    <Navigation />
    
    <!-- Main Content -->
    <main class="relative">
      <!-- Hero Background for home page -->
      <div 
        v-if="isHomePage" 
        class="absolute inset-0 opacity-5 pointer-events-none"
        style="background-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><defs><pattern id=%22grain%22 width=%224%22 height=%224%22 patternUnits=%22userSpaceOnUse%22><circle cx=%222%22 cy=%222%22 r=%220.5%22 fill=%22%23000%22/></pattern></defs><rect width=%22100%22 height=%22100%22 fill=%22url(%23grain)%22/></svg>')"
      ></div>
      
      <div class="container-custom">
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 pt-20 lg:pt-24">
          <!-- Sidebar -->
          <aside class="lg:w-64 lg:sticky lg:top-24 lg:self-start">
            <Sidebar :currentRoute="currentRoute" />
          </aside>
          
          <!-- Main Content Area -->
          <div class="flex-1 min-w-0">
            <Suspense>
              <template #default>
                <RouterView v-slot="{ Component }">
                  <Transition
                    name="page"
                    mode="out-in"
                    @enter="onPageEnter"
                    @leave="onPageLeave"
                  >
                    <component :is="Component" :key="$route.path" />
                  </Transition>
                </RouterView>
              </template>
              <template #fallback>
                <div class="flex items-center justify-center py-20">
                  <div class="loading-spinner"></div>
                  <span class="ml-3 text-gray-600">Loading...</span>
                </div>
              </template>
            </Suspense>
          </div>
        </div>
      </div>
    </main>
    
    <!-- Footer -->
    <Footer />
    
    <!-- Scroll to top button -->
    <Transition name="fade">
      <button
        v-show="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 transition-colors duration-200 z-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        aria-label="Scroll to top"
      >
        <i class="fas fa-arrow-up"></i>
      </button>
    </Transition>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import Navigation from './components/Navigation.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Sidebar,
    Footer
  },
  setup() {
    const route = useRoute()
    const showScrollTop = ref(false)
    
    const currentRoute = computed(() => route.path.slice(1) || 'home')
    const isHomePage = computed(() => route.path === '/')
    
    const handleScroll = () => {
      showScrollTop.value = window.scrollY > 300
    }
    
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    
    const onPageEnter = (el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      setTimeout(() => {
        el.style.transition = 'all 0.4s ease-out'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 10)
    }
    
    const onPageLeave = (el) => {
      el.style.transition = 'all 0.3s ease-in'
      el.style.opacity = '0'
      el.style.transform = 'translateY(-10px)'
    }
    
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    
    return {
      currentRoute,
      isHomePage,
      showScrollTop,
      scrollToTop,
      onPageEnter,
      onPageLeave
    }
  }
}
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
