<template>
  <section class="contact-form">
    <form action="#" method="POST" id="contact-form" class="form-group">
      <div class="row">
        <div class="col-12 col-md-6 mb-2">
          <input class="form-control" name="nome" type="text" id="inputNome" placeholder="Nome:" title="Deixe seu nome" required/>
        </div>
        <div class="col-12 col-md-6 mb-2">
          <input class="form-control" name="email" type="email" id="inputEmail" placeholder="e-mail:" title="deixe seu email" required/>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <textarea class="form-control" name="mensagem" id="inputMessagem" placeholder="Deixe uma mensagem!" rows="10" title="Deixe sua mensagem!"  required></textarea>
        </div>
        <div class="col-12 mt-2">
          <input type="submit" class="btn btn-outline-success float-right" value="Enviar" />
        </div>
      </div>
    </form>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss">
</style>
