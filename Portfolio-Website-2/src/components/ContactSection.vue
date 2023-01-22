<template>
  <div class="row">
    <div class="row">
      <div class="bg_contact">
        <img
          class="background"
          src="http://127.0.0.1:8887/bg-contact-header.jpg"
          alt="bg-image"
        />
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="sass">
.bg_contact
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
    left: 0
    width: 100%
    height: 100vh
</style>
