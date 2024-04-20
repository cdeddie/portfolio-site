<script setup>
import { ref } from 'vue';

const id = ref(`accordion-tab-${Math.random().toString(36).substr(2, 9)}`);

const props = defineProps({
  header: {
    type: String,
    required: true,
  },
  open: {
    type: Boolean,
    default: false,
  }
});
</script>

<template>
  <div class="tab">
    <input type="checkbox" :id="id" :checked="open">
    <label :for="id" class="tab__label"><slot name="header"></slot></label>
    <div class="tab__content"><slot name="body"></slot></div>
  </div>
</template>

<style scoped>
.tab {
  background-color: var(--background);/* Back */
}

.tab input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.tab__content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease;
  color: var(--text);
}
.tab input:checked ~ .tab__content {
  max-height: 100vh;
}

/* Visual styles */
.tab__label,
.tab__close {
  display: flex;
  color: var(--text); /* Title of each header */
  background: var(--primary);
  cursor: pointer;
}
.tab__label {
  justify-content: space-between;
  padding: 1rem;
  font-weight: 700;
}
.tab__label::after {
  content: "\276F";
  width: 1em;
  height: 1em;
  text-align: center;
  transform: rotate(90deg);
  transition: all 0.35s;
}
.tab input:checked + .tab__label::after {
  transform: rotate(270deg);
}
.tab__close {
  justify-content: flex-end;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
}

/* Arrow animation */
.tab input:not(:checked) + .tab__label:hover::after {
  animation: bounce .5s infinite;
}
@keyframes bounce {
  25% {
    transform: rotate(90deg) translate(.25rem);
  }
  75% {
    transform: rotate(90deg) translate(-.25rem);
  }
}
</style>