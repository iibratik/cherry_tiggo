<template>
  <section class="login">
    <div class="login-content">
      <h2 class="reglog__title">CHERRY CAKE CAFE</h2>
      <span class="reglog__sub-title">Log in to your account</span>
      <form @submit.prevent class="reglog__form">
        <span>Welcome back! Please enter your details.</span>
        <div class="reglog__input"></div>
        <div class="reglog__input">
          <v-text-field
            label="Phone Number"
            v-model="phoneNumber"
            autocomplete="tel"
            :rules="[
              (v) => !!v || 'Error: This field is mandatory',
              (v) =>
                /^(\+?\d{1,4}[\s\-]?)?(\(?\d{3}\)?[\s\-]?)?[\d\s\-]{7,15}$/.test(v) ||
                'Error: Invalid phone number Format: 998112223344',
            ]"
          ></v-text-field>
        </div>
        <div class="reglog__input password">
          <v-text-field
            label="Password"
            v-model="password"
            autocomplete="new-password"
            :type="isHidePass ? 'password' : 'text'"
            :rules="[
              (v) => !!v || 'Error: This field is mandatory',
              (v) => v.length >= 8 || 'Error: Minimum 8 characters required',
              (v) =>
                /[A-Z]/.test(v) || 'Error: Password must contain at least one uppercase letter',
              (v) => /\d/.test(v) || 'Error: Password must contain at least one number',
              (v) =>
                /[!@#$%^&*(),.?:{}|<>]/.test(v) ||
                'Error: Password must contain at least one special character',
            ]"
          ></v-text-field>
          <button class="show-pass" @click="isHidePass = !isHidePass">
            <i :class="isHidePass ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"></i>
          </button>
        </div>
        <WhiteBtn class="submit"
          ><button type="submit" class="submit">Continue Your Journey !</button></WhiteBtn
        >
      </form>
    </div>
  </section>
</template>

<script>
import WhiteBtn from '@/components/UI/WhiteBtn.vue'
export default {
  components: {
    WhiteBtn,
  },
  data(){
    return{
        phoneNumber:null,
        password:null,
        isHidePass: true,
    }
  }
}
</script>
