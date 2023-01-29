<script setup>
import "bootstrap/js/dist/modal";
</script>

<template>
  <div class="scroller">
    <RouterView></RouterView>
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
@import '.assets/main.sass'
</style>
