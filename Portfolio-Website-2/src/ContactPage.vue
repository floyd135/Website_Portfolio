<script setup>
import "bootstrap/js/dist/modal";
</script>

<template>
  <div class="scroller">
    <section class="intro" id="intro">
      <section class="navBar">
        <nav>
          <ul>
            <li
              class="homeText"
              @mouseenter="rowColorChange('h')"
              @mouseleave="rowColorChangeBack('h')"
            >
              <router-link to="/">Home</router-link>
            </li>
            <li
              class="skilLtext"
              @mouseenter="rowColorChange('s')"
              @mouseleave="rowColorChangeBack('s')"
            >
              <router-link to="/skill">Skills</router-link>
            </li>
            <li
              class="contactText"
              @mouseenter="rowColorChange('c')"
              @mouseleave="rowColorChangeBack('c')"
            >
              <router-link to="/contact">Contact</router-link>
            </li>
          </ul>
        </nav>
      </section>
    </section>

    <section class="contact" id="contact">
      <ContactSection class="contactSec"></ContactSection>
    </section>
  </div>
</template>

<script>
// import AboutSection from "./components/AboutSection.vue";
import ContactSection from "./components/ContactSection.vue";

export default {
  components: { ContactSection },
  data() {
    return {};
  },
  methods: {
    rowColorChange(sec) {
      //   alert("rowColorChange() called");
      if (sec == "h") {
        document.querySelector(".navBar").style.backgroundColor = "#FFD26F";
        document.querySelector(".skilLtext").style.backgroundColor = "#FFD26F";
        document.querySelector(".contactText").style.backgroundColor = "#FFD26F";
      } else if (sec == "s") {
        document.querySelector(".navBar").style.backgroundColor = "#3677FF";
        document.querySelector(".homeText").style.backgroundColor = "#3677FF";
        document.querySelector(".contactText").style.backgroundColor = "#3677FF";
      } else if (sec == "c") {
        document.querySelector(".navBar").style.backgroundColor = "#6018DC";
        document.querySelector(".skilLtext").style.backgroundColor = "#6018DC";
        document.querySelector(".homeText").style.backgroundColor = "#6018DC";
      }
    },
    rowColorChangeBack(sec) {
      if (sec == "h") {
        document.querySelector(".navBar").style.backgroundColor = "grey";
        document.querySelector(".skilLtext").style.backgroundColor = "#3677FF";
        document.querySelector(".contactText").style.backgroundColor = "#6018DC";
      } else if (sec == "s") {
        document.querySelector(".navBar").style.backgroundColor = "grey";
        document.querySelector(".homeText").style.backgroundColor = "#FFD26F";
        document.querySelector(".contactText").style.backgroundColor = "#6018DC";
      } else if (sec == "c") {
        document.querySelector(".navBar").style.backgroundColor = "grey";
        document.querySelector(".homeText").style.backgroundColor = "#FFD26F";
        document.querySelector(".skilLtext").style.backgroundColor = "#3677FF";
      }
    },
  },
};
</script>

<style lang="sass">
// @import url('https://fonts.googleapis.com/css?family=Mukta:700')
@import 'D:/Resume Material/Resume Material/Web Portfolio/Portfolio-Website-2/src/assets/main.sass'
</style>
