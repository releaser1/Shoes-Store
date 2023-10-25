<template>
    <div class="flex justify-center bg-example">
        <div class="flex items-center space-x-4 bg-example w-[90vw] md:w-[95vw] lg:w-[90vw] justify-center">
          <button
            class="p-1 rounded-full hover:bg-gray-200 text-4xl"
            @click="moveLeft"
            :disabled="currentIndex === 0"
          >
            &lt;
          </button>
      
          <div
            v-for="item in displayedCards"
            :key="item.id"
            class=" p-4   lg:w-full w-80 md:w-1/4 flex flex-col"
            :class="{ 'hidden md:block': item.id < 0 }"  
          >
            <img
              :src="item.image"
              alt="Card Image"
              class="w-80 md:w-48 h-64 md:h-48  lg:w-48 lg:h-56 flex self-center bg-white rounded-lg shadow-lg border border-gray-300"
            />
            <div class="flex justify-center">
              <div class="flex justify-center w-70 md:w-32 md:ml-2 lg:ml-0 lg:w-48 bg-[#f0ffff] bg-opacity-30 hover:bg-blue-500 text-1xl text-blue-700 font-semibold hover:text-white py-1 px-1 border-indigo-600  rounded-md transition duration-300 ease-in-out cursor-pointer mt-2 text-2xl">
                {{ item.name }}
              </div>
            </div>
          </div>
      
          <button
            class="p-1  rounded-full hover:bg-gray-200 text-4xl"
            @click="moveRight"
            :disabled="currentIndex + (isMobile ? 1 : 4) >= cards.length"
          >
            &gt;
          </button>
        </div>
    </div>
  </template>
  
  <script>
import {items} from '../components/data/ProductsDetails.js';
  export default {
    props: {
            items: Array,
        },
    data() {
      return {
        items,
        cards: [
          { image: 'https://media.istockphoto.com/id/1367293183/ro/fotografie/vechiul-port-marsilia-fran%C8%9Ba.jpg?s=612x612&w=0&k=20&c=EFIz-hrIEo5fa0fmLXrfpipyg6d1s-iEa2riLUv19fc=' },
          { image: 'https://www.datocms-assets.com/12893/1613494121-bondi-beach-4x5.jpg?auto=format' },
          { image: 'https://surfnsand.com.au/cdn/shop/products/Bondi_1200x1200.jpg?v=1583732492' },
          { image: 'https://waikikishoppingplaza.com/wp-content/uploads/2020/01/79268528_2222468847855536_7758859395541040967_n-min-1024x1018.jpg' },
          { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9Itj_DRKuqCXV56U2_SIr2cvCEG3lxQNFA&usqp=CAU' },
          { image: 'https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/1/lanikai-beach-1-oahu-hawaii-brian-harig.jpg' },
          { image: 'https://adventuresfortwodotcom.files.wordpress.com/2015/06/hawaii-lanikai-pin.jpg?w=736' },
        ],
        currentIndex: 0,
        isMobile: false,
      };
    },
    computed: {
      displayedCards() {
        return this.items.slice(this.currentIndex, this.currentIndex + (this.isMobile ? 1 : 4));
      },
    },
    methods: {
      moveLeft() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        }
      },
      moveRight() {
        if (this.currentIndex + (this.isMobile ? 1 : 4) < this.items.length) {
          this.currentIndex++;
        }
      },
    },
    mounted() {
      // Check if the screen is mobile-sized
      if (window.innerWidth <= 767) { // You can adjust this breakpoint as needed
        this.isMobile = true;
      }

  
      // Listen for window resize events to update the isMobile flag
      window.addEventListener('resize', () => {
        if (window.innerWidth <= 767) { // You can adjust this breakpoint as needed
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
      });

    },
  };
  </script>