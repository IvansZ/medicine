import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Index from './views/index/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index/index',
      component: Index,
    },
    {
      path: '/index',
      name: 'index/index',
      component: Index,
    },
  ],
});
