<template>
    <div class="bg-example">
        <h3 class="text-center pt-4  text-4xl font-acme text-lg text-5xl text-[#598488]">MegaShoper products</h3>
        <p class="text-center mb-14 text-3xl w-90vh">Our shop is here to provide you the best products on the market, enter our shop page to check our products.</p>
        <div class="w-64 mx-auto mb-8">
            <label for="input" class="block text-gray-700 font-bold text-lg mb-2 text-center">Search your product here:</label>
            <div class="relative">
                <input
                    type="text"
                    id="input"
                    v-model="textInput"
                    class="w-full py-2 pl-3 text-gray-700 bg-white border rounded-lg shadow-md focus:outline-none focus:ring focus:border-blue-500"
                    placeholder="Search Items..."
                />
            </div>
        </div>

        <div class="flex justify-center items-center w-90vh pb-6">
      <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 w-90vh">
        <div v-for="item in filterData" :key="item.id">
          <router-link :to="{ name: 'product-detail', params: { id: item.id } }">
            <div class="w-46  flex justify-center flex-col">
              <img
                :src="item.image"
                alt="Card Image"
                class="w-70 md:w-48 h-64 md:h-48 lg:w-48 lg:h-56 flex self-center bg-white rounded-lg shadow-lg border border-gray-300"
              />
              </div>
            </router-link> 
            <p class="text-center font-ubuntu font-bold text-2xl">{{ item.name }}</p> 
            <p class="text-center text-[#2F4F4F] font-black">{{ item.price }}<span class="text-[#2E8B57] font-black"> $</span></p>
            <p class="border border-2 rounded text-center text-red-700 font-ubuntu font-semibold text-1xl bg-transparent bg-[#C0C0C0] hover:bg-blue-500 hover:text-[white] cursor-pointer" @click="item.productSelect++">Add to Cart</p>
          </div>
        </div>
      </div>
    </div>


</template>


<script>

    export default {
        data () {
            return {
                // items,
                textInput: '',
                cart: [],                                 
            }
        },
        computed: {
            filterData() {
                return this.$store.state.item.filter((value) => {
                    return value.name.toLowerCase().includes(this.textInput.toLowerCase())
                });
            }
        },
    }
</script>