import { createApp } from 'vue';
import { createPinia } from 'pinia';
import '@/assets/main.css';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount('#app');

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('no-transition');
  setTimeout(() => {
    document.body.classList.remove('no-transition');
  }, 500);
});