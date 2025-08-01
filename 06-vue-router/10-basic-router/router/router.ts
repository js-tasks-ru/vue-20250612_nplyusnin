import { createRouter, createWebHashHistory } from 'vue-router'
import PageIndex from '../views/PageIndex.vue'
import PageFoo from '../views/PageFoo.vue'
import PageBar from '../views/PageBar.vue'

export const router = createRouter({
  history: createWebHashHistory('06-vue-router/10-basic-router'),
  routes: [
    {
      path: '/',
      name: 'index',
      component: PageIndex,
    },
    {
      path: '/foo',
      name: 'foo',
      component: PageFoo,
    },
    {
      path: '/bar',
      name: 'bar',
      component: PageBar,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/PageLogin.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/PageRegister.vue'),
    }
  ],
})
