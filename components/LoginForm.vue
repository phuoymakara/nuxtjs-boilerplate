<script setup lang="ts">
  import { ref } from 'vue';

  const emit = defineEmits(['emitLogin']);

  const username = ref('mark');
  const password = ref('123');

  // Handle form submission
  const handleSubmit = () => {
    emit('emitLogin', { username: username.value, password: password.value });
  };
</script>

<template>
<div class="w-full flex justify-center p-16">
    <form @submit.prevent="handleSubmit" class="w-full max-w-md border p-8 rounded-lg grid grid-cols-1 gap-y-6">
    <div>
      <div class="w-full">
        <label class=" text-gray-500 font-medium uppercase text-sm/10 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          {{ $t('fullname') }}
        </label>
      </div>
      <div class="w-full">
        <input 
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
        id="inline-full-name"
        v-model="username"
        type="text" >
      </div>
    </div>
    <div>
      <div class="w-full">
        <label class=" text-gray-500 font-medium uppercase text-sm/10 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          {{ $t('password') }}
        </label>
      </div>
      <div class="w-full">
        <input
        v-model="password" 
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
        id="inline-password" 
        type="password" 
        defaultValue="123"
        placeholder="******************">
      </div>
    </div>
      <div class="w-full mb-6">
        <div class="md:w-1/3"></div>
        <label class="md:w-2/3 block text-gray-500 font-bold">
          <input class="mr-2 leading-tight" type="checkbox">
          <span class="text-sm">
            {{ $t('newsletter') }}
          </span>
        </label>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
            {{ $t('signup') }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>