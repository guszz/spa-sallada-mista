<template>
  <header class="main-header">
    <div class="main-logo">
      <h1>Sallada Mista</h1>
      <img src="../assets/img/logo.png" alt="Sallada Mista | Fashion & Fitness">
    </div>
    <Menu />
  </header>
</template>
<script>
import Menu from "./Menu.vue";
export default {
  components: {
    Menu
  }
};
</script>
<style lang="scss" scoped>
.main-logo{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
}
h1{
  display: none;
}
</style>
