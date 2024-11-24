<template>
  <Navbar v-if="!$route.meta.hideNavigation" />
  <router-view></router-view>
</template>

<script>
import Navbar from '@/components/NavbarComponent.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
export default {
  components: {
    Navbar,
  },
  setup() {
    const route = useRoute()

    // Скрываем навигацию на определённых маршрутах
    const showNavigation = computed(() => {
      return !['/login', '/register'].includes(route.path)
    })

    return { showNavigation }
  },
}
</script>
