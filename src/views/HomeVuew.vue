<template>
  <section class="header-section">
    <div class="header-section-content container">
      <img src="@/assets/img/cherry_cake_cafe.jpg" alt="main poster with cakes" />
      <div class="header-section-text">
        <h1 class="header-section__title">CHERRY CAKE CAFE</h1>
        <span class="header-section__sub-title">Ready to order?</span>
      </div>
    </div>
  </section>
  <top-products-component-vue />
  <section class="about-us">
    <h1 class="about-us__title title">About US</h1>
    <div class="about-us-content container">
      <div class="about-us__left col-5">
        <p class="about-us__text">
          At Cherry Cake Cafe, we’re passionate about baking and creating delicious treats that
          bring joy to our customers. Our journey began in 2020 with a simple dream: to share our
          love for baking with the community. We’re committed to using only the finest ingredients
          to create cakes, pastries, and other delectable treats. Each item is handcrafted with care
          and attention to detail. Our team of skilled bakers and baristas is dedicated to providing
          exceptional service and ensuring a memorable experience for every customer.
        </p>
        <div class="about-us__social">
          <span class="social__title">Social media links :</span>
          <div class="social-platform">
            <img src="@/assets/img/Twitter.svg" alt="Twitter logo" />
            <span>@cherrycakecafe</span>
          </div>
          <div class="social-platform">
            <img src="@/assets/img/Instagram.svg" alt="Instagram logo" />
            <span>@cherrycakecafe</span>
          </div>
        </div>
      </div>
      <div class="about-us__right col-5">
        <img src="@/assets/img/about-us.png" alt="about us photo" />
      </div>
    </div>
  </section>
  <section class="contacts">
    <h1 class="contacts__title title">Contacts</h1>
    <div class="contacts-content container">
      <div class="contacts-content__left">
        <div class="contact-adress">
          <h3 class="sub__title">ADDRESS</h3>
          <p class="contact-sub-title">
            Набережная реки Фонтанки, <br />
            90 (вход в арке с белыми колоннами)
          </p>
        </div>
      </div>
      <div class="contacts-content__right">
        <iframe
          class="contacts-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d891.0363322024637!2d69.29214324996796!3d41.307187829984855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef57a3c146bbd%3A0xe9e97d7df649b5fb!2sDivan%20restaurant!5e0!3m2!1sru!2s!4v1731934902353!5m2!1sru!2s"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
import TopProductsComponentVue from '@/components/TopProductsComponent.vue'
export default {
  components: {
    TopProductsComponentVue,
  },
}
</script>

