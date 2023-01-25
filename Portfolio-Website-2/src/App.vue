<script setup>
import "bootstrap/js/dist/modal";
</script>

<template>
  <section class="navBar">
    <nav>
      <ul>
        <li><a href="#intro">Home</a></li>
        <li><a href="#skill">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </section>

  <section class="intro" id="intro">
    <IntroSection></IntroSection>
  </section>

  <section class="skill" id="skill" style="margin-top: 100px; margin-bottom: 100px">
    <SkillSection></SkillSection>
  </section>

  <section class="contact" id="contact">
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
// @import url('https://fonts.googleapis.com/css?family=Mukta:700')
*
  scroll-behavior: smooth

.navBar
  z-index: 3
  position: relative
  display: flex
  margin-left: auto
  margin-right: auto
  // justify-content: center
  // align-items: center

  nav
    width: 100%
    position: absolute
    top: 0
    left: 0
    padding: 30px 0px
    // display: flex
    align-items: center
    justify-content: space-between

  nav
    ul
      display: flex
      align-items: center
      justify-content: center
      padding-left: 0px
      padding-top: auto
      padding-bottom: auto

  nav
    ul
      li
        list-style: none
        display: inline-block
        // margin-left: 40px
        margin: 10px

  nav
    ul
      li
        a
          text-decoration: none
          color: black
          font-size: 25px
          font-weight: 700
          font-style: italic
          transition: all 0.3s ease-in-out

        a:hover
          text-decoration: none
          color: rgba(234,45,55, 0.8)
</style>
