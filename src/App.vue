<script setup>
import ProjectSection from '@/components/ProjectSection.vue';
</script>

<template>
  <div class="root">
    <div class="profile">
      <div style="font-weight: 800; font-size: 26px;">Edwin Chen-Desailly</div>
      <div style="margin-bottom: 40px;">5064 SA</div>
      <div>contact at <a data-tooltip="Click to copy!">edwinchendesailly@gmail.com</a></div>
      <hr style="border: dotted 1px black; margin: 40px 0px;">
      <div style="font-weight: 780; margin-bottom: 20px;">projects</div>

      <ProjectSection></ProjectSection>
    </div>

  </div>
</template>

<style scoped>
.root {
  margin: 10% 30% 10%;
}

a:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
