<script setup>
import "bootstrap/js/dist/modal";
</script>

<template>
  <div class="introHeader">
    <nav>
      <ul>
        <li><a href="./components/IntroSection.vue">Home</a></li>
        <li><a href="./components/SkillSection.vue">Skills</a></li>
        <!-- <li><a href="#">About</a></li> -->
        <li><a href="./components/ContactSection.vue">Contact</a></li>
      </ul>
    </nav>

    <!-- ------------------------------------- -->
    <!-- <a href="https://ibb.co/GkgZD8H"><img src="https://i.ibb.co/ctzW9ZY/bg-intro-header.jpg" alt="bg-intro-header" border="0"></a> -->
    <div class="row">
      <div class="bg">
        <img
          class="background"
          src="https://i.ibb.co/ctzW9ZY/bg-intro-header.jpg"
          alt="bg-image"
          border="0"
        />
      </div>
    </div>
    <!-- ------------------------------------- -->

    <div class="content">
      <h1 style="font-style: italic">Angkoon</h1>

      <br />

      <div class="row" style="align-items: center; justify-content: center">
        <h1>Angkoonsawaengsuk</h1>
        <div class="hangingContent">
          <p
            style="
              color: white;
              font-size: 15px;
              font-weight: 500;
              font-style: italic;
            "
          >
            TM
          </p>
        </div>
      </div>

      <br />

      <h3>In Development</h3>
      <div id="container">
        <button class="learn-more">
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text" style="color: white">Learn More</span>
        </button>
      </div>
    </div>
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
@import url('https://fonts.googleapis.com/css?family=Mukta:700')

$bg: #f3f8fa
$white: #fff
$black: #282936

@mixin transition($property: all, $duration: 0.45s, $ease: cubic-bezier(0.65,0,.076,1))
  transition: $property $duration $ease


*
  font-family: 'Mukta', sans-serif

.introHeader
  overflow: hidden
  width: 100%
  height:  100vh
  //background: rgb(238,174,202)
  //background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)
  position: relative
  padding: 0px
  margin: 0px
  display: flex
  align-items: center
  justify-content: center

  //background: url(http://127.0.0.1:8887/bg-intro-header.jpg) no-repeat center center fixed
  //-webkit-background-size: cover
  //-moz-background-size: cover
  //-o-background-size: cover
  //background-size: cover
  //-webkit-filter: blur(2px)
  //background-filter: blur(2px)

.bg
  img
    background-repeat: no-repeat
    background-size: cover
    background-position: right
    -webkit-filter: blur(2px)
    -moz-filter: blur(5px)
    -o-filter: blur(5px)
    -ms-filter: blur(5px)
    background-filter: blur(2px)
    opacity: 0.9
    z-index: -1
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100vh


nav
  width: 100%
  position: absolute
  top: 0
  left: 0
  padding: 40px 8%
  display: flex
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
      margin-left: 40px

nav
  ul
    li
      a
        text-decoration: none
        color: #fff
        font-size: 25px
        font-weight: 500
        transition: all 0.3s ease-in-out

      a:hover
        text-decoration: none
        color: rgba(234,45,55, 0.8)

.content
  text-align: center
  animation: slide_Animation 0.5s ease-in-out

.content h1
  font-size: 80px
  -webkit-text-fill-color: white
  -webkit-text-stroke: 1px rgba(234,45,55, 0.8)
  font-weight: 700


#container
  margin-top: 50px

button
  position: relative
  display: inline-block
  cursor: pointer
  outline: none
  border: 0
  vertical-align: middle
  text-decoration: none
  background: transparent
  padding: 0
  font-size: inherit
  font-family: inherit

  &.learn-more
    width: 12rem
    height: auto
    .circle
      @include transition(all, 0.45s, cubic-bezier(0.65,0,.076,1))
      position: relative
      display: block
      margin: 0
      width: 3rem
      height: 3rem
      background: rgba(234,45,55, 0.8)
      border-radius: 1.625rem
      .icon
        @include transition(all, 0.45s, cubic-bezier(0.65,0,.076,1))
        position: absolute
        top: 0
        bottom: 0
        margin: auto
        background: $white
        &.arrow
          @include transition(all, 0.45s, cubic-bezier(0.65,0,.076,1))
          left: 0.625rem
          width: 1.125rem
          height: 0.125rem
          background: none
          &::before
            position: absolute
            content: ''
            top: -0.25rem
            right: 0.0625rem
            width: 0.625rem
            height: 0.625rem
            border-top: 0.125rem solid #fff
            border-right: 0.125rem solid #fff
            transform: rotate(45deg)

    .button-text
      @include transition(all, 0.45s, cubic-bezier(0.65,0,.076,1))
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      padding: 0.75rem 0
      margin: 0 0 0 1.85rem
      color: $black
      font-weight: 700
      line-height: 1.6
      text-align: center
      text-transform: uppercase

  &:hover
    .circle
      width: 100%
      .icon
        &.arrow
        background: $white
        transform: translate(1rem, 0)

    .button-text
      color: $white

// ------------------------------------
@keyframes slide_Animation
  0%
    transform: translateY(700px)
  100%
    transform: translateY(0)
</style>
