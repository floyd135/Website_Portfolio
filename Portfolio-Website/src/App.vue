<script setup>
import "bootstrap/js/dist/modal";
</script>



<template>
  <div class="row ">
    <div class="col-2 navBarSection" id="navBarSection">
      <a href="#">About</a>
      <a href="#">Skills</a>
      <a href="#">Work</a>
      <a href="#">Contact</a>
    </div>

    
    <div class="col-10 contentSection main">
      <div class="row">
        <div class="col-5 intro"><h1>Test 1</h1></div>
        <div class="col-7 bg"><h1>Test 2</h1></div>
      </div>
    </div>
  </div>
</template>

<script>
/* Set the width of the side navigation to 250px */
export default {
  data() {
    return {
      navBarSection: document.getElementById("navBarSection"),
      contentSection: document.getElementById("contentSection"),
    }
  },
  methods: {
    
  }
}
</script>

<style lang="sass">
.main 
  margin-left: 35vh
  

.navBarSection
  height: 100%
  width: 0
  position: fixed
  z-index: 1
  top: 0
  left: 0
  background-color: #111
  overflow-x: hidden
  padding-top: 60px
  transition: 0.5s

  a 
    padding: 8px 8px 8px 32px
    text-decoration: none
    font-size: 25px
    color: #818181
    display: block
    transition: 0.3s

  a:hover
    color: #f1f1f1
  
.contentSection
  .bg
    background-image: url("https://iili.io/HahaF1I.th.jpg")
    background-repeat: no-repeat
    background-size: cover
    height: 100vh

</style>
