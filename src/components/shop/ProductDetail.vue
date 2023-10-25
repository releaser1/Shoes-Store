<template>
<div class="bg-example p-12"> 
      <div class="flex flex-col md:flex-row md:justify-around md:h-[60vh] bg-example">
        <div class="w-full md:w-[48vw] bg-example flex justify-center rounded-md">
            <img :src="product.image" alt="1" class="w-[90vw] md:w-min">
        </div>
        <div class="w-full md:w-[42vw] flex lg:pl-10 lg:pt-6 flex flex-col leading-10">
          <h3 class="text-3xl mt-4 md:mt-0 md:mb-2 lg:mb-4 font-bold text-center lg:text-start">{{ product.name }}</h3>
          <h3 class="text-2xl lg:mb-4 font-semibold text-center lg:text-start">{{ product.price }} <span class="text-2xl font-bold">$</span> </h3>
          <div class="flex flex-row">
            <p class="w-full md:w-[30vw] text-1xl font-semibold text-end md:text-start">Code:</p>
            <p class="w-full md:w-[70vw] text-1xl font-bold ml-8 md:text-start md:ml-14 lg:ml-0">{{ product.code }}</p>
          </div>
          <div class="flex flex-row">
            <p class="w-full md:w-[30vw] text-1xl font-semibold text-end md:text-start">Weight:</p>
            <p class="w-full md:w-[70vw] text-1xl font-bold ml-8 md:text-start md:ml-14 lg:ml-0">{{ product.weight }} grams</p>
          </div>
          <div class="flex flex-row">
            <p class="w-full md:w-[30vw] text-1xl font-semibold text-end md:text-start">Class:</p>
            <p class="w-full md:w-[70vw] text-1xl font-bold ml-8 md:text-start md:ml-14 lg:ml-0">{{ product.class }}</p>
          </div>
          <div class="flex flex-row lg:mb-6">
            <p class="w-full md:w-[30vw] text-1xl font-semibold text-end md:text-start">Availability: </p>
            <p class="w-full md:w-[70vw] text-1xl font-bold md:ml-14 lg:ml-0 ml-8 md:text-start">{{ product.availability }}</p>
          </div>
  
          <div class="flex flex-row md:mt-2 lg:mt-6 lg:h-[6vh]" >
            <div class="w-[46vw] md:w-[30vw] flex md:items-center justify-end md:justify-start mt-4 mb-4 md:mt-0 md:mb-0">
              <div class="flex flex-row align-center ">
                <button 
                  class="mr-3 border-2 border-red-400 w-8 hover:bg-red-200" 
                  @click="decrementProductSelect"
                  >-</button>
                <h3 class="align-center text-center w-[3vw]">{{ product.productSelect }}</h3>
                <button 
                  class="ml-3 border-2 border-red-400 w-8 hover:bg-red-200 " 
                  @click="incrementProductSelect"
                  :disabled="product.availability === 0"
                  >+</button>
              </div>
            </div>
            <div class="flex justify-center md:justify-start lg:mr-16 w-[40vw] md:w-[70vw]">
              <button class="ml-12 text-2xl font-semibold border-2 pl-2 pr-2 rounded" ><RouterLink :class="linkClasses" to="/shop-cart">ShopCart</RouterLink></button>
            </div>
          </div>
        </div>
      </div>

</div>

  </template>
  
  <script>
  import { items } from '../data/ProductsDetails.js';
  
  export default {
    data() {
      return {
        selectedProducts: [],
        info: '',
      };
    },
    computed: {
      product() {
        const productId = this.$route.params.id;
        return this.$store.state.item.find(items => items.id === parseInt(productId));
      },
    },
    methods: {
      selectProduct() {
        this.selectedProducts.push(this.product.price);
      },
      calculateTotalPrice() {
        this.info = this.selectedProducts.reduce((acc, price) => acc + price, 0);
        return this.selectedProducts.reduce((acc, price) => acc + price, 0);
      },
      decrementProductSelect() {
        if (this.product.productSelect > 0) {
        this.product.productSelect--;
        this.product.availability++; // Always increase availability when decrementing
      }
    },

      incrementProductSelect() {
        if (this.product.availability > 0) {
        this.product.productSelect++;
        this.product.availability--;
      }
      },
    },
    mounted() {
      console.log(this.calculateTotalPrice());
      console.log(this.product.price * this.selectedProducts.length)
    },
  };
  </script>

