<script setup>
import Header from '@/components/Home/Header.vue'
import Main from '@/components/Home/Main.vue'
import { ref } from 'vue'

const screenWidth = ref(innerWidth)
</script>

<template>
  <div class="flex flex-col">
    <Header v-if="screenWidth > 768" />
    <Main />
    <div class="bg-white">

    </div>
  </div>
</template>

<style scoped>
*{
}
</style>
