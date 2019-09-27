<template>
  <section class=" container contato">
    <h1>Contato</h1>
    <p>Quer ser um Parceiro Sallada Mista? Entre em contato através do formulário abaixo ou pelos indicados contatos no rodapé!</p>
    <Form />
  </section>
</template>
<script>
import Form from "../components/Form.vue";
export default {
  components: { Form }
};
</script>
<style lang="scss">
.contato{
  min-height: 540px;
  @media (min-width:768px){
    max-width: 680px;
  }
}
</style>