<template>
  <footer class="bg-gray-900 text-white section-padding">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand Section -->
        <div class="md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span class="text-white text-sm font-bold">XL</span>
            </div>
            <h3 class="text-xl font-heading font-bold">Xing Li</h3>
          </div>
          <p class="text-gray-400 mb-6 max-w-md">
            Creative designer and developer passionate about crafting beautiful and functional digital experiences.
          </p>
          <div class="flex space-x-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-500 text-gray-400 hover:text-white transition-all duration-200 flex items-center justify-center"
              :aria-label="social.name"
            >
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold mb-4 text-white">Projects</h4>
          <nav class="space-y-2">
            <RouterLink
              v-for="item in quickLinks"
              :key="item.path"
              :to="item.path"
              class="block text-gray-400 hover:text-white transition-colors duration-200"
            >
              {{ item.name }}
            </RouterLink>
          </nav>
        </div>
        
        <!-- Contact Info -->
        <div>
          <h4 class="font-semibold mb-4 text-white">Contact</h4>
          <div class="space-y-2 text-gray-400">
            <a 
              href="mailto:yaojunmike@gmail.com"
              class="flex items-center hover:text-white transition-colors duration-200"
            >
              <i class="fas fa-envelope mr-2"></i>
              yaojunmike@gmail.com
            </a>
            <div class="flex items-center">
              <i class="fas fa-map-marker-alt mr-2"></i>
              San Francisco, CA
            </div>
          </div>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm">
          © {{ currentYear }} Xing Li. All rights reserved.
        </p>
        <p class="text-gray-400 text-sm mt-4 md:mt-0">
          Built with <i class="fas fa-heart text-red-500"></i> using Vue.js & TailwindCSS
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'Footer',
  setup() {
    const currentYear = computed(() => new Date().getFullYear())
    
    const socialLinks = [
      { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: '#' },
      { name: 'GitHub', icon: 'fab fa-github', url: '#' },
      { name: 'Twitter', icon: 'fab fa-twitter', url: '#' },
      { name: 'Dribbble', icon: 'fab fa-dribbble', url: '#' },
      { name: 'Instagram', icon: 'fab fa-instagram', url: '#' }
    ]
    
    const quickLinks = [
      { path: '/laughly', name: 'Laughly' },
      { path: '/newsbite', name: 'Newsbite' },
      { path: '/praiseworthy', name: 'Praiseworthy' },
      { path: '/artworks', name: 'Artworks' },
      { path: '/photography', name: 'Photography' }
    ]
    
    return {
      currentYear,
      socialLinks,
      quickLinks
    }
  }
}
</script>