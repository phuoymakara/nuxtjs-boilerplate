
<script setup lang="ts">
  import { useAuthStore } from '~/stores'
  import { ref } from "vue";
  const { locale, setLocale } = useI18n();
  const useAuth = useAuthStore()
  const isLogout = ref(false);
  const isModal = ref(false)

  const handleToggleLogout = () =>{
    if(isLogout.value === false){
      isLogout.value = true
    }else{
      isLogout.value = false
    }
  }
  const handleSave = () =>{
    console.log('SAVE')
    useAuth.logout()
    isModal.value = false;
  }
  const handleClose = () =>{
    isLogout.value = false
    if(isModal.value===false){
      isModal.value = true
    }else{
      isModal.value = false
    }
  }
</script>

<template>
  <header class="bg-slate-100 flex justify-end py-4 px-8 gap-x-4 border-b border-gray-200">
    <button  type="button" class="flex gap-x-2 border border-gray-500 px-3 py-1 rounded-md" @click="setLocale(locale === 'en' ? 'km' : 'en')">
      <img v-if="locale==='en'" src="https://cdn-icons-png.flaticon.com/512/14009/14009894.png" width="28" height="20" alt="kh-flag"> 
      <img v-else src="https://cdn-icons-png.flaticon.com/512/330/330425.png" width="28" height="20" alt="kh-flag">
      
      {{ locale === "en" ? "ភាសាខ្មែរ" : "English" }}
    </button>
    <div v-if="useAuth.isAuthenticated" class="relative inline-block text-left">
      <div>
        <button 
        @click="handleToggleLogout"
        type="button" 
        class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
          {{ $t('account.accountname') }}
          <svg class="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <div v-if="isLogout" >
        <LogoutButton @logout="handleClose"/>
      </div>
    </div>
  </header>
  <Modal 
    v-model:isModal="isModal"
    @close="handleClose"
    @save="handleSave"
  />
</template>