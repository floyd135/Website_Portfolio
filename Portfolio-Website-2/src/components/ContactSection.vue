<template>
  <div class="main">
    <div class="row">
      <div class="bg_contact">
        <!-- <img
          class="background"
          src="https://i.ibb.co/Q6t392t/hhholographic.png"
          alt="bg-image"
        /> -->
      </div>
      <!-- <img src="" alt="hhholographic" border="0"></img> -->

      <div class="row">
        <div class="col-9 leftCol">
          <div class="row contactBanner">
            <h1 class="contactHead">Contact</h1>
          </div>

          <div class="row bottomBanner">
            <div class="col-6">
              <h3 class="contactDesc">
                For any enquiries, or just to say hello, get in touch and
                contact me
              </h3>
            </div>

            <div class="col-6">
              <div class="row box">
                <div class="col-6">
                  <div class="row heading"><span>Name</span></div>
                  <div class="row contentDesc">
                    <span>Angkoon Angkoonsawaengsuk</span>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row heading"><span>Phone Number</span></div>
                  <div class="row contentDesc">
                    <span>(+66) 81 980 8185</span>
                  </div>
                </div>
              </div>

              <div class="row box">
                <div class="col-6">
                  <div class="row heading"><span>Email</span></div>
                  <div class="row contentDesc">
                    <span>angkoon841@gmai.com</span>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row heading"><span>Line ID</span></div>
                  <div class="row contentDesc"><span>angkoon2544</span></div>
                </div>
              </div>

              <div class="row box">
                <div class="col-6">
                  <div class="row heading"><span>LinkedIn</span></div>
                  <div class="row contentDesc">
                    <span
                      ><a
                        href="https://www.linkedin.com/in/angkoon-angkoonsawaengsuk/"
                        >Link</a
                      ></span
                    >
                  </div>
                </div>
                <div class="col-6">
                  <div class="row heading"><span>Github</span></div>
                  <div class="row contentDesc">
                    <span><a href="https://github.com/floyd135">Link</a></span>
                  </div>
                </div>
              </div>

              <div class="row box">
                <div class="col-6">
                  <div class="row heading"><span>Facebook</span></div>
                  <div class="row contentDesc">
                    <span
                      ><a
                        href="https://www.facebook.com/angkoon.angkoonsawaengsuk/"
                        >Link</a
                      ></span
                    >
                  </div>
                </div>
                <div class="col-6">
                  <div class="row heading"><span>Instagram</span></div>
                  <div class="row contentDesc">
                    <span
                      ><a href="https://www.instagram.com/ank.jr_/"
                        >Link</a
                      ></span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-3 rightCol"></div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="sass">

.row
  margin-left: 0px !important
  margin-right: 0px !important
  padding: 0px !important

.main
  height: 100vh

.bg_contact
  img
    // background-repeat: no-repeat
    // background-size: cover
    // background-position: right
    -webkit-filter: blur(2px)
    -moz-filter: blur(5px)
    -o-filter: blur(5px)
    -ms-filter: blur(5px)
    background-filter: blur(29px)
    opacity: 1.0
    z-index: -1
    position: absolute
    left: 0
    width: 100%
    height: 100%

.leftCol
  background-color: #f3f3f3
  height: 100vh
  width: 100%
  // padding: 10px 3%
  justify-content: space-around
  z-index: 1

.rightCol
  background-color: #FBDA61
  background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)

.box
  // background-color: #ffffff
  border-radius: 10px
  padding: 10px 20px
  margin: 10px 0px

.heading
  font-size: 15px
  font-weight: 700
  color: grey
  padding: 10px 0px

.contentDesc
  font-size: 25px
  font-weight: 400
  color: #000000
  padding: 10px 0px

  a
    color: #000000
    text-decoration: none
    transition: color 0.3s

  a:hover
    color: red

.contactHead
  font-size: 70px
  font-weight: 900
  color: #000000
  padding: 15px 0px
  text-align: left
  font-style: italic
</style>
