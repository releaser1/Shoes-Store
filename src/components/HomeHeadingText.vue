<template>
    <div class="w-[100vw] md:w-[100vw] xl:w-[98.9vw] lg:h-[60vh] bg-example flex justify-center pt-4">
      <div class="flex w-[100vw] md:w-[100vw] lg:w-[90vw] flex-col md:flex-col lg:flex-row md:justify-center ">
        <div class="w-full">
          <h2 class="font-ubuntu mt-8 text-3xl md:text-6xl ml-12 md:text-start md:text-right -translate-x-2">MegaShoper Is Your</h2>
          <p class="ml-10 mt-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit culpa minus hic dolore voluptate eaque id iure animi minima fugit.</p>
          <p class="ml-10 mt-4 lg:hidden">Our shop is here to provide you the best products on the market, enter our shop page to check our products.</p>
          <div class="flex mb-4 md:mt-2">
            <RouterLink to="/shop" >
              <button class="bg-[#f0ffff] bg-opacity-30 hover:bg-blue-500 text-3xl text-blue-700 font-semibold hover:text-white py-2 px-4 border-double border-indigo-600 border-1 rounded-md transition duration-300 ease-in-out ml-10 mt-10 md:mt-4 ">
                Get Best Offer
              </button>
            </RouterLink>
          </div>
        </div>
        <div class="w-full h-full relative ">
          <!-- <h2 class=" inline-block font-ubuntu absolute top-0 left-0  text-[#DC143C] text-3xl  md:text-6xl flex mt-8 ml-12 text-purple-950 sm:text-center">Personal Shop Store</h2> -->
          <img src="https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1918&q=80" alt="Your Image" class="w-full h-full object-cover rounded-lg">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>

  
  
  
  
  
  