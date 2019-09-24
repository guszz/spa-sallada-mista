import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import About from './views/About.vue';
import Contato from './views/Contato.vue';
import Produtos from './views/Products.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes:[
    {
      path: '/',
      component: Home
    },
    {
      path: '/sobre',
      component: About
    },
    {
      path: '/contato',
      component: Contato
    },
    {
      path: '/produtos',
      component: Produtos
    }
  ]
})