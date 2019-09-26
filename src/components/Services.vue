<template>
  <div class="top-produtos">
    <div class="produtos-head">
      <span>Top Produtos</span>
    </div>
    <div class="produtos-gallery">
      <span class="gallery_item">
        <img src="../assets/img/produto_camisetas.png">
      </span>

      <span class="gallery_item">
        <img src="../assets/img/produto_leggings.png">
      </span>

      <span class="gallery_item">
        <img src="../assets/img/produto_tops.png">
      </span>
    </div>
    <div class="services_description mt-4">
      <h3 class="description-title" >Porque comprar produtos Sallada Mista?</h3>
      <p class="description-text">
        Lorem Ipsum
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod ipsum metus, at commodo magna semper nec. 
        Ut a leo laoreet ipsum mattis gravida vitae quis tortor. Morbi rutrum neque eget sagittis iaculis. Aliquam erat volutpat.
        Pellentesque in nunc faucibus, elementum quam eget, pharetra orci. Curabitur elementum vehicula est, in ultrices ante tristique sit amet.
      </p>
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
    background: #2b2b2b;
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
    background: #eeeeee !important;
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
  overflow: scroll;
  @media (min-width:992px) {
    overflow: hidden;
  }
  .gallery_item img{
    margin-right: 1rem;
    height: 28rem;
    @media (min-width: 768px) {
      height: 40rem;
    }
    @media (min-width: 992px) {
      margin-right: 0;
      height: auto;
    }
  }
}
.services_description{
  .description-text{
    text-align: justify;
  }
}
</style>