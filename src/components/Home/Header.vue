<script setup>
import { reactive, ref } from 'vue'
import { SocialMedia } from '@/components/Home/SocialMedia.js'

const isHovered = ref(false)
const links = SocialMedia
</script>

<template>
  <header
    class="absolute bg-blue-600 rounded-b-2xl transition-all duration-500 ease-in-out px-10 flex items-center justify-end overflow-hidden z-10 min-w-full"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    :class="{ 'h-10': isHovered, 'h-2': !isHovered }"
  >
    <TransitionGroup
      name="fade-slide"
      tag="div"
      class="absolute flex gap-5"
      :class="{ 'top-0': isHovered, 'top-1/2 transform -translate-y-1/2': !isHovered }"
    >
      <a
        v-for="link in links"
        :key="link.name"
        v-show="isHovered"
        :href="link.url"
        target="_blank"
        class="text-black hover:text-white transition-all duration-300 p-2 rounded"
      >
        <component :is="link.icon" class="w-5 h-5" />
      </a>
    </TransitionGroup>
  </header>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
