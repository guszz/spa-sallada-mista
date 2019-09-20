<template>
  <main class="container">
    <Carousel />
    <Services />
  </main>
</template>
<script>
import Carousel from "./Carousel.vue";
import Services from "./Services.vue";
import Contato from "./Contato.vue";
export default {
  components: {
    Carousel,
    Services
  }
};
</script>
