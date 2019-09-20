<template>
  <div class="main">
    <Header />
    <keep-alive>
      <component :is="pages" />
    </keep-alive>
    <Footer />
    <Tools />
  </div>
</template>

<script>
import barramento from "@/barramento";
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";
import About from "./components/About.vue";
import Footer from "./components/Footer.vue";
import Tools from "./components/Tools.vue";
export default {
  components: {
    Header,
    Content,
    About,
    Footer,
    Tools
  },
  data() {
    return {
      pages: "Content"
    };
  }
};
</script>
<style lang="scss" scoped>
.main {
  font-family: "Quicksand", sans-serif;
  background-color: #130f40 !important;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
