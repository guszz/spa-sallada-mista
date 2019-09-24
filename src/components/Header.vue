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
    </div>
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
.main-header {
  position: sticky;
  top: 0;
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  background-color: #130f40;
  z-index: 999;
  .container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.main-logo {
  width: 15%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  img{
    display: block;
    width: 100%;
  }
}
h1 {
  display: none;
}
</style>
