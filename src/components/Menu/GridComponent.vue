<template>
  <div class="menu-grid">
    <div v-if="isLoading || getAllProducts.length == 0" class="loading-indicator">
      Loading products...
    </div>
    <div class="menu-grid-content" v-else>
      <CardItem v-for="product in getAllProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CardItem from './CardItem.vue';

export default {
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    CardItem,
  },
  computed: {
    ...mapGetters(['getAllProducts']),
  },
  methods: {
    ...mapActions(['fetchAllProducts']),
    async setAllProducts() {
      this.isLoading = true; 
      try {
        await this.fetchAllProducts();
        this.isLoading= false
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        if (this.getAllProducts.length > 0) {
          this.isLoading = false;
        }
      }
    },
  },
  mounted() {
    this.setAllProducts();
  },
};
</script>

<style scoped>
.loading-indicator {
  text-align: center;
  font-size: 18px;
  padding: 20px;
  color: #555;
}
</style>
