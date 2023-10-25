<template>
  <header>
    <!-- Desktop Navigation -->
    <nav class="hidden md:flex justify-around p-4 text-center w-full bg-example">
      <div class="flex w-1/6 justify-center items-center">
        <h3>MegaShoper</h3>
      </div>
      <div class="flex justify-end space-between w-4/5">
        <RouterLink :class="linkClasses" to="/" class="mt-1">Home</RouterLink>
        <RouterLink :class="linkClasses" to="/sign-in" class="mt-1">Sign In</RouterLink>
        <RouterLink :class="linkClasses" to="/contact" class="mt-1">Contact</RouterLink>
        <RouterLink :class="linkClasses" to="/shop" class="mt-1">Shop</RouterLink>
        <RouterLink :class="linkClasses" to="/log-in" class="flex">
          <img v-if="$store.state.online"  src="../src/images/onlineUser.svg" alt="instagram" class="w-[10vw] md:w-[5vw] lg:w-[2vw]">
          <img v-if="!$store.state.online"  src="../src/images/oflineUser.svg" alt="instagram" class="w-[10vw] md:w-[5vw] lg:w-[2vw]">
        </RouterLink>
        <RouterLink :class="linkClasses" to="/shop-cart" class="flex">
          <img src="../src/images/shop.svg" alt="instagram" class="w-[10vw] md:w-[5vw] lg:w-[2vw] ">
          <span class="lg:-translate-y-2 text-rose-700">{{ selectedProductsCount }}</span>
        </RouterLink>
      </div>
    </nav>
    
    
    
    
    <!-- Mobile Navigation (Burger Menu) -->
    <div class="md:hidden flex justify-between p-4 bg-example">
      <div>
        <h3>MegaShoper</h3>
      </div>
      <button @click="toggleMobileMenu" class="text-xl">&#9776;</button> <!-- &#9776; is the hamburger icon -->
    </div>
    <div v-show="mobileMenuOpen" class="md:hidden bg-example">
      <div class="flex flex-col items-center">
        <RouterLink :class="linkClasses" to="/">Home</RouterLink>
        <RouterLink :class="linkClasses" to="/about">About</RouterLink>
        <RouterLink :class="linkClasses" to="/about">Contact</RouterLink>
        <RouterLink :class="linkClasses" to="/shop">Shop</RouterLink>
        <RouterLink :class="linkClasses" to="/log-in" class="flex">
          <img v-if="$store.state.online === false"  src="../src/images/oflineUser.svg" alt="instagram" class="w-[10vw] md:w-[5vw] lg:w-[2vw]">
          <img v-if="$store.state.online === true"  src="../src/images/onlineUser.svg" alt="instagram" class="w-[10vw] md:w-[5vw] lg:w-[2vw]">
        </RouterLink>
        <RouterLink :class="linkClasses" to="/shop-cart">
          <img src="../src/images/shop.svg" alt="instagram" class="w-[10vw] md:w-[15vw]  lg:w-[2vw]">
          <span class="ml-5 text-rose-700"> {{ selectedProductsCount }} </span>
        </RouterLink>
      </div>
    </div>
    <RouterView/>
    <Footer/>
    
  </header>
</template>

<script>

import Footer from '../src/components/Footer.vue'
import { mapActions, mapGetters } from 'vuex';
export default {
  
  components: {
        Footer,
  },
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    setUserOnline() {
      this.$store.commit('userIsOnline');
    }
  },
  computed: {
    ...mapGetters(['selectedProductsCount']),
    linkClasses() {
      const classes = [
        'pt-2',
        'pb-2',
        'pr-4',
        'pl-4',
        'rounded-lg',
        'mr-4',
        'text-base',
        'mb-2',
        'hover:underline',
        'font-semibold',
      ];

      return classes.join(' ');
    },
    
  },
};
</script>

