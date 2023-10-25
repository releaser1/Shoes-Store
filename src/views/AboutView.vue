<template>
  <div class="flex items-center space-x-4">
    <button
      class="p-2 border rounded-full hover:bg-gray-200"
      @click="moveLeft"
      :disabled="currentIndex === 0"
    >
      &lt;
    </button>

    <div v-for="(card, index) in displayedCards" :key="index" class="border p-4">
      <p>{{ card }}</p>
    </div>

    <button
      class="p-2 border rounded-full hover:bg-gray-200"
      @click="moveRight"
      :disabled="currentIndex + 4 >= cards.length"
    >
      &gt;
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6', 'Card 7'],
      currentIndex: 0,
    };
  },
  computed: {
    displayedCards() {
      return this.cards.slice(this.currentIndex, this.currentIndex + 4);
    },
  },
  methods: {
    moveLeft() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    moveRight() {
      if (this.currentIndex + 4 < this.cards.length) {
        this.currentIndex++;
      }
    },
  },
};
</script>

<style scoped>
/* Add Tailwind CSS classes or custom styles as needed */
</style>