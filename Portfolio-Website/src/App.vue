<script setup>
import "bootstrap/js/dist/modal";
</script>

<template>
  <div class="row">
    <div class="bg">
      <img
        class="background"
        src="https://i.ibb.co/QHfMKYf/shutterstock-2104429805.jpg"
        alt="bg-image"
      />
      <div class="row">
        <div class="col-6 leftCard">
          <div class="mainText">
            <span style="font-style: italic">ANGKOON</span>
            <br />
            <span>ANGKOONSAWAENGSUK</span>
          </div>
        </div>

        <div class="col-6 rightCard"></div>
      </div>
    </div>
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')

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

.leftCard
  background-color: white
  background-color: rgba(255, 255, 255, 0.2)
  box-shadow: 0 15px 25px rgba(129, 124, 124, 0.2)
  backdrop-filter: blur(14px)
  color: black
  position: absolute
  z-index: 2
  width: 100vh
  height: 100vh
  
  .mainText
    font-family: 'Montserrat', sans-serif
    font-size: 6vh
    font-weight: 1000 
    text-align: left
    margin-left: 5.5vh
    padding: 70% 0px 
</style>
