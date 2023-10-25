<template>
    <div v-if="$store.state.online" class="bg-example flex flex-col lg:flex-row justify-center p-10">
        <div class="w-full lg:w-[30vw] border border-green-950 rounded-3xl mr-16 flex flex-col rounded-lg ">
            <div class="w-full flex justify-center p-8 ">
                <div v-if="$store.state.selectedGender === 'male'" class="bg-userMale w-48 h-48 ">                    
                </div>
                <div v-if="$store.state.selectedGender === 'female'" class="bg-userFemale w-48 h-48 ">                    
                </div>
                <div v-if="$store.state.selectedGender === ''" class="bg-user w-48 h-48 ">                    
                </div>
            </div>
                
            <div 
                @click="about = true"
                class="flex justify-center text-2xl hover:text-white font-semibold pt-4 pb-4 cursor-pointer hover:bg-blue-400 hover:rounded-lg">
                About
            </div>
            <div 
                @click="accountSettings = true"
                class="flex justify-center text-2xl hover:text-white font-semibold pt-4 pb-4 cursor-pointer hover:bg-blue-400 hover:rounded-lg">
                Account Settings
            </div>
            <div
                @click="accountHistory = true" 
                class="flex justify-center text-2xl hover:text-white font-semibold pt-4 pb-4 cursor-pointer hover:bg-blue-400 hover:rounded-lg">
                Account History
            </div>
            <div 
                @click="$store.state.online = false"
                class=" flex justify-center text-2xl text-red-700 font-bold font-700 pt-4 pb-4 cursor-pointer hover:bg-blue-400 hover:rounded-t-lg hover:rounded-b-3xl">
                SignOut
            </div>
        </div>
        <div class="w-full lg:w-[50vw] mt-6 lg:mt-0 lg:ml-16">
            <div v-if="about" >
                <LoginAbout />
            </div>
            <div v-if="accountSettings">
                <LoginSettings />
            </div>
            <div v-if="accountHistory">
                <LoginAccountHistory />
            </div>
        </div>  
    </div>
    
    <div v-if="!$store.state.online" class="bg-example cart-container">
        <h3 class="text-center pt-14 text-3xl text-red-600 font-bold">You are logged off</h3>
        <h3 class="text-center pt-14 text-3xl text-green-600 font-bold">Please log in here:</h3>
        <div class="flex justify-center pt-10 font-bold">
          <RouterLink to="/sign-in"><h3 class="border text-2xl p-3 rounded-lg cursor-pointer hover:bg-red-500 text-2xl">Sign In</h3></RouterLink>
        </div>
    </div>
</template>

<script>
import LoginAbout from './LoginAbout.vue'
import LoginSettings from './LoginSettings.vue'
import LoginAccountHistory from './LoginAccountHistory.vue'


    export default {
        components: {
            LoginAbout,
            LoginSettings,
            LoginAccountHistory,
        },
        data () {
            return {
                about: true,
                accountSettings: false,
                accountHistory: false,
            }
        },
        watch: {
            accountHistory(newItem) {
                if(newItem) {
                    this.about = false
                    this.accountSettings = false
                }
            },
            about(newItem) {
                if(newItem) {
                    this.accountHistory = false
                    this.accountSettings = false
                }
            },
            accountSettings(newItem) {
                if(newItem) {
                    this.about = false
                    this.accountHistory = false
                }
            }
        },
    }
</script>

<style scoped>
.cart-container {
  min-height: calc(100vh - 200px); 
}
</style>