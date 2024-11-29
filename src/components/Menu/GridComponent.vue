<template>
  <div class="menu-grid">
    <div class="menu-grid-content">
      <CardItem v-for="product in getAllProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CardItem from './CardItem.vue'
export default {
  components: {
    CardItem,
  },
  computed: {
    ...mapGetters(['getAllProducts']),
  },
  methods: {
    ...mapActions(['fetchAllProducts']),
  },
  mounted() {
    this.fetchAllProducts()
  },
}
</script>
