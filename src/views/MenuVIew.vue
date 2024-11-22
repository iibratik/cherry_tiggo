<template>
  <section class="menu">
    <h2 class="title">MENU</h2>
    <div class="menu-content container">
      <GridComponent />
      <button class="menu-btn submit-btn" @click="orderModalWin = !orderModalWin">Complete</button>
      <ModalComponent v-if="orderModalWin">
        <div class="menu-order__modal-win">
          <div class="menu-order-content">
            <form class="menu-order__form">
              <div class="menu-order__form-head">
                <button class="menu-order__close" @click="orderModalWin = !orderModalWin">
                  <img src="@/assets/img/Close_Button.svg" alt="close_button" />
                </button>
              </div>
              <div class="menu-order__dropdown">
                <label for="region" class="menu-order__label">pLEASE CHOOSE YOUR REGION:</label>
                <div class="dropdown">
                  <button
                    class="btn dropdown-toggle menu-order__input"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {{ currentRegion }}
                  </button>
                  <ul
                    class="dropdown-menu menu-order__regions"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li
                      v-for="region in getRegions"
                      :key="region.id"
                      @click="currentRegion = region.name"
                    >
                      <a class="dropdown-item menu-order__region">{{ region.name }}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="menu-order__date">
                <label class="menu-order__label">Choose date of order:</label>
                <v-date-picker color="#d5621d">
                  <template v-slot:prev-icon>
                    <v-icon icon="mdi-chevron-left" color="green-darken-2"></v-icon>
                  </template>
                  <template v-slot:next-icon>
                    <v-icon icon="mdi-chevron-right"></v-icon>
                  </template>
                </v-date-picker>
              </div>
              <div class="menu-order__total-price">
                <h3 class="total-price__title">ORDER PRICE</h3>
                <div class="total-price__price-desc">
                  <span class="price-title">price: <span>15$</span></span>
                  <span class="price-title">Discount: <span>-2$</span></span>
                  <span class="price-title">Tax: <span>1.5$</span></span>
                </div>
                <span class="price-title">total</span>
              </div>
            </form>
          </div>
        </div>
      </ModalComponent>
    </div>
  </section>
</template>

<script>
import GridComponent from '@/components/Menu/GridComponent.vue'
import ModalComponent from '@/components/ModalComponent.vue'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getRegions']),
  },
  components: {
    GridComponent,
    ModalComponent,
  },
  data() {
    return {
      orderModalWin: false,
      currentRegion: '',
      date: new Date(),
      locale: 'en',
    }
  },
}
</script>

<style lang="scss" scoped>
</style>