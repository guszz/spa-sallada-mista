<template>
  <div>
    <Header />
    <Content />
    <Footer />
    <Tools />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";
import Tools from "./components/Tools.vue";
export default {
  components: {
    Header,
    Content,
    Footer,
    Tools
  }
};
</script>
<style lang="scss">
</style>
