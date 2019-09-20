<template>
  <div class="top-produtos">
    <div class="produtos-head">
      <span>Top Produtos</span>
    </div>
    <div class="produtos-gallery">
      <span>
        <img src="../assets/img/produto_camisetas.png">
      </span>

      <span>
        <img src="../assets/img/produto_leggings.png">
      </span>

      <span>
        <img src="../assets/img/produto_tops.png">
      </span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.top-produtos{
  margin-top: 2rem;
}
.produtos-head{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before{
    content: "";
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 80%;
    height: 1px;
    background: #fff;
  }
  &::after{
    content: "";
    display: block;
    clear: both;
    height: 0;
    overflow: hidden;
  }
  span{
    padding: 0 1rem;
    background: #130f40 !important;
    text-transform: uppercase;
    font-size: 1.7rem;
    z-index: 99;
  }
}
.produtos-gallery{
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>