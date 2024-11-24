<template>
  <nav class="navbar navbar-expand-lg container">
    <div class="container navbar-content">
      <router-link class="navbar-brand navbar-title" to="/">Cherry cake CafE </router-link>
      <ul class="navbar-list">
        <li class="list-item">
          <router-link class="list-item__link" to="/menu">menu</router-link>
        </li>
        <li class="list-item">
          <a href="#about-us">about us</a>
        </li>
        <li class="list-item">
          <a class="list-item__link" href="#contacts">contacts</a>
        </li>
      </ul>
      <WhiteBtn v-show="!isAuth">
        <router-link to="/register">Sign up</router-link>
      </WhiteBtn>
      <span v-show="isAuth">Welcome!</span>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import WhiteBtn from '@/components/UI/WhiteBtn.vue'
export default {
  components: {
    WhiteBtn,
  },
  data() {
    return {
      isAuth: this.$store.state.username,
      orderModalWin: false,
    }
  },
  computed: {
    ...mapGetters(['getIsAuth']), // Map Vuex getter to computed property
  },
}
</script>
