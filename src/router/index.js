import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeVuew.vue'
import MenuView from "@/views/MenuView.vue"
import Registration from "@/views/RegistrationView.vue"
import Login from "@/views/LoginVIew.vue"
import Doc from "@/views/DocView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/menu',
      name: 'Menu',
      component: MenuView,
    },
    {
      path: '/doc',
      name: 'Doc',
      component: Doc,
    },
    {
      path: '/register',
      name: 'Registration',
      component: Registration,
      meta: { hideNavigation: true },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { hideNavigation: true },
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', // Для плавной прокрутки
      };
    }
    return { top: 0 };
  },
})

export default router
