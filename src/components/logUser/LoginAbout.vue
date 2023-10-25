<template>
    <div class="w-full p-8  flex flex-col justify-center border border-green-950 rounded-3xl lg:h-[513px]">
        <h3 class="text-center text-3xl text-red-500 font-semibold">Welcome <span class="text-xl lg:text-3xl text-green-600 lg:font-bold">{{ $store.state.userEmail }}</span> </h3>
        <h3 class="text-3xl mt-8">About</h3>
        <div class="mt-8 flex  flex-row">
            <h3 class="mt-4 w-[25vw] lg:w-[10vw] font-bold">Email:</h3>
            <input type="text" placeholder="John Doe" class="truncate mt-4 pl-4 bg-inherit placeholder-red-400 font-semibold">
        </div>
        <div class="mt-8 border-t-2 border-slate-400 flex flex-row"> 
            <h3 class="mt-4 w-[25vw] lg:w-[10vw] font-bold">Password:</h3>
            <input type="text" placeholder="johndoe" class="truncate mt-4 placeholder-red-400 font-semibold pl-4 bg-inherit ">
        </div>
        <div class="mt-8 border-t-2 border-slate-400 flex flex-row">
            <h3 class="mt-4 w-[25vw] lg:w-[10vw] font-bold">Gender:</h3>
            <select v-model="$store.state.selectedGender" class="truncate mt-4 w-48 lg:w-32 h-10 pl-4 bg-inherit placeholder-red-400 font-semibold">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
        <div class="mt-4 border-t-2 border-slate-400 flex flex-row">
            <h3 class="mt-4 w-[25vw] lg:w-[28vw] font-bold">About Me:</h3>
            <p class="pl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi adipisci perferendis officia labore quasi nobis modi, enim porro neque dolore saepe voluptatem omnis corrupti nemo facere architecto eos maxime.</p>
        </div>
    </div>
</template> 

<script>
    export default {
        data() {
            return {
            
        };
    },
    }
</script>