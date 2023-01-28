<script setup>
import "bootstrap/js/dist/modal";
</script>

<template>
  <div class="scroller">
    <section class="intro" id="intro">
      <section class="navBar">
        <nav>
          <ul>
            <li class="homeText"><a href="#intro">Home</a></li>
            <li class="skilLtext"><a href="#skill">Skills</a></li>
            <li class="contactText"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </section>

      <IntroSection class="introSec"> </IntroSection>
    </section>

    <section
      class="skill"
      id="skill"
      style="margin-top: 0px; margin-bottom: 0px"
    >
      <SkillSection class="skillSec"></SkillSection>
    </section>

    <section class="contact" id="contact">
      <ContactSection class="contactSec"></ContactSection>
    </section>
  </div>
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
  // outline: solid 1px red // For checking which box is overflowing
  // width: 100%

.scroller
  // overflow-y: scroll
  scroll-snap-type: y mandatory

.scroller .intro, .scroller .skill, .scroller .contact
  scroll-snap-align: start

.skill, .introSec
  width: 100% !important
  overflow-x: hidden !important

.introSec
  padding: 25% 0px  !important
  margin-top: 0px
  margin-bottom: 0px
  top: 0
  justify-content: center
  vertical-align: middle
  z-index: 1
  

.navBar
  z-index: 5
  position: absolute
  display: flex
  left: 2vw
  padding-top: 20px
  // justify-content: center
  // align-items: center
  // background-color: black

  nav
    z-index: 5
    width: 100%
    // position: fixed
    top: 0
    left: 0
    padding: 0px 0px
    // display: flex
    align-items: center
    justify-content: space-between
    // background: rgba(255,255,255,1)
    

  nav
    ul
      display: flex
      align-items: center
      justify-content: center
      padding-left: 0px
      // padding-top: auto
      // padding-bottom: auto
      margin-bottom: 0px

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
          background-color: rgba(234,45,55, 0.1)
          border-radius: 10px
          padding: 8px
            

</style>
