<template>
  <main class="container">
    <Carousel />
  </main>
</template>
<script>
import Carousel from "./Carousel.vue";
import Contato from "./Contato.vue";
export default {
  components: {
    Carousel
  }
};
</script>
<style lang="scss">
.container {
  width: 95%;
  margin: 0 auto;
}
</style>
