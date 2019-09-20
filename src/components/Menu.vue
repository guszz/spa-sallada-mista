<template>
  <nav>
    <h2>Sallada Mista Desktop menu</h2>
    <li>
      <a @click="setSelectPage" href="Content">home</a>
    </li>
    <li>
      <a @click="setSelectPage" href="Poducts">produtos</a>
    </li>
    <li>
      <a @click="setSelectPage" href="About">quem somos</a>
    </li>
    <li>
      <a @click="setSelectPage" href="Contato">contato</a>
    </li>
  </nav>
</template>
<script>
import barramento from "@/barramento";
export default {
  props: {
    pages: String
  },
  methods:{
    setSelectPage(event){
      this.pages = this.event.value
      barramento.setSelectPage(this.pages)
    }
  }
};
</script>
<style lang="scss" scoped>
/* eslint-disable */
h2 {
  display: none;
}
nav {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  li {
    display: inline-block;
    padding: 0 2rem;
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
    font-size: 1rem;
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
