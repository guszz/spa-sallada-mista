<template>
  <div>
    <nav class="menu_mobile" :class="toogleActive">
      <h2 class="d-none">Sallada Mista Mobile menu</h2>
      <div class="line"></div>
      <li class="nav-item mb-3" @click="activeClass = !activeClass" :class="toogleActive">
        <i class="fas fa-home"></i>
        <router-link to="/" class="nav-link" >home</router-link>
      </li>
      <li class="nav-item mb-3" @click="activeClass = !activeClass" :class="toogleActive">
        <i class="fas fa-tshirt"></i>
        <router-link to="/produtos" class="nav-link" >produtos</router-link>
      </li>
      <li class="nav-item mb-3" @click="activeClass = !activeClass" :class="toogleActive">
        <i class="fas fa-stream"></i>
        <router-link to="sobre" class="nav-link">quem somos</router-link>
      </li>
      <li class="nav-item mb-3"  @click="activeClass = !activeClass" :class="toogleActive">
        <i class="fas fa-envelope"></i>
        <router-link to="/contato" class="nav-link">contato</router-link>
      </li>
    </nav>
    <div class="hamburger_btn d-block d-md-none">
      <div @click="activeClass = !activeClass" :class="toogleActive" class="icon">
        <div class="hamburger"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeClass: false
    };
  },
  computed: {
    toogleActive() {
      return {
        active: this.activeClass
      };
    }
  }
};
</script>
<style lang="scss">
.menu_mobile{
  position: absolute;
  top: 0;
  left: -200px;
  padding-top: 1.25rem;
  padding-left: 1.25rem;
  height: 100vh;
  min-width: 100px;
  background-color: #130f40;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: all 300ms ease-in-out;
  &.active{
    left: 0;
  }
  .line{
    display: block;
    width: 100%;
    height: 35px;
  }
  .nav-item{
    width: 100%;
    display: flex;
    align-items: center
  }
  i{
    color: #fff;
  }
  a{
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    font-size: 1rem;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    &:hover {
      color: #e91e63;
    }
  }
}
.hamburger_btn {
  position: relative;
}
.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.hamburger {
  width: 30px;
  height: 2px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}

.hamburger:before,
.hamburger:after {
  content: "";
  position: absolute;
  width: 30px;
  height: 2px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}
.hamburger:before {
  top: -8px;
}
.hamburger:after {
  top: 8px;
}

.icon.active .hamburger {
  background-color: rgba(0, 0, 0, 0);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0);
}
.icon.active .hamburger:before {
  top: 0;
  transform: rotate(45deg);
}
.icon.active .hamburger:after {
  top: 0;
  transform: rotate(135deg);
}
</style>