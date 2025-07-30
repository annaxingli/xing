<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
    <div class="container-custom">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <RouterLink 
          to="/" 
          class="flex items-center space-x-2 text-xl font-heading font-bold text-gray-900 hover:text-primary-600 transition-colors duration-200"
        >
          <div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
            <span class="text-white text-sm font-bold">XL</span>
          </div>
          <span>Xing Li</span>
        </RouterLink>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-1">
          <RouterLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="nav-link"
            :class="{ active: isActive(item.path) }"
          >
            <i :class="item.icon" class="mr-2"></i>
            {{ item.name }}
          </RouterLink>
        </div>
        
        <!-- Mobile menu button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
          aria-label="Toggle mobile menu"
        >
          <i :class="mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-lg"></i>
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div v-show="mobileMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <RouterLink
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              @click="closeMobileMenu"
              class="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-200"
              :class="{ 'text-primary-600 bg-primary-50': isActive(item.path) }"
            >
              <i :class="item.icon" class="mr-3 w-5"></i>
              {{ item.name }}
            </RouterLink>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'Navigation',
  setup() {
    const route = useRoute()
    const mobileMenuOpen = ref(false)
    
    const navItems = [
      { path: '/', name: 'Home', icon: 'fas fa-home' },
      { path: '/laughly', name: 'Laughly', icon: 'fas fa-laugh' },
      { path: '/newsbite', name: 'Newsbite', icon: 'fas fa-newspaper' },
      { path: '/praiseworthy', name: 'Praiseworthy', icon: 'fas fa-star' },
      { path: '/artworks', name: 'Artworks', icon: 'fas fa-palette' },
      { path: '/photography', name: 'Photography', icon: 'fas fa-camera' }
    ]
    
    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }
    
    const closeMobileMenu = () => {
      mobileMenuOpen.value = false
    }
    
    const isActive = (path) => {
      if (path === '/') {
        return route.path === '/'
      }
      return route.path.startsWith(path)
    }
    
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        mobileMenuOpen.value = false
      }
    }
    
    onMounted(() => {
      window.addEventListener('resize', handleResize)
    })
    
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
    })
    
    return {
      navItems,
      mobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu,
      isActive
    }
  }
}
</script>