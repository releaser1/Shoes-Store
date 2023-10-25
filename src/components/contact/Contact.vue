<template>
    <div>
      <div class="w-full bg-example">
        <div v-if="!newPage" class="w-full flex flex-col justify-center bg-exam">
          <h3 class="font-bold text-2xl text-center md:mb-6">Get in Touch</h3>
          <form class="flex flex-col items-center">
            <div class="flex flex-col sm:flex-row align-center w-full md:w-3/5">
              <div class="mb-8 w-full md:w-1/2">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name*</label>
                <input required v-model="name" name="name" type="text" placeholder="Enter Your Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <small class="text-red-500 font-semibold">{{ nameError }}</small>
                
              </div>
              <div class="mb-8 w-full md:w-1/2 md:ml-4">
                <label for="phone_number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                <input v-model="phone"  type="text" id="phone_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone number"/>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row align-center w-full md:w-3/5">
              <div class="mb-8 w-full md:w-1/2">
                <label for="house_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">House Name or Number</label>
                <input type="text" id="house_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="House Name"/>
              </div>
              <div class="mb-8 w-full md:w-1/2 md:ml-4">
                <label for="postcode" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postcode</label>
                <input type="text" id="postcode" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="PostCode"/>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row align-center w-full md:w-3/5">
              <div class="mb-8 w-full md:w-1/2">
                <label for="email_address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address*</label>
                <input v-model="email" name="email" type="text" placeholder="Enter Your Email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <small class="text-red-500 font-semibold">{{ emailError }}</small>
              </div>
              <div class="mb-8 w-full md:w-1/2 md:ml-4">
                <label for="home_phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                <input type="text" id="home_phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="USA"/>
              </div>
            </div>
            <div class="flex w-full justify-center">
              <div class="w-full md:w-3/5">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message*</label>
                <textarea v-model="message"  name="message" id="message" :maxlength="200" placeholder="Message" class="resize border rounded w-full"></textarea>
                <small class="text-red-500 font-semibold">{{ messageError }}</small>
              </div>
            </div>
            <div class="flex justify-center w-full md:w-3/5 mt-6 mb-6">
              <button class="rounded hover:bg-red-300 text-2xl p-2 cursor-pointer font-semibold" type="submit" @click="newPage = true" :disabled="!formValid">Submit</button>
            </div>
          </form>
        </div>
        <div v-if="newPage" class="h-72">
            <p class="text-4xl text-center pt-10">Thank you for contacting us, we will reach back to you in a short time.</p>
        </div>

        <div class="w-full flex flex-col justify-center bg-gray">
          <h2 class="font-bold ml-6 mb-6 text-2xl text-center">Contact Details:</h2>
          <div class="flex flex-col items-center">
            <div>
              <div class="flex flex-row">
                <div class="bg-location w-8 mr-3 md:mr-3   md:w-6 bg-no-repeat"></div>
                <h3 class="flex items-centerml-3 font-semibold">Civic Theatre Building 15 N Charles Dr., Suite 1500 Charlestone, SC 68776</h3>
              </div>
              <div class="flex flex-row">
                <div class="bg-phone w-6 bg-no-repeat"></div>
                <h3 class="flex items-center ml-3 font-semibold">0121 232 4900</h3>
              </div>
              <div class="flex flex-row">
                <div class="bg-email w-6 bg-no-repeat"></div>
                <h3 class="flex items-center ml-3 font-semibold">mega.shoper9199@gmail.com</h3>
              </div>
              <div class="flex flex-row">
                <div class="flex flex-row mb-6 font-semibold">
                  <div class="bg-workhours w-6 h-6 bg-no-repeat"></div>
                  <div class="ml-3">
                    <h4>Monday to Friday: 9am - 7pm</h4>
                    <h4>Saturday: 9am - 2pm</h4>
                    <h4>Sunday : By Appointment Only</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        nameError: null,
        emailError: null,
        phone: '',
        message: '',
        messageError: null,
        example: '',
        exampleError: null,
        formValid: false,
        submitValue: false,
        newPage: false,
      };
    },
    mounted () {
      
    },
    methods: {
      nameHandler(event) {
        this.name = event.target.value;
      },
      checkName() {
        if (this.name.length < 3) {
          this.nameError = 'the name should contain more than 3 letters';
        }
        if(this.name.length > 3) {
          this.nameError = null
        } 
        if (this.name.length > 20) {
          this.nameError = 'the name should contain maximum 20 letters'; // Set an error message if the email is invalid
        }
      },
      checkEmail() {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!re.test(String(this.email).toLocaleLowerCase())) {
          this.emailError = 'Uncorrect form of email'
        } else {
          this.emailError = null
        }
      },
      checkMessage() {
        if (this.message.length < 5) {
          this.messageError = 'this field should contain more than 5 letters';
        }
        if(this.message.length > 5) {
          this.messageError = null
        } 
        if (this.message.length > 200) {
          this.messageError = 'this field should contain maximum 200 letters'; 
        }
      },

      submitFunction() {

        if (
            this.nameError === null && 
            this.name !== '' &&
            this.emailError === null &&
            this.email !== '' &&
            this.messageError === null &&
            this.message !== ''
            ) {
            this.formValid = true;
          } else {
            this.formValid = false
          }
      }
    },
    computed: {

    },
    watch: {
      name(item) {
        console.log('name changed to', item);
        this.checkName()
        this.submitFunction()
      },
      email() {
        this.checkEmail()
        this.submitFunction()

      },
      message() {
        this.checkMessage()
        this.submitFunction()

      },
      formValid(item, newItem) {
        console.log(item, newItem)
      },
      newPage(newValue) {
      if (newValue) {
        // Access the Vuex store and push data to contactSend
        this.$store.commit('updateContactSend', this.name);
      }
    },
  },
  };
  </script>