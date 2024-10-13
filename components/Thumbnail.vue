<template>
  <div class="thumbnail" @click="showFullImage">
    <img :src="imageSrc" :alt="altText" class="thumbnail-image" />
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const props = defineProps({
  imageSrc: String,
  altText: String,
});

const emit = defineEmits(['show-image']);

function showFullImage() {
  emit('show-image', props.imageSrc);
}
</script>

<style scoped>
.thumbnail {
  cursor: pointer;
  margin: 10px;
}

.thumbnail-image {
  width: 150px; /* Thumbnail size */
  height: auto; /* Maintain aspect ratio */
}
</style>
