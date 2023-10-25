<template>
    <div class="flex justify-center bg-example cart-container">
      <div class="w-[100vw] lg:w-[80vw] flex flex-col">
        <div v-if="total === 0" class="">
          <h2 class="text-6xl text-center pt-12 h-[70vh]">The cart is empty</h2>
        </div>
        <div v-for="item in filteredItems" :key="item.id" class="mt-6 border-2 flex flex-col md:flex-row justify-between">
          <div class="w-full md:w-[25vh] flex justify-center md:justify-end md:items-center">
            <p class="text-3xl font-bold">{{ item.name }}</p>
          </div>
          <div class=" md:w-40 lg:w-20 flex justify-center md:justify-start">
            <img
              :src="item.image"
              alt="Card Image"
              class="w-80 md:w-48 h-64 md:h-48 lg:w-20 lg:h-24 flex self-center bg-white rounded-lg shadow-lg border border-gray-300"
            />
          </div>
          <div class="flex md:items-center justify-center mt-4 mb-4 md:mt-0 md:mb-0">
            <div class="flex flex-row align-center">
              <button class="mr-3 border-2 border-red-400 w-8 hover:bg-red-400" @click="decrementProductSelect(item)">-</button>
              <h3 class="align-center text-center w-[3vw]">{{ item.productSelect }}</h3>
              <button class="ml-3 border-2 border-red-400 w-8 hover:bg-red-400" @click="incrementProductSelect(item)">+</button>
            </div>
          </div>
          <div class="flex items-center w-[100vw] md:w-[20vw]">
            <h3 class="w-[100vw] text-center text-2xl">Total price for this product is <span class="text-2xl font-bold">{{ item.price * item.productSelect }} $</span></h3>
          </div>
          <button @click="deleteItem(item)" class="mr-10 text-2xl items-center ml-8">x</button>
        </div>
        <h4 v-if="total !== 0" class="text-center text-2xl mt-6">Total: <span class="text-2xl font-bold">{{ total }} $</span> <img src="@/images/money.svg" alt="moeny" class="w-[3vw] h-[3vh] inline"> </h4>
        <div v-if="total !== 0" class="flex justify-center">
          <button class="text-center text-4xl font-semibold mt-10 mb-10 p-4 hover:bg-green-300 hover:text-slate-950 text-green-500 border-2 border-green-300" @click="purchased">Buy now</button>
        </div> 
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        total: 0,
      };
    },
    computed: {
      filteredItems() {
        return this.$store.state.item.filter((item) => item.productSelect > 0);
      },
    },
    watch: {
      filteredItems: {
        handler: "calculateTotal",
        deep: true,
      },
    },
    mounted() {
      this.calculateTotal();
      
    },
    methods: {
      decrementProductSelect(item) {
        if (item.productSelect > 0) {
            item.productSelect--;
            item.product.availability++; 
        }
        if(item.availability === 0) {
            alert(`there is no more stock available for product: ${item.name}`)
        }
      },
      incrementProductSelect(item) {
        if (item.availability > 0) {
            item.productSelect++;
            item.availability--;
        }
        if(item.availability === 0) {
            alert(`there is no more stock available for product: ${item.name}`)
        }
      },
      deleteItem(item) {
         item.productSelect = 0;
      },
      calculateTotal() {
         this.total = this.filteredItems.reduce((acc, item) => acc + item.price * item.productSelect, 0);
      },
      purchased() {
        // Add the selected items to the purchasedItems array
        this.$store.state.purchasedItems.push(...this.filteredItems);

        // Remove the selected items from the cart
        this.filteredItems.forEach((item) => {
        item.productSelect = 0;
        });

        // Recalculate the total
        this.calculateTotal();
      }
    },
  };
  </script>

<style scoped>
.cart-container {
  min-height: calc(100vh - 100px); 
}
</style>