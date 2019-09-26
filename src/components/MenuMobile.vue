<template>
  <div class="hamburger_menu d-block d-md-none">
    <div @click="activeClass = !activeClass" :class="toogleActive" class="icon">
      <div class="hamburger"></div>
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
.hamburger_menu {
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