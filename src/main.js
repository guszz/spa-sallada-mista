import '@babel/polyfill'
import 'mutationobserver-shim'
import './app.scss'
import Vue from "vue";
import './plugins/bootstrap-vue'
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
