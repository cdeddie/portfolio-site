import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useDarkModeStore = defineStore('DarkModeStore', () => {
  const isDarkMode = ref(false);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    localStorage.setItem('darkMode', isDarkMode.value.toString());
  };

  const initDarkMode = () => {
    const darkModeValue = localStorage.getItem('darkMode');
    if (darkModeValue !== null) {
      isDarkMode.value = darkModeValue === 'true'; // true if true
    }
  };

  return {
    isDarkMode,
    toggleDarkMode,
    initDarkMode
  };
});