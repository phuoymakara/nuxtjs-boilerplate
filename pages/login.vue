<script setup lang="ts">
  import { useAuthStore, useUserStore } from '~/stores'
  import LoginForm from '~/components/LoginForm.vue';
  import type { user } from '~/types/user';

  const router = useRouter()
  const useAuth = useAuthStore()
  const useUser = useUserStore()

  const handleLogin = (data:user) =>{
    useAuth.login(data)
    if(useAuth.isAuthenticated){
      router.push({ path: "/" })
    }
  }
</script>

<template>
  <LoginForm @emitLogin="handleLogin"/>
</template>