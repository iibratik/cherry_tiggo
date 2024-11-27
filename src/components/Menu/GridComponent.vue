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
  methods: {
    ...mapActions(['fetchAllProducts','fetchTopProducts' ]),
  },
  mounted() {
    this.fetchAllProducts()
    this.fetchTopProducts()
  },
  computed: {
    ...mapGetters(['getAllProducts']),
  },
}
</script>
