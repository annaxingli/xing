<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>
      <div class="absolute inset-0 opacity-30">
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
          <div class="shape shape-4"></div>
        </div>
      </div>
      
      <!-- Hero Content -->
      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto" data-aos="fade-up">
        <div class="mb-8">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
            alt="Xing Li"
            class="w-32 h-32 rounded-full object-cover mx-auto shadow-2xl border-4 border-white animate-float"
          />
        </div>
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
          <span class="text-gradient">Creative</span> Designer &<br>
          <span class="text-gradient">Digital</span> Explorer
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          I am a designer, illustrator, and world explorer<br class="hidden md:block">
          crafting beautiful digital experiences in the Bay Area
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#projects" class="btn btn-primary btn-lg">
            <i class="fas fa-rocket mr-2"></i>
            Explore My Work
          </a>
          <a href="mailto:yaojunmike@gmail.com" class="btn btn-secondary btn-lg">
            <i class="fas fa-envelope mr-2"></i>
            Let's Connect
          </a>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects" class="text-gray-400 hover:text-primary-600 transition-colors duration-200">
          <i class="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Projects</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my latest design and development work, spanning from mobile apps to web platforms
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Laughly Project -->
          <article class="project-card" data-aos="fade-up" data-aos-delay="100">
            <RouterLink to="/laughly" class="block group">
              <div class="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Laughly Project"
                  class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="image-overlay">
                  <div class="text-white text-center">
                    <h3 class="text-2xl font-bold mb-2">Laughly</h3>
                    <p class="text-sm opacity-90">Mobile App Design</p>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-heading font-bold mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  Laughly
                </h3>
                <p class="text-gray-600 mb-4">Navigation flow and information structure redesign for a comedy streaming platform</p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">UX Design</span>
                  <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">Mobile</span>
                  <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">Prototyping</span>
                </div>
              </div>
            </RouterLink>
          </article>

          <!-- Newsbite Project -->
          <article class="project-card" data-aos="fade-up" data-aos-delay="200">
            <RouterLink to="/newsbite" class="block group">
              <div class="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Newsbite Project"
                  class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="image-overlay">
                  <div class="text-white text-center">
                    <h3 class="text-2xl font-bold mb-2">Newsbite</h3>
                    <p class="text-sm opacity-90">Web Platform Design</p>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-heading font-bold mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  Newsbite
                </h3>
                <p class="text-gray-600 mb-4">Responsive web design and visual branding for a modern news aggregation platform</p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-xs font-medium">Web Design</span>
                  <span class="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-xs font-medium">Branding</span>
                  <span class="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-xs font-medium">Responsive</span>
                </div>
              </div>
            </RouterLink>
          </article>

          <!-- Praiseworthy Project -->
          <article class="project-card" data-aos="fade-up" data-aos-delay="300">
            <RouterLink to="/praiseworthy" class="block group">
              <div class="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Praiseworthy Project"
                  class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="image-overlay">
                  <div class="text-white text-center">
                    <h3 class="text-2xl font-bold mb-2">Praiseworthy</h3>
                    <p class="text-sm opacity-90">Dashboard Design</p>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-heading font-bold mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  Praiseworthy
                </h3>
                <p class="text-gray-600 mb-4">Complete dashboard redesign focusing on user experience and data visualization</p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">Dashboard</span>
                  <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">Data Viz</span>
                  <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">UX</span>
                </div>
              </div>
            </RouterLink>
          </article>

          <!-- Artworks Preview -->
          <article class="project-card" data-aos="fade-up" data-aos-delay="400">
            <RouterLink to="/artworks" class="block group">
              <div class="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Artworks"
                  class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="image-overlay">
                  <div class="text-white text-center">
                    <h3 class="text-2xl font-bold mb-2">Artworks</h3>
                    <p class="text-sm opacity-90">Creative Collection</p>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-heading font-bold mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  Artworks
                </h3>
                <p class="text-gray-600 mb-4">A collection of digital art, illustrations, and creative experiments</p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">Digital Art</span>
                  <span class="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">Illustration</span>
                </div>
              </div>
            </RouterLink>
          </article>

          <!-- Photography Preview -->
          <article class="project-card" data-aos="fade-up" data-aos-delay="500">
            <RouterLink to="/photography" class="block group">
              <div class="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Photography"
                  class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="image-overlay">
                  <div class="text-white text-center">
                    <h3 class="text-2xl font-bold mb-2">Photography</h3>
                    <p class="text-sm opacity-90">Visual Stories</p>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-heading font-bold mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  Photography
                </h3>
                <p class="text-gray-600 mb-4">Capturing moments and telling stories through the lens of exploration</p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Photography</span>
                  <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Travel</span>
                </div>
              </div>
            </RouterLink>
          </article>

          <!-- More Projects Call-to-Action -->
          <article class="project-card bg-gradient-to-br from-primary-500 to-accent-500 text-white" data-aos="fade-up" data-aos-delay="600">
            <div class="p-8 text-center h-full flex flex-col justify-center">
              <i class="fas fa-plus-circle text-4xl mb-4 opacity-80"></i>
              <h3 class="text-xl font-heading font-bold mb-2">More Projects</h3>
              <p class="text-primary-100 mb-4">Explore additional work and side projects</p>
              <a href="mailto:yaojunmike@gmail.com" class="btn bg-white text-primary-600 hover:bg-gray-100">
                Get In Touch
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Skills & Stats Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 class="text-3xl md:text-4xl font-heading font-bold mb-6">Skills & Expertise</h2>
            <p class="text-lg text-gray-600 mb-8">
              Combining creativity with technical expertise to deliver exceptional digital experiences
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div v-for="skill in skills" :key="skill.name" class="text-center">
                <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i :class="skill.icon" class="text-2xl text-primary-600"></i>
                </div>
                <h4 class="font-semibold text-gray-900">{{ skill.name }}</h4>
                <p class="text-sm text-gray-600">{{ skill.description }}</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <div class="grid grid-cols-2 gap-6">
              <div v-for="stat in stats" :key="stat.label" class="text-center p-6 bg-white rounded-xl shadow-lg">
                <div class="text-3xl font-bold text-primary-600 mb-2">{{ stat.value }}</div>
                <div class="text-gray-600">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  setup() {
    const skills = ref([
      {
        name: 'UI/UX Design',
        description: 'User-centered design',
        icon: 'fas fa-paint-brush'
      },
      {
        name: 'Frontend Dev',
        description: 'Modern frameworks',
        icon: 'fas fa-code'
      },
      {
        name: 'Photography',
        description: 'Visual storytelling',
        icon: 'fas fa-camera'
      },
      {
        name: 'Illustration',
        description: 'Digital artworks',
        icon: 'fas fa-palette'
      }
    ])

    const stats = ref([
      { value: '50+', label: 'Projects Completed' },
      { value: '5+', label: 'Years Experience' },
      { value: '30+', label: 'Happy Clients' },
      { value: '100%', label: 'Satisfaction' }
    ])

    return {
      skills,
      stats
    }
  }
}
</script>

<style scoped>
.btn-lg {
  @apply px-8 py-4 text-lg;
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1));
  animation: float 20s infinite linear;
}

.shape-1 {
  width: 100px;
  height: 100px;
  left: 10%;
  top: 20%;
  animation-duration: 25s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  right: 10%;
  top: 40%;
  animation-duration: 30s;
  animation-direction: reverse;
}

.shape-3 {
  width: 80px;
  height: 80px;
  left: 70%;
  top: 10%;
  animation-duration: 20s;
}

.shape-4 {
  width: 120px;
  height: 120px;
  left: 20%;
  bottom: 20%;
  animation-duration: 35s;
  animation-direction: reverse;
}

@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-30px) rotate(120deg);
  }
  66% {
    transform: translateY(30px) rotate(240deg);
  }
  100% {
    transform: translateY(0px) rotate(360deg);
  }
}
</style>

