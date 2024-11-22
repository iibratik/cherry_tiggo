<template>
  <div class="menu-card">
    <ModalComponent v-if="imageModalWin">
      <div class="menu-card__modal-win">
        <button @click="imageModalWin = !imageModalWin" class="arrow-back">
          <img src="@/assets/img/arrow_back.svg" alt="arrow-back" />
        </button>
        <div class="modal-win__body">
          <div class="modal-win__img">
            <img :src="product.picture" :alt="product.imgDesc" />
          </div>
          <h3 class="modal-win__title">{{ product.name }}</h3>
          <div class="modal-win__text">
            <div class="modal-win__left">
              <span>Description</span>
              <p class="modal-win__description">{{ product.description }}</p>
            </div>
            <div class="modal-win__right">
              <div class="modal-win-raiting">
                <img
                  src="@/assets/img/stars.svg"
                  alt="raiting stars"
                  v-for="star in product.raiting"
                  :key="star"
                />
              </div>
              <span class="modal-win__price">Price: {{ product.price }}$</span>
            </div>
          </div>
        </div>
      </div>
    </ModalComponent>

    <div class="menu-card-content">
      <button @click="imageModalWin = !imageModalWin">
        <img :src="product.picture" :alt="product.imgDesc" />
      </button>
      <div class="menu-card-body">
        <h3 class="menu-card__title">{{ product.name }}</h3>
        <div class="menu-card__price">
          <span>{{ product.price }}</span
          >$
        </div>
      </div>
    </div>
    <div class="menu-order-btns">
      <button class="menu-btn" v-show="!isOrdering" @mouseenter="showOrderQuantity">Order</button>
      <div class="menu-order-quantity" v-show="isOrdering" @mouseleave="resetOrderView">
        <button class="menu-order-quantity__btn" @click="minusOrDeleteCart()">
          <i class="fa-solid fa-minus"></i>
        </button>
        {{ productAmount }}
        <button class="menu-order-quantity__btn" @click="addToCart()">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ModalComponent from '@/components/ModalComponent.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getCartProducts']),
  },
  props: {
    product: {
      type: Object,
      require: true,
    },
  },
  components: { ModalComponent },
  data() {
    return {
      imageModalWin: false,
      isOrdering: false,
      productAmount: 0,
    }
  },
  methods: {
    ...mapActions(['addOrUpdateCart']),
    addToCart() {
      this.$store.dispatch('addOrUpdateCart', this.product)
      this.showOrderQuantity()
    },
    showOrderQuantity() {
      // Устанавливает состояние isOrdering и проверяет количество
      this.isOrdering = true
      const cartProduct = this.getCartProducts.find(
        (cartProduct) => cartProduct.id === this.product.id
      )
      if (cartProduct) {
        this.productAmount = cartProduct.quantity // Используем количество из свойства quantity
      } else {
        this.productAmount = 0 // Если продукт не найден
      }
    },
    minusOrDeleteCart() {
      this.$store.dispatch('minusorDeleteCart', this.product)
      this.showOrderQuantity()
    },
    resetOrderView() {
      // Возвращает к кнопке, если productAmount === 0
      if (this.productAmount === 0) {
        this.isOrdering = false
      }
    },
  },
}
</script>
