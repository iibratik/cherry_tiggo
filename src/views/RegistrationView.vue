<template>
  <section class="registration">
    <div class="registration-content container">
      <h2 class="reglog__title">CHERRY CAKE CAFE</h2>
      <span class="reglog__sub-title">Create an account</span>
      <form @submit.prevent="createNewUser" class="reglog__form">
        <!-- Full Name Field -->
        <div class="reglog__input">
          <v-text-field
            label="Full Name"
            v-model="username"
            :rules="[validateMandatory]"
          ></v-text-field>
        </div>

        <!-- Phone Number Field -->
        <div class="reglog__input">
          <v-text-field
            label="Phone Number"
            v-model="phoneNumber"
            autocomplete="tel"
            :rules="[validateMandatory, validateUzbekPhone]"
          ></v-text-field>
        </div>

        <!-- Password Field -->
        <div class="reglog__input password">
          <v-text-field
            label="Create password"
            v-model="password"
            autocomplete="new-password"
            :type="isHidePass ? 'password' : 'text'"
            :rules="[validateMandatory, validatePassword]"
          ></v-text-field>
          <button class="show-pass" type="button" @click="isHidePass = !isHidePass">
            <i :class="isHidePass ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"></i>
          </button>
        </div>

        <!-- Confirm Password Field -->
        <div class="reglog__input password">
          <v-text-field
            label="Confirm Password"
            v-model="confirmPass"
            :type="isHideConfPass ? 'password' : 'text'"
            :rules="[validateMandatory, validateConfirmPassword]"
          ></v-text-field>
          <button class="show-pass" type="button" @click="isHideConfPass = !isHideConfPass">
            <i :class="isHideConfPass ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"></i>
          </button>
        </div>

        <!-- Submit Button -->
        <WhiteBtn class="submit">
          <button type="submit" class="submit">Get Started</button>
        </WhiteBtn>
        <span> Already have an account? <router-link to="/login">Log in</router-link> </span>
      </form>
    </div>
  </section>
</template>

<script>
import WhiteBtn from '@/components/UI/WhiteBtn.vue'
import router from '@/router'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      username: null,
      phoneNumber: null,
      password: null,
      confirmPass: null,
      isHidePass: true,
      isHideConfPass: true,
    }
  },
  components: { WhiteBtn },
  methods: {
    ...mapActions(['sendNewUser']),
    validateMandatory(value) {
      return !!value || 'Error: This field is mandatory'
    },
    validateUzbekPhone(value) {
      const uzbekPhoneRegex = /^\+998\s?\d{2}\s?\d{3}\s?\d{4}$/
      return uzbekPhoneRegex.test(value) || 'Error: Invalid phone number. Format: +998 XX XXX XXXX'
    },
    validatePassword(value) {
      if (!/[A-Z]/.test(value)) {
        return 'Error: Password must contain at least one uppercase letter'
      }
      if (!/[!@#$%^&*(),.?:{}|<>]/.test(value)) {
        return 'Error: Password must contain at least one special character'
      }
      if (value.length < 8) {
        return 'Error: Minimum 8 characters required'
      }
      return true
    },
    validateConfirmPassword(value) {
      return value === this.password || 'Error: Passwords do not match'
    },
    async createNewUser() {
      const usernameError = this.validateMandatory(this.username)
      const phoneNumberError =
        this.validateMandatory(this.phoneNumber) || this.validateUzbekPhone(this.phoneNumber)
      const passwordError =
        this.validateMandatory(this.password) || this.validatePassword(this.password)
      const confirmPasswordError =
        this.validateMandatory(this.confirmPass) || this.validateConfirmPassword(this.confirmPass)
      const errors = [
        usernameError !== true ? usernameError : null,
        phoneNumberError !== true ? phoneNumberError : null,
        passwordError !== true ? passwordError : null,
        confirmPasswordError !== true ? confirmPasswordError : null,
      ].filter((error) => error !== null)
      if (errors.length > 0) {
        alert(errors.join('\n'))
        return
      }
      const newUser = {
        fullName: this.username,
        phone: this.phoneNumber,
        password: this.password,
      }
      try {
        this.sendNewUser(JSON.stringify(newUser))
        router.push({ path: '/' })
      } catch (error) {
        console.error('Error creating user:', error)
        alert('An error occurred while registering the user. Please try again.')
      }
    },
  },
}
</script>
