<template>
  <form action="#" method="POST" id="contact-form" class="contact-form">
    <div class="contact_form">
      <label class="form_label" for="nome">Nome:</label>
      <input class="contact-form__field" name="nome" type="text" id="inputNome" title="Deixe seu nome" required />
    </div>
    <div class="contact-form__group contact-form__group--right-colum">
      <label class="contact-form__label" for="email">E-mail:</label>
      <input class="contact-form__field" name="email" type="email" id="inputEmail" title="deixe seu email" required />
    </div>
    <div class="contact-form__group">
      <label class="contact-form__label" for="mensagem">Deixe sua mensagem:</label>
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
</template>
<script>
export default {
  
}
</script>
<style lang="scss">

</style>