import Vue from 'vue'
import routerCenter from 'vue-router'

Vue.use(routerCenter)

const Router = new routerCenter({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('./views/index/Index.vue')
    },
    {
      path: '/water_drop',
      name: 'WaterDrop',
      component: () => import('./views/activity/WaterDrop.vue')
    },
  ]
});

export default Router