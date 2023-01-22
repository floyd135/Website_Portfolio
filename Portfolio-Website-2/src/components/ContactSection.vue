<template>
  <div class="main">
    <div class="row">
      <div class="bg_contact">
        <img
          class="background"
          src="https://i.ibb.co/wMWWpgC/bg-contact-header.jpg"
          alt="bg-image"
        />
      </div>

      <div class="row">
        <div class="card">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="col heading vertical">
                  <h1>Contact</h1>
                </div>

                <div class="col heardingQuote vertical">
                  <p>Let's get in touch!</p>
                </div>
              </div>

              <div class="col">
                <div class="col name">
                  <p>
                    <span class="fa fa-map-marker"></span> Angkoon
                    Angkoonsawaengsuk
                  </p>
                </div>

                <div class="col location">
                  <p>
                    <span class="fa fa-map-marker"></span> Bangkok, Thailand
                  </p>
                </div>

                <div class="col phoneNum">
                  <p><span class="fa fa-phone"></span> +66 81 980 8185</p>
                </div>

                <div class="col email">
                  <p>
                    <span class="fa fa-envelope"> angkoon841@gmail.com</span>
                  </p>
                </div>

                <div class="col linkedin">
                  <p>
                    <span class="fa fa-envelope"> LOGO - Link</span>
                  </p>
                </div>

                <div class="col github">
                  <p>
                    <span class="fa fa-envelope"> LOGO - Link</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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

.card
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2)
  transition: 0.3s
  position: relative
  width: 50vh
  height: 50vh
  top: 60%
  left: 100vh
  opacity: 0.9
  border-radius: 20px !important


.card:hover
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.6)

.container
  padding: 20px 10px
  display: block

  h1, p
    opacity: 1.0

/*.vertical
  writing-mode: vertical-rl
  text-orientation: upright
</style>
