<template>
  <div class="go-top">
    <i class="fas fa-angle-up"></i>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
.go-top{
  display: none;
  position: absolute;
  right: 2rem;
  bottom: 1rem;
  padding: 1.5rem 2rem;
  border-radius: 3rem;
  cursor: pointer;
  i{
    font-size: 2.5rem;
    line-height: 2.5rem;
    color: #e91e63;
    opacity: .4;
    transition: all 300ms ease-in-out;
    &:hover{
      opacity: 1;
    }
  }
}
</style>