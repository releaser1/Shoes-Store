<script>
import HomeHeadingText from '../components/HomeHeadingText.vue'
import HomeCards from '../components/HomeCards.vue'
import HomeQuote from '../components/HomeQuote.vue'
import Footer from '../components/Footer.vue'

  export default {
    components: {
            HomeHeadingText,
            HomeCards,
            HomeQuote,
            Footer,
        },
  }
</script>

<template>
  <main>
    <HomeHeadingText />
    <HomeQuote />
    <HomeCards />
    

  </main>
</template>
