<script setup>
import "bootstrap/js/dist/modal";
</script>

<template>
  <div class="row hero">
    <div class="col-1 leftContainer">
      <h2
        class="header"
        style="font-size: 90px; margin: auto auto; justify-content: center"
      >
        About Me
      </h2>
    </div>

    <div class="col-11 rightContainer">
      <div class="row container">
        <div class="skill_1 section">
          <div class="content collapsible" ref="collapsible">
            <h1>Programming</h1>
            <div class="innerContent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div class="imgBox_1"></div>
          </div>
        </div>

        <div class="skill_2 section">
          <div class="content collapsible">
            <h1>Miscellaneous</h1>
            <div class="innerContent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div class="imgBox_2"></div>
          </div>
        </div>

        <div class="skill_3 section">
          <div class="content collapsible">
            <h1>Soft Skills</h1>
            <div class="innerContent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div class="imgBox_3"></div>
          </div>
        </div>
      </div>

      <div class="row container">
        <div class="skill_1 section">
          <div class="content collapsible" ref="collapsible">
            <h1>Achievement</h1>
            <div class="innerContent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div class="imgBox_1"></div>
          </div>
        </div>

        <div class="skill_2 section">
          <div class="content collapsible">
            <h1>Work Experience</h1>
            <div class="innerContent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div class="imgBox_2"></div>
          </div>
        </div>

        <div class="skill_3 section">
          <div class="content collapsible">
            <h1>Publication</h1>
            <div class="innerContent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div class="imgBox_3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// let coll;

export default {
  data() {
    return {};
  },

  mounted() {
    this.collapse();
  },

  methods: {
    collapse() {
      // console.log("collapse alert!");
      // // this.$refs.collapsible1.classList.toggle("active");
      // document.querySelector(".collapsible1").classList.toggle("active");
      // // document.getElementsByClassName("collapsible1").classList.toggle("active");
      // let content = document.querySelector(".content1");
      // if (content.style.display === "block") {
      //   content.style.display = "none";
      //   console.log("collapse alert! INSIDE 1");
      // } else {
      //   content.style.display = "block";
      //   console.log("collapse alert! INSIDE 2");
      // }
      // coll = document.getElementsByClassName("collapsible1");
      // coll.addEventListener("mouseover", function () {
      //   this.classList.toggle("active");
      //   let content = this.nextElementSibling;
      //   if (content.style.display === "block") {
      //     content.style.display = "none";
      //   } else {
      //     content.style.display = "block";
      //   }
      // });
    },
  },
};
</script>

<style lang="sass">

.hero
  background: #f3f7fe
  padding: 10px 3%
  justify-content: space-around
  z-index: 1

.hero
  h1
    font-size: 50px
    position: relative
    z-index: 2
    -webkit-text-fill-color: transparent
    -webkit-text-stroke: 2px #000
    cursor: pointer
    color: #000
    transition: transform 0.5s

// .hero h1:hover
//   -webkit-text-fill-color: #000
//   transform: translateY(-10px)

.imgBox_1, .imgBox_2, .imgBox_3
  position: absolute
  top: 0
  right: 0
  height: 100%
  width: 100%
  background-size: cover
  background-position: center
  transition: background-image 0.2s ease-in-out

.imgBox_1
  background-image: url(https://i.ibb.co/ctzW9ZY/bg-intro-header.jpg)

.imgBox_2
  background-image: url(https://i.ibb.co/ctzW9ZY/bg-intro-header.jpg)

.imgBox_3
  background-image: url(https://i.ibb.co/ctzW9ZY/bg-intro-header.jpg)

.skill_1:hover
  .imgBox_1
    background-image: url(https://i.ibb.co/wMWWpgC/bg-contact-header.jpg)

  .innerContent
    display: inline
  h1
    -webkit-text-fill-color: #000
    transform: translateY(-10vh)

.skill_2:hover
  .imgBox_2
    background-image: url(https://i.ibb.co/wMWWpgC/bg-contact-header.jpg)

  .innerContent
    display: inline
  h1
    -webkit-text-fill-color: #000
    transform: translateY(-10vh)

.skill_3:hover
  .imgBox_3
    background-image: url(https://i.ibb.co/wMWWpgC/bg-contact-header.jpg)

  .innerContent
    display: inline
  h1
    -webkit-text-fill-color: #000
    transform: translateY(-10vh)

.leftContainer
  writing-mode: vertical-rl
  text-orientation: upright
  font-size: 100px

// Old Hover Code //
// .hero
//   .container
//     .skill_1
//       .content
//         h1:hover~.imgBox_1
//           background-image: url(https://i.ibb.co/wMWWpgC/bg-contact-header.jpg)
//         h1:hover~.innerContent
//           display: inline

// .hero
//   .container
//     .skill_2
//       .content
//         h1:hover~.imgBox_2
//           background-image: url(https://i.ibb.co/wMWWpgC/bg-contact-header.jpg)

// .hero
//   .container
//     .skill_3
//       .content
//         h1:hover~.imgBox_3
//           background-image: url(https://i.ibb.co/wMWWpgC/bg-contact-header.jpg)


/*.hero h1:nth-child(2):hover~.imgBox
  background-image: url(http://127.0.0.1:8887/bg-intro-header.jpg)

/*.hero h1:nth-child(3):hover~.imgBox
  background-image: url(http://127.0.0.1:8887/bg-intro-header.jpg)

.container
  // display: flex
  height: 46vh
  margin-right: 0px !important
  margin-left: 0px !important
  max-width: 100% !important

.section
  flex: 1
  display: flex
  justify-content: center
  align-items: center
  height: 100%
  overflow: hidden
  background-size: cover
  background-position: center
  color: black
  transition: flex 0.4s ease
  position: relative
  border: 1px solid rgba(255, 255, 255, 0.9)
  padding: 10px
  border-radius: 10px

/*.section .overlay
  background: rgba(255, 255, 255, 0.5)
  width: 100%
  height: 100%
  position: absolute
  transition: background-color 0.8s ease

.section .content
  z-index: 3
  //writing-mode: vertical-rl
  //text-orientation: upright

/*.section:hover:first-child
  flex: 20
  justify-content: left

  .content h1
    font-size: 100px

/*.section:hover:nth-child(2)
  flex: 12
  justify-content: left

  .content h1
    font-size: 100px

/*.section:hover:nth-child(3), .section:hover:last-child
  flex: 12
  justify-content: left

  .content h1
    font-size: 100px

/*.section:hover .overlay
  background-color: rgba(255, 255, 255, 0.85)
  // background-image: url('https://i.ibb.co/DrTVctz/css-particles-background.gif')
  background-repeat: repeat-y
  background-attachment: fixed

.innerContent
  z-index: 3
  position: absolute
  display: none
  top: 50%
  right: 0%
  align-content: center
  justify-content: center
  margin: 10px
  height: 100vh
</style>
