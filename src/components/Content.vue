<template>
  <main class="container">
    <Carousel />
  </main>
</template>
<script>
import Carousel from "./Carousel.vue";
export default {
  components: {
    Carousel
  },
  data() {
    return {
      pages: ""
    };
  }
};
</script>
<style lang="scss">
.container {
  width: 95%;
  margin: 0 auto;
}
</style>
