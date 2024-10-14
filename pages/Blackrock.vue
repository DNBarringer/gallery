<template>
    <div>
        <main class="gallery">
        <Thumbnail
            v-for="(image, index) in images"
            :key="index"
            :imageSrc="image.src"
            :altText="image.alt"
            @show-image="openImageViewer"
        />
        </main>

        <div v-if="showViewer" class="image-viewer" @click="closeImageViewer">
        <img :src="selectedImage" class="full-image" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Thumbnail from '~/components/Thumbnail.vue';

const images = ref([]);
const showViewer = ref(false);
const selectedImage = ref('');

// Load images dynamically from the assets folder
onMounted(() => {
  const imageModules = import.meta.glob('../assets/img/blackrock/*.(jpg|jpeg|png|gif)', { eager: true });
  
  images.value = Object.entries(imageModules).map(([path, module]) => ({
    src: module.default,
    alt: path.split('/').pop(),
  }));
});

function openImageViewer(imageSrc) {
  selectedImage.value = imageSrc;
  showViewer.value = true;
}

function closeImageViewer() {
  showViewer.value = false;
  selectedImage.value = '';
}
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
}

.image-viewer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.full-image {
  max-width: 90%;
  max-height: 90%;
}
</style>
