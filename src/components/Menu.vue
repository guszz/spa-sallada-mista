<template>
  <nav class="d-none d-md-flex">
    <h2>Sallada Mista Desktop menu</h2>
    <li>
      <router-link to="/">home</router-link>
    </li>
    <li>
      <router-link to="/produtos">produtos</router-link>
    </li>
    <li>
      <router-link to="sobre">quem somos</router-link>
    </li>
    <li>
      <router-link to="/contato">contato</router-link>
    </li>
  </nav>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
/* eslint-disable */
h2 {
  display: none;
}
nav {
  display: flex;
  height: 100%;
  width: 80%;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  li {
    height: 100%;
    padding: 0.5rem 0.25rem;
    margin: 0 1.25rem;
    border-bottom: 2px solid transparent;
    transition: all 300ms ease-in-out;
    &:hover {
      border-bottom: 2px solid #e91e63;
    }
  }
  a {
    display: block;
    width: 100%;
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    font-size: 0.75rem;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    &:hover {
      color: #e91e63;
    }
  }
}
</style>
