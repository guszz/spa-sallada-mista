<template>
  <main class="container">
    <Carousel />
    <Services />
  </main>
</template>
<script>
import Carousel from "../components/Carousel.vue";
import Services from "../components//Services.vue";
import Contato from "./Contato.vue";
export default {
  components: {
    Carousel,
    Services
  }
};
</script>
