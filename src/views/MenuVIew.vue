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
                  ></button>
                  <ul
                    class="dropdown-menu menu-order__region"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
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
import ModalComponent from '@/components/ModalComponent.vue';
export default {
  components: {
    GridComponent,
    ModalComponent,
  },
  data(){
    return{
      orderModalWin: false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>