<script setup>
import "bootstrap/js/dist/modal";
</script>

<template>
  <div class="introHeader">
    <!-- <video autoplay loop muted plays-inline></video> -->
    <div
      class="back-video"
      style="
        width: 100%;
        height: 100%;
        padding-bottom: 56.25%;
        position: absolute;
        z-index: -1;
      "
    >
      <iframe
        src="https://streamable.com/e/r0hxra"
        frameborder="0"
        width="100%"
        height="100%"
        allowfullscreen
        allow="autoplay"
        style="
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0px;
          top: 0px;
          overflow: hidden;
          object-fit: cover;
        "
      >
      </iframe>

      <!-- <video width="100%" height="100%" autoplay muted >
        <source src="https://youtu.be/QbxRuGuR8T0" type="video/mp4">
         <source src="movie.ogg" type="video/ogg"> -->
      <!-- Your browser does not support the video tag. 
      </video> -->
    </div>

    <nav>
      <!-- <img src="" alt="Logo" /> -->
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

    <div class="content">
      <h1 style="font-style: italic">Angkoon</h1>
      <br />
      <h1>Angkoonsawaengsuk</h1>
      <div id="container">
        <button class="learn-more">
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text" style="color: white">Learn More</span>
        </button>
      </div>
    </div>

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
  width: 100%
  height: 100vh
  background-image: linear-gradient(rgba(12,3,51,0.3), rgba(12,3,51,0.3))
  position: relative
  padding: 0 5%
  display: flex
  align-items: center
  justify-content: center

.back-video
  position: absolute
  right: 0
  bottom: 0
  z-index: -1

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
        color: red

.content
  text-align: center
  animation: slide_Animation 0.5s ease-in-out

.content h1
  font-size: 80px
  color: #fff
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
