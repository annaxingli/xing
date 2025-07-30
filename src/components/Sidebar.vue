<template>
  <div class="bg-white rounded-xl shadow-lg p-6 sticky top-24">
    <!-- Profile Section -->
    <div class="text-center mb-8">
      <div class="relative inline-block">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
          alt="Xing Li"
          class="w-24 h-24 rounded-full object-cover mx-auto shadow-lg"
        />
        <div class="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
      </div>
      <h3 class="text-xl font-heading font-bold text-gray-900 mt-4 mb-2">Xing Li</h3>
      <p class="text-gray-600 text-sm mb-4">Creative Designer & Developer</p>
      
      <!-- Social Links -->
      <div class="flex justify-center space-x-3">
        <a
          v-for="social in socialLinks"
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="w-8 h-8 rounded-full bg-gray-100 hover:bg-primary-500 text-gray-600 hover:text-white transition-all duration-200 flex items-center justify-center"
          :aria-label="social.name"
        >
          <i :class="social.icon" class="text-sm"></i>
        </a>
      </div>
    </div>
    
    <!-- Quick Navigation -->
    <div class="mb-8">
      <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Projects</h4>
      <nav class="space-y-1">
        <RouterLink
          v-for="item in quickNav"
          :key="item.path"
          :to="item.path"
          class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors duration-200"
          :class="isActive(item.path) 
            ? 'bg-primary-50 text-primary-700 border-l-2 border-primary-500' 
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'"
        >
          <i :class="item.icon" class="mr-3 w-4"></i>
          <span>{{ item.name }}</span>
          <span v-if="item.tag" class="ml-auto text-xs px-2 py-1 bg-primary-100 text-primary-600 rounded">
            {{ item.tag }}
          </span>
        </RouterLink>
      </nav>
    </div>
    
    <!-- Skills Section -->
    <div class="mb-8">
      <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Skills</h4>
      <div class="space-y-3">
        <div v-for="skill in skills" :key="skill.name" class="flex items-center justify-between">
          <span class="text-sm text-gray-700">{{ skill.name }}</span>
          <div class="flex space-x-1">
            <div
              v-for="i in 5"
              :key="i"
              class="w-2 h-2 rounded-full"
              :class="i <= skill.level ? 'bg-primary-500' : 'bg-gray-200'"
            ></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Contact Button -->
    <div class="pt-4 border-t border-gray-200">
      <a
        href="mailto:yaojunmike@gmail.com"
        class="btn btn-primary w-full text-center"
      >
        <i class="fas fa-envelope mr-2"></i>
        Get In Touch
      </a>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  name: 'Sidebar',
  props: {
    currentRoute: {
      type: String,
      default: 'home'
    }
  },
  setup() {
    const route = useRoute()
    
    const socialLinks = [
      { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: '#' },
      { name: 'GitHub', icon: 'fab fa-github', url: '#' },
      { name: 'Twitter', icon: 'fab fa-twitter', url: '#' },
      { name: 'Dribbble', icon: 'fab fa-dribbble', url: '#' }
    ]
    
    const quickNav = [
      { path: '/laughly', name: 'Laughly', icon: 'fas fa-laugh', tag: 'Featured' },
      { path: '/newsbite', name: 'Newsbite', icon: 'fas fa-newspaper' },
      { path: '/praiseworthy', name: 'Praiseworthy', icon: 'fas fa-star' },
      { path: '/artworks', name: 'Artworks', icon: 'fas fa-palette' },
      { path: '/photography', name: 'Photography', icon: 'fas fa-camera', tag: 'New' }
    ]
    
    const skills = [
      { name: 'UI/UX Design', level: 5 },
      { name: 'Vue.js', level: 4 },
      { name: 'Photography', level: 4 },
      { name: 'Illustration', level: 3 },
      { name: 'Motion Design', level: 3 }
    ]
    
    const isActive = (path) => {
      if (path === '/') {
        return route.path === '/'
      }
      return route.path.startsWith(path)
    }
    
    return {
      socialLinks,
      quickNav,
      skills,
      isActive
    }
  }
}
</script>