<script setup>
import Accordion from '@/components/Accordion.vue';
import AccordionTab from '@/components/AccordionTab.vue';

import { computed } from 'vue';
import { useDarkModeStore } from '@/stores/DarkModeStore';

import awsDarkSvg from '@/assets/aws-dark-svg.svg';
import awsSvg from '@/assets/aws-svg.svg';

const darkModeStore = useDarkModeStore();

const awsSvgSrc = computed(() => {
  return darkModeStore.isDarkMode ? awsDarkSvg : awsSvg;
});
</script>

<template>
  <div class="projects">
    <Accordion>
      <AccordionTab>
        <template #header>
          <div class="header-content">
            <span>TuneTrail</span>
            <div class="icon-array">
              <img class="svg" src="@/assets/vue-svg.svg">
              <img class="svg dark-svg" src="@/assets/express-svg.svg">
              <img class="svg" src="@/assets/typescript-svg.svg">
              <img class="svg" src="@/assets/html-5-svg.svg">
              <img class="svg" src="@/assets/css-3-svg.svg">
              <img class="svg" :class="{ 'dark-svg': darkModeStore.isDarkMode }" src="@/assets/github-logo-svg.svg">
              <img class="svg" src="@/assets/figma-svg.svg">
              <img class="svg dark-svg" :src="awsSvgSrc">
            </div>
          </div>
        </template>

        <template #body>
          <div class="links-container">
            <a class="body-link" href="https://github.com/cdeddie/TuneTrail-v2" target="_blank"><span class="link-title">Frontend</span><img class="svg dark-svg" src="@/assets/github-svg.svg"></a>
            <a class="body-link" href="https://github.com/cdeddie/TuneTrail-v2-api" target="_blank"><span class="link-title">Backend</span><img class="svg dark-svg" src="@/assets/github-svg.svg"></a>
            <a class="body-link" href="https://tunetrail.site" target="_blank"><span class="link-title">Site</span><img class="svg dark-svg" src="@/assets/link-svg.svg"></a>
          </div>
          <hr style="margin-bottom: 0; margin-left: 1rem; margin-right: 1rem;">
          <p>
            Full stack web application that uses the Spotify API on a TypeScript/Express backend to deliver song 
            recommendations to users. Hosted using Caddy server on an EC2 instance.
          </p>
          <p>
            After having initially created the website to be more of a Spotify API interaction frontend in plain JS, 
            I eventually remade the website to be more focused on a particular service (song recommendations). 
            I took this opportunity to use TypeScript throughout the frontend and backend, which was a solid learning experience.
          </p>
          <ul>
            <li>
              Features a modern UI designed initially in Figma. Made use of Shadcn-UI, a non-opinionated UI framework which allows for heavy customisation.
            </li>
            <li>
              Used Swiper.js, a popular npm library for touch responsive slider components to provide a more unique experience for discovering new music. 
              Also used media queries to deliver this same functionality to mobile users.
            </li>
            <li>
              Developed a CI pipeline using GitHub Actions to automate frontend code deployment to an EC2 staging server for manual testing, 
              followed by a manual pipeline for building and pushing updates to production.
            </li>
            <li>
              Used Pinia, a Vue state management library in order to provide UI theming customization and solve other common issues found in web development.
            </li>
          </ul>
        </template>
      </AccordionTab>

      <AccordionTab>
        <template #header>
          <div class="header-content">
            <span>C-Parser</span>
            <div class="icon-array">
              <img class="svg" src="@/assets/cpp-svg.svg">
              <img class="svg" src="@/assets/cmake-svg.svg">
            </div>
            <span>| Demo site</span>
            <div class="icon-array">
              <img class="svg" src="@/assets/html-5-svg.svg">
              <img class="svg" src="@/assets/css-3-svg.svg">
              <img class="svg" src="@/assets/javascript-svg.svg">
            </div>
          </div>
        </template>

        <template #body>
          <div class="links-container">
            <a class="body-link" href="https://github.com/cdeddie/c-parser" target="_blank"><span class="link-title">Github</span><img class="svg dark-svg" src="@/assets/github-svg.svg"></a>
            <a class="body-link" href="http://3.27.222.147:81/" target="_blank"><span class="link-title">Site</span><img class="svg dark-svg" src="@/assets/link-svg.svg"></a>
          </div>
          <hr style="margin-bottom: 0; margin-left: 1rem; margin-right: 1rem;">
          <p>
            Having used C++ throughout majority of my Uni course, naturally this is one of my most comfortable languages. 
            Learning how to build non-surface-level software such as a recursive descent parser helped tremendously with my development.
          </p>
          <p>
            This project really helped my understanding of OOP, and gave me an introduction to modern c++. It's also a forward step
            when it comes to working with software that contains multiple moving parts, with distinct different elements, such as what 
            one might find in the industry.
          </p>
          <ul>
            <li>
              Used a wide array of data structures, with certain problems within the project 
              requiring specific choice of DS for an optimal solution
            </li>
            <li>
              Designed a cohesive system architecture, advancing OOP skills by integrating components 
              and considering their interactions. Utilized design patterns like the Visitor pattern 
              to traverse the parse tree and generate output
            </li>
            <li>
              Utilized a TestSuite pure virtual base class for modular testing. Conducted thorough testing on lexer, parser, 
              and pointer parsing functionalities, ensuring functionality.
            </li>
          </ul>
        </template>

      </AccordionTab>

      <AccordionTab>
        <template #header>
          <div class="header-content">
            <span>Portfolio Site</span>
            <div class="icon-array">
              <img class="svg" src="@/assets/vue-svg.svg">
              <img class="svg" src="@/assets/javascript-svg.svg">
              <img class="svg" src="@/assets/html-5-svg.svg">
              <img class="svg" src="@/assets/css-3-svg.svg">
              <img class="svg dark-svg" :src="awsSvgSrc">
            </div>
          </div>
        </template>

        <template #body>
          <div class="links-container">
            <a class="body-link" href="https://github.com/cdeddie/portfolio-site" target="_blank"><span class="link-title">Github</span><img class="svg dark-svg" src="@/assets/github-svg.svg"></a>
          </div>
          <hr style="margin-bottom: 0; margin-left: 1rem; margin-right: 1rem;">
          <p>
            Developed a personal portfolio website using Vue.js, serving as a showcase for my projects and skills. 
            Here I leveraged Vue.js and it's well-documented ecosystem to create a dynamic and responsive user interface which is intended to emulate a paper resume.
          </p>
          <ul>
            <li>
              Transformed a popular CodePen snippet which contained plain HTML and CSS into a reusable Vue accordion component.
            </li>
            <li>
              Implemented a dark mode feature using Pinia, a popular global store and state management library for Vue.
            </li>
            <li>
              Hosted the website on an AWS EC2 instance, furthering my Linux abilities.
            </li>
          </ul>
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

.svg {
  width: 20px;
  height: 20px;
  padding-right: 5px;
}

html.dark-mode .dark-svg {
  filter: invert(100%) sepia(0%) saturate(4126%) hue-rotate(290deg) brightness(119%) contrast(87%);
}

a {
  text-decoration: none;
  color: var(--text);
}

.links-container {
  display: flex;
  flex-direction: row;
}

.body-link {
  padding: 1rem;
  padding-bottom: 0;
  display: flex;
  align-items: center;
  position: relative;
}

.link-title {
  cursor: pointer;
  position: relative;
  font-weight: 900;
  margin-right: 5px;
}

.link-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 1.5px;
  background-color: currentColor;
  transition: width 0.3s ease;
}

.link-title:hover::after {
  width: 100%;
}

p {
  margin: 0;
  padding: 1rem;
}

ul {
  padding-right: 15px;
}

li {
  padding: 3px;
}

@media (max-width: 425px) {
  .header-content span {
    font-size: 14px;
  }
}

@media (max-width: 340px) {
  .header-content span {
    font-size: 13px;
  }

  .svg {
    height: 14px;
    width: 14px;
  }

  .tab p {
    font-size: 14px;
  }

  .tab li {
    font-size: 14px;
  }
}
</style>