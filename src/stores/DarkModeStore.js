import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useDarkModeStore = defineStore('DarkModeStore', () => {
  const isDarkMode = ref(false);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
  };

  return {
    isDarkMode,
    toggleDarkMode
  };
});