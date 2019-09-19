<template>
  <nav>
    <h2>Sallada Mista Desktop menu</h2>
    <li>
      <a>home</a>
    </li>
    <li>
      <a>produtos</a>
    </li>
    <li>
      <a >quem somos</a>
    </li>
    <li>
      <a>contato</a>
    </li>
  </nav>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
h2{
  display: none;
}
nav{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  a{
    color:#fff;
    text-decoration: none;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    &:hover{
      font-weight: 700;
      color:#e91e63;
    }                                                                                           
  }
}
</style>
