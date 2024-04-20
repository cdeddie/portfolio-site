<script setup>
</script>

<template>
  <div class="accordion">
    <slot></slot>
  </div>
</template>

<style scoped>
.accordion {
  color: var(--primary); /* Border of whole accordion */
  border: 2px solid;
  border-radius: 2px;
  overflow: hidden;
}
</style>