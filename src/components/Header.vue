<template>
  <header class="main-header">
    <div class="container">
      <div class="main-logo">
        <h1>Sallada Mista</h1>
        <router-link to="/">
          <img src="../assets/img/logo.png" alt="Sallada Mista | Fashion & Fitness" />
        </router-link>
      </div>
      <Menu />
      <MenuMobile />
    </div>
  </header>
</template>
<script>
import Menu from "./Menu.vue";
import MenuMobile from "./MenuMobile.vue";
export default {
  components: {
    Menu,
    MenuMobile
  }
};
</script>
<style lang="scss" scoped>
.main-header {
  position: sticky;
  top: 0;
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  background-color: #130f40;
  z-index: 999;
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.main-logo {
  width: 35%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  z-index: 99;
  img {
    display: block;
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 15%;
  }
}
h1 {
  display: none;
}
</style>
