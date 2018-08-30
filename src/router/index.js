import Vue from 'vue';
import Router from 'vue-router';
import Index from '../components/page/Index.vue';
import Door from '../components/page/Door.vue';
import Dormitory from '../components/page/Dormitory.vue';
import Field from '../components/page/Field.vue';
import Vehicle from '../components/page/Vehicle.vue';
Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/:username/:password/:rememberMe',
      name: 'Index',
      component: Index,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Door',
      name: 'Door',
      component: Door,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Dormitory',
      name: 'Dormitory',
      component: Dormitory,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Field',
      name: 'Field',
      component: Field,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Vehicle',
      name: 'Vehicle',
      component: Vehicle,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

export default router;
