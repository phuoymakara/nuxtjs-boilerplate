<script lang="ts" setup>
  //const isModal = ref(false);

</script>

<template>
  <Header/>
  <main class=" min-h-[100vh] text-white">
    <slot/>
  </main>
  <!-- <Modal v-model:isModal="isModal"/> -->
</template>