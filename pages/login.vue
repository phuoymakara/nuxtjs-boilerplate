<script setup lang="ts">
  import { useAuthStore, useUserStore } from '~/stores'
  import LoginForm from '~/components/LoginForm.vue';
  import type { user } from '~/types/user';
  const { locale } = useI18n();

  const router = useRouter()
  const useAuth = useAuthStore()
  const useUser = useUserStore()

  const handleLogin = (data:user) =>{
    const lang = locale.value === 'en' ? '/' : '/km'
    useAuth.login(data)
    if(useAuth.isAuthenticated){
      router.push({ path: `${lang}` })
    }
  }
</script>

<template>
  <LoginForm @emitLogin="handleLogin"/>
</template>