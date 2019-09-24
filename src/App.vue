<template>
  <div class="main">
    <Header />
    <router-view />
    <Footer />
    <Tools />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Tools from "./components/Tools.vue";
export default {
  components: {
    Header,
    Footer,
    Tools
  }
};
</script>
<style lang="scss" scoped>
.main {
  font-family: "Quicksand", sans-serif;
  background-color: #eeeeee;
  color: #2b2b2b;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
