<script setup>
import { ref, onMounted } from 'vue'

const showContent = ref(false)
const typedText = ref('')
const fullText = ref('Welcome.')

onMounted(() => {
  setTimeout(() => {
    showContent.value = true

    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.value.length) {
        typedText.value += fullText.value[i]
        i++
      }else{
        clearInterval(typingInterval)
      }
    }, 400)
  }, 100)
})

</script>

<template>
  <div class="flex flex-col md:flex-row md:min-h-screen justify-center items-center">
    <div class="mt-5 md:order-1 md:w-1/2 md:mr-20 transition-all duration-1000 ease-out"
         :class="showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'">
      <img src="@/assets/Laptop.png" class="w-11/12 mx-auto drop-shadow-2xl" alt="Maskot" />
    </div>

    <div class="text-white mx-auto w-11/12 md:w-4/5 md:ml-30 md:mr-10 transition-all duration-1000 ease-out delay-200"
         :class="showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'">
      <h1 class="text-7xl font-extralight text-center md:text-start">{{typedText}}<span class="animate-ping text-sky-400 " >|</span></h1>
      <p class="mt-10 md:mt-5 text-center font-extralight">
        Hi! I’m <span class="font-normal">Muhammad Marendra Anggit Bagaskara</span>, an enthusiastic
        IT student from SMK Negeri 1 Bantul. I’m passionate about crafting modern and interactive
        applications with technologies like
        <span class="text-green-700 font-normal">Vue.js</span>,
        <span class="text-red-700 font-normal">Laravel</span>, and
        <span class="text-blue-700 font-normal">Flutter</span>. I constantly challenge myself to
        write cleaner, smarter code — every keystroke is a step ton    ward becoming a world-class
        developer.
      </p>
      <p class="mt-5 text-center font-extralight text-gray-400">
        Halo! Saya <span class="font-normal">Muhammad Marendra Anggit Bagaskara</span>, seorang siswa
        jurusan Rekayasa Perangkat Lunak di SMK Negeri 1 Bantul. Saya memiliki ketertarikan tinggi
        dalam membangun aplikasi yang modern dan interaktif menggunakan teknologi seperti
        <span class="text-green-700 font-normal">Vue.js</span>,
        <span class="text-red-700 font-normal">Laravel</span>, dan
        <span class="text-blue-700 font-normal">Flutter</span>. Setiap baris kode yang saya tulis
        adalah bagian dari perjalanan saya untuk menjadi developer yang lebih baik dan profesional.
      </p>
    </div>
  </div>
</template>

<style scoped>
* {

}
</style>
