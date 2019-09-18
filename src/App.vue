<template>
  <header class="main-header">
    <h1 class="main_logo">Sallada Mista</h1>
    <div class="mobile-nav">
      <nav class="nav" id="nav">
        <h2>Sallada Mista Mobile menu</h2>
        <a id="close-menu" class="close-menu">
          <i class="fas fa-times"></i>
        </a>
        <a href="#">home</a>
        <a href="produtos.html">produtos</a>
        <a href="#about">quem somos</a>
        <a href="#contato">contato</a>
      </nav>
      <span id="open" class="open">&#9776;</span>
    </div>
    <div class="desktop-menu container">
      <nav class="navbar">
        <h2>Sallada Mista Desktop menu</h2>
        <li class="nav-item">
          <a class="nav-link" href="#">home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="produtos.html">produtos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">quem somos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contato">contato</a>
        </li>
      </nav>
    </div>
  </header>
  <section class="mt-2">
    <div class="main-banner">
      <div class="elegant">
        <img
          src="css/img/banners/capa_site.jpg"
          alt="Salllada Mista || Fashion & Fitness"
          class="img-banner"
        />
      </div>
    </div>
  </section>

  <main class="container">
    <section id="about" class="whois text-white mt-5">
      <h2 class="border-bottom border-light text-center pb-4 mb-4">Sobre a Sallada Mista</h2>
      <p>
        Localizada em Nova Friburgo - RJ, também conhecida como "Capital da Moda Íntima do Brasil", trabalhamos para criar produtos de alta qualidade e com preço que cabe no seu bolso.
        A Sallada Mista foca no conceito "Fashion & Fitness", onde além de trazer conforto e segurança no treino, também conta com a beleza e sofisticação que só os nossos produtos podem entregar.
      </p>
      <p>Nossa Missão é oferecer um produto diferenciado através de um Design exclusivo, qualidade e inovação tecnológica. Seja para quem ama malhar ou simplismente quer ficar linda na correria do dia-a-dia!</p>
      <p>Somos uma empresa com anos de experiência no mercado e contamos com profissionais que amam o que fazem para trazer o melhor para você parceiro(a) Sallada Mista ou para seu/sua cliente.</p>
      <p>Não perca essa oportunidade e entre em contato! Nosso prazer é a sua satisfação.</p>
    </section>
  </main>
  <section id="contato" class="page-content mt-5">
    <div class="container text-center text-white mb-2">
      <h1 class="border-bottom border-light pb-4">Contato</h1>
    </div>
    <p
      class="text-center text-white"
    >Quer ser Revendedor(a) Sallada Mista? Entre em contato através do formulário abaixo ou pelos contatos no rodapé!</p>
    <form action="#" method="POST" id="contact-form" class="contact-form">
      <div class="contact-form__group contact-form__group--left-colum">
        <label class="contact-form__label" for="nome">Nome:</label>
        <br />
        <br />
        <input
          class="contact-form__field"
          name="nome"
          type="text"
          id="inputNome"
          title="Deixe seu nome"
          required
        />
      </div>
      <div class="contact-form__group contact-form__group--right-colum">
        <label class="contact-form__label" for="email">E-mail:</label>
        <br />
        <br />
        <input
          class="contact-form__field"
          name="email"
          type="email"
          id="inputEmail"
          title="deixe seu email"
          required
        />
      </div>
      <div class="contact-form__group">
        <label class="contact-form__label" for="mensagem">Deixe sua mensagem:</label>
        <br />
        <br />
        <textarea
          class="contact-form__field"
          name="mensagem"
          id="inputMessagem"
          title="Deixe sua mensagem!"
          cols="20"
          rows="10"
          required
        ></textarea>
      </div>
      <input type="submit" class="contact-form_btn" value="Enviar" />
    </form>
  </section>
  <div class="map-view">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d922.8098502382203!2d-42.539712!3d-22.306784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x13e67e60a464c16!2sSalada+Mista+Friburgo!5e0!3m2!1spt-BR!2sbr!4v1540524735478"
      width="600"
      height="450"
      frameborder="0"
      style="border:0"
      allowfullscreen
    ></iframe>
  </div>

  <footer class="footer text-white">
    <div class="bloco-1 container">
      <div class="footer__colum">
        <h2 class="footer__title">Parceiros</h2>
        <ul class="Parceiros text-white">
          <li>
            <span class="footer__link-list__item">
              <a href="//www.clickmoda.com.br/">
                <img src="css/img/logos/logo_ck-moda-preto.png" alt="Click Moda | Casual & Fitness" />
              </a>
            </span>
          </li>
        </ul>
      </div>

      <div class="footer__colum">
        <h2 class="footer__title">Fale Conosco!</h2>
        <ul class="text-white">
          <li>
            <span class="footer__link-list__item">
              <i class="far fa-envelope fa-2x mt-2 mr-2"></i>contato@salladamista.com.br
            </span>
          </li>
          <li>
            <span class="footer__link-list__item">
              <i class="fas fa-phone fa-2x mr-2"></i>(22)2521-5403
            </span>
          </li>
          <li>
            <span class="footer__link-list__item">
              <i class="fas fa-home fa-2x mr-2"></i>Rua Vicente Sobrinho, 194 - Olaria, Nova Friburgo - RJ - CEP: 28623-440
            </span>
          </li>
        </ul>
      </div>

      <div class="footer__colum">
        <h2 class="footer__title">Fiquem conectados!</h2>
        <ul class="social text-white">
          <li class="d-inline-block ml-4 mr-2 mt-4">
            <a
              target="_blank"
              class="footer__link-list__item"
              href="//www.facebook.com/Salladamista"
            >
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li class="d-inline-block mx-4">
            <a
              target="_blank"
              class="footer__link-list__item"
              href="//www.instagram.com/salladamista/"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li class="d-inline-block ml-2">
            <a
              target="_blank"
              class="footer__link-list__item"
              href="://api.whatsapp.com/send?phone=5522999999999&text=sua%20mensagem"
            >
              <i class="fab fa-whatsapp"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="clear"></div>
    </div>

    <section class="bloco-2 text-center p-4">
      © 2018 - Todos os direitos revervados -
      <a
        class="text-white"
        target="_blank"
        href="//www.linkedin.com/in/dilton-gon%C3%A7alves-neves-filho-47b84178/"
      >Dilton G. Neves Filho</a>
    </section>
  </footer>
  <div class="go-top">
    <i class="fas fa-angle-up"></i>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
</style>
