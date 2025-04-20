<script setup>
import { usePortofolioStrore } from '@/stores/portofolio.js'
const store = usePortofolioStrore()
const projects = store.portfolio
</script>

<template>
  <div>
    <h1>My Projects</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.name }} - {{ project.description }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
