<script lang="ts" setup>
  const modalEmits = defineEmits(['logout'])
</script>

<template>
  <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
  <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      <!-- Active: "bg-gray-100 text-gray-900 outline-hidden", Not Active: "text-gray-700" -->
      <button class="block w-full text-left hover:bg-slate-100 px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0"> {{ $t('account.settings') }} </button>
      <button class="block w-full text-left hover:bg-slate-100 px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0"> {{ $t('account.support') }} </button>
      <button class="block w-full text-left hover:bg-slate-100 px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0"> {{ $t('account.license') }} </button>
      <button @click="modalEmits('logout')" class="block w-full text-left hover:bg-slate-100 px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0"> {{ $t('account.signout') }} </button>

      <form method="POST" action="#" role="none" class="hidden">
        <button type="submit" class="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
      </form>
    </div>
  </div>
</template>