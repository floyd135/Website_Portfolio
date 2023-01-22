<script setup>
import "bootstrap/js/dist/modal";
</script>

<template>
  <div class="row hero">
    <div class="row">
      <h2 class="header" style="font-size: 50px">Skill</h2>
    </div>
    <!-- <h1>Candy.</h1>
    <h1>Cherry.</h1>
    <h1>Melon.</h1>

    <div class="imgBox"></div> -->

    <div class="row container">
      <div class="skill_1 section">
        <div class="content">
          <h1>Test 1</h1>
          <div class="imgBox_1"></div>
        </div>
      </div>

      <div class="skill_2 section">
        <div class="content">
          <h1>Test 2</h1>
          <div class="imgBox_2"></div>
        </div>
      </div>

      <div class="skill_3 section">
        <div class="content">
          <h1>Test 3</h1>
          <div class="imgBox_3"></div>
        </div>
      </div>
    </div>

    <div class="row container">
      <div class="skill_1 section">
        <div class="content">
          <h1>Test 1</h1>
          <div class="imgBox_1"></div>
        </div>
      </div>

      <div class="skill_2 section">
        <div class="content">
          <h1>Test 2</h1>
          <div class="imgBox_2"></div>
        </div>
      </div>

      <div class="skill_3 section">
        <div class="content">
          <h1>Test 3</h1>
          <div class="imgBox_3"></div>
        </div>
      </div>
    </div>

    <!-- <div class="row" >
      <h2 class="header">Footer</h2>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="sass">

.hero
  width: 100%
  height: 75vh
  background: #f3f7fe
  padding: 10px 3%
  position: relative
  display: flex
  align-items: center
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

.hero h1:hover
  -webkit-text-fill-color: #000
  transform: translateY(-10px)

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

.hero
  .container
    .skill_1
      .content
        h1:hover~.imgBox_1
          background-image: url(https://i.ibb.co/wMWWpgC/bg-contact-header.jpg)

.hero
  .container
    .skill_2
      .content
        h1:hover~.imgBox_2
          background-image: url(https://i.ibb.co/wMWWpgC/bg-contact-header.jpg)

.hero
  .container
    .skill_3
      .content
        h1:hover~.imgBox_3
          background-image: url(https://i.ibb.co/wMWWpgC/bg-contact-header.jpg)

/*.hero h1:nth-child(2):hover~.imgBox
  background-image: url(http://127.0.0.1:8887/bg-intro-header.jpg)

/*.hero h1:nth-child(3):hover~.imgBox
  background-image: url(http://127.0.0.1:8887/bg-intro-header.jpg)

.container
  display: flex
  height: 50%
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
  border: 1px solid rgba(255, 255, 255, 0.85)
  padding: 0px

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
</style>
