<template>
    <div>
      <button @click="currentFolder = 'vista'">Vista Lake</button>
      <button @click="currentFolder = 'blackrock'">Blackrock Mountain</button>
  
      <!-- Render the Gallery component, passing the folder as a prop -->
      <Gallery v-if="currentFolder" :folder="currentFolder" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Gallery from '~/components/Gallery.vue';
  
  const currentFolder = ref('');
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>
  