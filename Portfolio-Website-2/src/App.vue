<script setup>
import "bootstrap/js/dist/modal";
</script>

<template>
  <section class="intro">
    <IntroSection></IntroSection>
  </section>

  <section class="skill" style="margin-top: 100px; margin-bottom: 100px">
    <SkillSection></SkillSection>
  </section>

  <section class="contact">
    <ContactSection></ContactSection>
  </section>
</template>

<script>
import IntroSection from "./components/IntroSection.vue";
import SkillSection from "./components/SkillSection.vue";
// import AboutSection from "./components/AboutSection.vue";
import ContactSection from "./components/ContactSection.vue";

export default {
  components: { IntroSection, SkillSection, ContactSection },
  data() {
    return {};
  },
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Mukta:700')
</style>
