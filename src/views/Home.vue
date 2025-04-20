<script setup>
import { onMounted, onUnmounted } from 'vue'
import Header from '@/components/Home/Header.vue'
import Main from '@/components/Home/Main.vue'
import AOS from 'aos'
import { ref } from 'vue'
import router from '@/router/index.js'

const screenWidth = ref(innerWidth)

onMounted(() => {
  AOS.init({ once: true })
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const handleResize = () => {
  screenWidth.value = innerWidth
}

router.afterEach(() => {
  setTimeout(() => {
    AOS.refresh() // Refresh AOS setelah rute berubah
  }, 500)
})
</script>

<template>
  <div class="flex flex-col">
    <Header v-if="screenWidth > 768" />
    <Main />
    <!-- Bagian ini akan diberikan animasi -->
    <div class="bg-white flex flex-col rounded-t-[3rem] md:rounded-t-[6rem]"
         data-aos="fade-up"
         data-aos-duration="1000"
         data-aos-delay="500"
         data-aos-once="true">
      <h1 class="text-6xl text-center">My Projects</h1>
      <p class="text-8xl font-semibold text-center">Coming Soon</p>
    </div>
  </div>
</template>

<style scoped>
/* Tidak perlu perubahan untuk style jika hanya animasi */
</style>
