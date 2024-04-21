<script setup>
import { onMounted, watch, computed } from 'vue';

import Projects from '@/components/Projects.vue'
import { useDarkModeStore } from '@/stores/DarkModeStore';

const darkModeStore = useDarkModeStore();

const svgSrc = computed(() => {
  return darkModeStore.isDarkMode ? 'src/assets/sun-svg.svg' : 'src/assets/moon-svg.svg';
});

const toggleDarkMode = () => {
  darkModeStore.toggleDarkMode();
}

const updateHtmlClass = () => {
  if (darkModeStore.isDarkMode) {
    document.documentElement.classList.add('dark-mode');
  } else {
    document.documentElement.classList.remove('dark-mode');
  }
}

onMounted(() => {
  updateHtmlClass();
});

watch(() => darkModeStore.isDarkMode, () => {
  updateHtmlClass();
});
</script>

<template>
  <div class="root" :class="{ 'dark-mode': darkModeStore.isDarkMode }">
    <div class="profile">
      <div class="title-container">
        <div style="font-weight: 800; font-size: 26px;">Edwin Chen-Desailly</div>
        <img id="dark-svg" :src="svgSrc" @click="toggleDarkMode"></img>
      </div>
      <div style="margin-bottom: 40px;">5064 SA</div>
      <div id="contact">contact at <a data-tooltip="Click to copy!">edwinchendesailly@gmail.com</a></div>
      <hr style="border: dashed 1px var(--text); margin: 40px 0px;">
      <div style="font-weight: 780; margin-bottom: 20px; font-size: 20px;">projects</div>

      <Projects />
    </div>
  </div>
</template>

<style scoped>
.root {
  margin: 5% 30% 5%;
}

a:hover {
  text-decoration: underline;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.613);
}

html.dark-mode a:hover {
  color: #b3b3b3;
}

.title-container {
  display: flex;
  align-items: center;
  flex-direction: row;
}

#dark-svg {
  margin-left: auto;
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: filter 0.8s ease;
}

html.dark-mode #dark-svg {
  filter: invert(100%) sepia(0%) saturate(4126%) hue-rotate(290deg) brightness(119%) contrast(87%);
}

@media (max-width: 1025px) {
  .root {
    margin: 5% 15%;
  }
}

@media (max-width: 500px) {
  #contact {
    font-size: 14.5px;
  }

  .root {
    margin: 10% 0;
  }
}
</style>
