<template>
  <nav>
    <h2>Sallada Mista Desktop menu</h2>
    <li>
      <a @click="pages = 'Content'">home</a>
    </li>
    <li>
      <a @click="pages = 'Products'">produtos</a>
    </li>
    <li>
      <a @click="pages = 'About'">quem somos</a>
    </li>
    <li>
      <a @click="pages = 'Contato'">contato</a>
    </li>
  </nav>
</template>
<script>
import barramento from "@/barramento";
export default {
  props: {
    pages: String
  }
};
</script>
<style lang="scss" scoped>
/* eslint-disable */
h2 {
  display: none;
}
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  li {
    width: 100%;
    border-bottom: 4px solid transparent;
    transition: all 300ms ease-in-out;
    &:hover {
      border-bottom: 4px solid #e91e63;
    }
  }
  a {
    display: block;
    width: 100%;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    font-size: 1.3rem;
    padding: 1.25rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    &:hover {
      color: #e91e63;
    }
  }
}
</style>
