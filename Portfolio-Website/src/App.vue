<script setup>
import "bootstrap/js/dist/modal";
</script>

<template>
  <div class="mainDiv">
    <section class="headerSection">
      <div class="row">
        <div class="bg">
          <img
            class="background"
            src="https://i.ibb.co/QHfMKYf/shutterstock-2104429805.jpg"
            alt="bg-image"
          />
        </div>
        <div class="row container" style="padding: 0px">
          <div id="marketing" class="section" style="padding: 0px">
            <div class="content">
              <h1>Main</h1>
            </div>
            <div class="overlay"></div>
          </div>

          <div id="marketing" class="section" style="padding: 0px">
            <div class="content">
              <h1>Skills</h1>
            </div>
            <div class="overlay"></div>
          </div>

          <div id="marketing" class="section" style="padding: 0px">
            <div class="content">
              <h1>Work</h1>
            </div>
            <div class="overlay"></div>
          </div>

          <div id="technology" class="section" style="padding: 0px">
            <div class="content">
              <h1>Contact</h1>
            </div>
            <div class="overlay"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="skillSection">

    </section>
  </div>
</template>

<script>
/* Set the width of the side navigation to 250px */
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="sass">
@import url("https://fonts.googleapis.com/css?family=Oswald|Noto+Sans")

*
  box-sizing: border-box

.container
  display: flex
  height: 100vh
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

.section .overlay
  background: rgba(255, 255, 255, 0.5)
  width: 100%
  height: 100%
  position: absolute
  transition: background-color 0.8s ease

.section .content
  z-index: 2
  writing-mode: vertical-rl
  text-orientation: upright

.section:hover:first-child
  flex: 20
  justify-content: left

  .content h1
    font-size: 100px

.section:hover:nth-child(2)
  flex: 12
  justify-content: left

  .content h1
    font-size: 100px

.section:hover:nth-child(3), .section:hover:last-child
  flex: 12
  justify-content: right

  .content h1
    font-size: 100px

.section:hover .overlay
  background-color: rgba(255, 255, 255, 0.85)
  // background-image: url('https://i.ibb.co/DrTVctz/css-particles-background.gif')
  background-repeat: repeat-y
  background-attachment: fixed

#marketing
  // background-image: url(https://images.unsplash.com/photo-1522205987242-8e22924ab42a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c0f679eb8f15705d46ea90008f39642b&auto=format&fit=crop&w=500&q=60)
  background-image: url('http://127.0.0.1:8887/css-particles-background.gif')

// #technology
//   background-image: url(https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fe6b92f88f55824e64a1bae15f5bf52a&auto=format&fit=crop&w=500&q=60)

// #advertising
//   background-image: url(https://images.unsplash.com/photo-1517799094725-e3453440724e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=353f3663a9fae75773d2942aeb37c2c8&auto=format&fit=crop&w=500&q=60)

.bg
  img
    background-repeat: no-repeat
    background-size: cover
    background-position: center
    height: 100vh
    -webkit-filter: blur(5px)
    -moz-filter: blur(5px)
    -o-filter: blur(5px)
    -ms-filter: blur(5px)
    background-filter: blur(7px)
    opacity: 0.9
    z-index: -1
    position: absolute

// .leftCard
//   background-color: white
//   background-color: rgba(255, 255, 255, 0.2)
//   box-shadow: 0 15px 25px rgba(129, 124, 124, 0.2)
//   backdrop-filter: blur(14px)
//   color: black
//   position: absolute
//   z-index: 2
//   width: 100vh
//   height: 100vh

//   .mainText
//     font-family: "Noto Sans", sans-serif
//     font-size: 6.5vh
//     font-weight: 700
//     text-align: left
//     margin-left: 5.5vh
//     padding: 70% 0px
</style>
