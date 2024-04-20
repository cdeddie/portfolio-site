<script setup>
import Accordion from '@/components/Accordion.vue';
import AccordionTab from '@/components/AccordionTab.vue';
</script>

<template>
  <div class="projects">
    <Accordion>
      <AccordionTab>
        <template #header>
          <div class="header-content">
            <span>TuneTrail</span>
            <div class="icon-array">
              <img id="dark-svg" src="@/assets/vue-svg.svg">
            </div>
          </div>
        </template>

        <template #body>
          <p>
            After learning the basics of Vue.js, I decided to make my first fully fledged website. 
            This is a client-based website that allows Spotify users to interact with features of the Spotify API. 
          </p>
          <p>
            It includes a currently playing view, most played artists/songs lists, and a recommendation page which users can
            take advantage of the Spotify API recommendation system to find songs based on artists/tracks they like alongside 
            unqique seed values (such as danceability, loudness etc)
          </p>
        </template>
      </AccordionTab>

      <AccordionTab>
        <template #header>
          <div class="header-content">
            <span>C-Parser</span>
            <div class="icon-array">
              <img id="dark-svg" src="@/assets/cpp-svg.svg">
            </div>
          </div>
        </template>



      </AccordionTab>
    </Accordion>
  </div>
</template>

<style scoped>
.header-content {
  display: flex;
}

.icon-array {
  margin-left: 10px;
}

#dark-svg {
  width: 20px;
  height: 20px;
}

p {
  margin: 0;
  padding: 1rem;
}
</style>