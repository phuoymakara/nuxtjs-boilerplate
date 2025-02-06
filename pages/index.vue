<script setup lang="ts">
  import { ref, watchEffect } from 'vue'
  const { $api } = useNuxtApp()
  const counter = useCounterStore()
  const users = ref()
  const { data, status } = useAsyncData('users', () => $api.user.get());
  definePageMeta({
    middleware: ['auth'],
  })
  watchEffect(()=>{
    if(data.value){
      //@ts-ignore
      users.value = data.value.users
    }
  })
  //useUser.getAllUsers()
  
  //console.log(`SSR-> ${users} `)

</script> 

<template>
  <div class="bg-[#000000d3] min-h-[100vh]">
    <h1 class="text-center p-6">{{ $t('home') }} 🍍 </h1>
    <h2 class="mt-4 text-center font-medium text-[28px]  text-opacity-100">{{$t("title")}}</h2>
    <h1 class="text-center mt-4 text-[20px]">{{ counter.count }}</h1>

    <div class="w-full flex justify-center my-6">
      <button class="bg-transparent hover:bg-blue-500 font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="counter.increment">{{ $t('increment') }}</button>
    </div>
    <div class="w-full flex justify-center my-6">
      <button class="bg-transparent hover:bg-blue-500 font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="counter.decrement">{{ $t('decrement') }}</button>
    </div>

    <ClientOnly> 
      <div v-if="status==='pending'" class="grid min-h-[100px] place-items-center rounded-lg p-6 lg:overflow-visible">
        <svg class="text-white animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
          width="26" height="26">
          <path
            d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
            stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path
            d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
            stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-900">
          </path>
        </svg>
      </div>
      <div v-if="users && status==='success'" class="text-white p-4">
        <ul class="list-none grid md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-8 grid-cols-4 gap-6">
          <li v-for="user in users" key="user.id">
            <img class="w-full object-cover border-[1px]" :src="user.image" alt="user.firstName">
            <h6 class="text-center">{{ user.username }} </h6>
          </li>
        </ul>
      </div>
    </ClientOnly>
  </div>

</template>