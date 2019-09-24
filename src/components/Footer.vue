<template>
<footer class="main-footer">
  <b-container>
    <b-row>
      <b-col>
        <h4 class="footer_title">Parceiros</h4>
        <div class="partners">
          <a href="//www.clickmoda.com.br/" target="_blank">
            <img src="../assets/img/logo_ckmoda.png" alt="Click Moda | Casual & Fitness" />
          </a>
        </div>
      </b-col>

      <b-col cols="5">
        <h4 class="footer_title">Fale Conosco!</h4>
        <div class="contato-item">
          <i class="far fa-envelope"></i> <span>contato@salladamista.com.br</span>
        </div>
        <div class="contato-item">
          <i class="fas fa-phone"></i><span> (22)2521-5403 </span>
        </div>
        <div class="contato-item">
          <i class="fas fa-home"></i>Rua Vicente Sobrinho, 194 - Olaria, Nova Friburgo - RJ - CEP: 28623-440
        </div>
      </b-col>

      <b-col>
        <h4 class="footer_title">Fiquem conectados!</h4>
        <div class="social_nav">
          <span>
            <a target="_blank" href="//www.facebook.com/Salladamista">
              <i class="fab fa-facebook"></i>
            </a>
          </span>
          <span>
            <a target="_blank" href="//www.instagram.com/salladamista/">
              <i class="fab fa-instagram"></i>
            </a>
          </span>
          <span>
            <a target="_blank" href="://api.whatsapp.com/send?phone=5522999999999&text=sua%20mensagem">
              <i class="fab fa-whatsapp"></i>
            </a>
          </span>
        </div>
      </b-col>
    </b-row>

  </b-container>
    
  <div class="copyright text-center">
    © 2018 - Todos os direitos revervados -
    <a class="text-white" target="_blank" href="//www.linkedin.com/in/dilton-gon%C3%A7alves-neves-filho-47b84178/">Dilton G. Neves Filho</a>
  </div>
</footer>
</template>
<script>
export default {};
</script>
<style lang="scss">
.main-footer{
  background-color: #130f40;
  width: 100%;
  padding-top: 1rem;
  margin-top: 2rem;
}
.footer_title{
  padding-bottom: 1rem;
  color: #fff;
  border-bottom: 1px solid #fff
}
.contato-item{
  display: flex;
  flex-direction:row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.25rem;
  color: #fff;
  i{
    line-height: 2rem;
    font-size: 2rem;
    margin-right: 1.25rem;
  }
}
.partners{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.social_nav{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  a{
    color: #fff;
    transition: all 300ms ease-in-out;
    :hover{
      color: #e91e63;
    }
  }
  i{
    padding: 1rem;
    font-size: 3rem;
    line-height: 3rem;
  }
}
.copyright{
  background-color: #0c1014;
  color: #fff;
  padding: 1rem 0;
  margin-top: 1rem;
}
</style>style
