<template>
        <div class="w-full p-8 flex flex-col justify-center border border-green-950 rounded-3xl lg:h-[513px]">
        <h3 class="text-3xl">Account History</h3>
        <div class="mt-8 flex  flex-row">
            <h3 class="mt-4 w-[25vw] lg:w-[10vw] font-bold">Items Purchased:</h3>
            <input type="text" :placeholder="$store.state.purchasedItems.length" :disabled="true" class="truncate mt-4 pl-4 bg-inherit placeholder-red-400 font-semibold">
        </div>
        <div class="mt-8 border-t-2 border-slate-400 flex flex-row"> 
            <h3 class="mt-4 w-[25vw]  lg:w-[10vw] font-bold">Messages sent:</h3>
            <input type="text" :placeholder="$store.state.contactSend.length" class="truncate mt-4 placeholder-red-400 font-semibold pl-4 bg-inherit ">
        </div>

    </div>
</template> 

<script>

</script>