<script setup>

</script>

<template class="projects">

  <section class="accordion">
    <div class="tab">
      <input type="checkbox" name="accordion-1" id="cb1" checked>
      <label for="cb1" class="tab__label">TuneTrail</label>
      <div class="tab__content">
        <p>Pure CSS accordion based on the "input:checked + label" style trick.</p>
      </div>
    </div>

    <div class="tab">
      <input type="checkbox" name="accordion-1" id="cb2">
      <label for="cb2" class="tab__label">C Parser</label>
      <div class="tab__content">
        <p>Using <code>&lt;input type="checkbox"&gt;</code> allows to have several tabs open at the same time.</p>
      </div>
    </div>

    <div class="tab">
      <input type="checkbox" name="accordion-1" id="cb3">
      <label for="cb3" class="tab__label">Portfolio</label>
      <div class="tab__content">
        <p>Hello!</p>
      </div>
    </div>
  </section>

</template>

<style scoped>
.projects {
  box-sizing: border-box;
  display: grid;
  place-content: center;
  grid-template-columns: repeat(auto-fit, min(100%, 30rem));
  min-height: 40vh;
  place-items: start;
  gap: 1rem;
  margin: 0;
  padding: 1rem;
  color: var(--primary);
  background: var(--background);
  
}

/* Core styles/functionality */
.tab input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.tab__content {
  max-height: 0;
  overflow: hidden;
  transition: all 0.35s;
  color: black;
}
.tab input:checked ~ .tab__content {
  max-height: 10rem;
}

/* Visual styles */
.accordion {
  color: var(--theme);
  border: 2px solid;
  border-radius: 2px;
  overflow: hidden;
}
.tab__label,
.tab__close {
  display: flex;
  color: black;
  background: var(--theme);
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
.tab__content p {
  margin: 0;
  padding: 1rem;
}
.tab__close {
  justify-content: flex-end;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
}
.accordion--radio {
  --theme: var(--secondary);
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