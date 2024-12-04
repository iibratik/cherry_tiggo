import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MenuView from "@/views/MenuView.vue"
import Registration from "@/views/RegistrationView.vue"
import Login from "@/views/LoginVIew.vue"
import Doc from "@/views/DocVIew.vue"
import store from '@/store'
import SummaryOrderView from '@/views/SummaryOrderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: "/menu",
    //GDE API DLYA LOGINA EBANAT??????? YA EBU ?
      name: "Menu",
      component: MenuView,
      beforeEnter: (to, from, next) => {
        const username = store.getters.getUser; // Предполагается, что есть геттер для username
        if (username) {
          next(); // Если username не null, переходим на страницу
        } else {
          next("/register"); // Если username отсутствует, перенаправляем на регистрацию
        }
      },
    },
    {
      path: '/doc',
      name: 'Doc',
      component: Doc,
      meta: { hideNavigation: true },
    },
    {
      path: '/register',
      name: 'Registration',
      component: Registration,
      meta: { hideNavigation: true },
    },
    {
      path: '/summary-order',
      name: 'SummaryOrder',
      component: SummaryOrderView,
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
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  },
})

export default router
