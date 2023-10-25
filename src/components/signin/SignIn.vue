<template>
  <div v-if="!$store.state.online" class="bg-example">
    <div>
      <h3 class="text-center text-2xl">Email is: <span class="text-3xl text-red-500 text-semibold">johndoe2002@yahoo.com</span> </h3>
      <h3 class="text-center text-2xl">Password is: <span class="text-3xl text-red-500 text-semibold">johndoe</span></h3>
    </div>
  </div>
    <div v-if="!$store.state.online" class="flex justify-center items-center min-h-screen bg-example">
      <div class="bg-white p-8 rounded-lg shadow-lg w-[90vw] md:w-[60vw] lg:w-[30vw] lg:h-[55vh]">
        <h1 class="text-2xl font-semibold mb-4">Sign In</h1>
        <div class=" border w-full">
          <div class="flex items-center p-2">
            <div class="w-6 h-6 bg-user bg-no-repeat p-4 ml-4"></div>
            <input
              v-model="email"
              type="email"
              id="email"
              name="email"
              class="w-full px-3 py-2  rounded-lg ml-2"
              placeholder="Your email"
            />
        </div>
    </div>
    
        <div class="mb-4 mt-4 border p-2 w-full">
          <div class="flex items-center">
              <div class="w-6 h-6 bg-lock bg-no-repeat p-4 ml-4 "></div>
            <input
              v-model="password"
              type="password"
              id="password"
              name="password"
              class="w-full px-3 py-2 rounded-lg ml-2"
              placeholder="Your password"
            />
          </div>
        </div>
        <small v-if="incorrectPasswordEmail" class="text-red-400 mb-4">Password or email is incorrect</small>
        <div class="mb-4">
        <label for="rememberMe" class="text-sm font-medium">
          <input
            v-model="rememberMe"
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            class="mr-2"
          />
          <span class="mb-4">Remember Me</span>
        </label>
      </div>
        <button
          @click="signIn"
          class="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Sign In
        </button>
      </div>
    </div>
    <div v-if="$store.state.online === true" class="bg-example h-[70vh] pt-10">
        <p class="text-3xl text-center">You've entered your account at MegaShoper, welcome to our Store!!!</p>        
        <div class="flex justify-center pt-10 font-bold">
          <RouterLink to="/log-in"><h3 class="border text-2xl p-3 rounded-lg cursor-pointer hover:bg-red-500 text-2xl">Profile Page </h3></RouterLink>
        </div>
        <div class="flex justify-center pt-10 font-semibold">
           <span @click="logOut" class="border text-2xl p-3 rounded-lg cursor-pointer hover:bg-red-500 text-2xl">Log Out</span>
         </div>
    </div>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';

  export default {
    data() {
        return {
            email: '',
            password: '',
            rememberMe: false,
            // signin: false,
            matchEverything: false,
            realPassword: 'johndoe',
            logout: false,
            incorrectPasswordEmail: false,
        };
    },
    mounted() {
    },
    methods: {
        signIn() {
            if (this.rememberMe) {
            }
            if (this.$store.state.userEmail.toLowerCase() === this.email.toLowerCase() && this.realPassword.toLowerCase() === this.password.toLowerCase()) {
                console.log(`password match and email match`);
                // this.signin = true;
                this.$store.commit('userIsOnline');
                this.matchEverything = true;
            }
            else {
                console.log('password or email do not match');
                this.incorrectPasswordEmail = true;
            }
            console.log('Sign In Clicked');
        },
        logOut() {
            this.$store.commit('userIsOfline');
            this.matchEverything = false;
            this.email = '';
            this.password = '';
            this.incorrectPasswordEmail = false;
        },
        setUserOnline() {
            this.$store.commit('userIsOnline');
        },
        setUserOfline() {
            this.$store.commit('userIsOfline');
        },
        // registerInLocalStorage() {
        //   localStorage.setItem('email', this.realEmail);
        //   localStorage.setItem('password', this.realPassword);
        // },
    },
    components: { RouterLink }
};
  </script>
