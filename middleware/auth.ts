import { useAuthStore } from "~/stores";
//import {useR} from 'vue'

export default defineNuxtRouteMiddleware((to, from) => {
  const useAuth = useAuthStore();
  
  const cookie = useCookie('tsc:abc');
  
  if(!cookie.value && !useAuth.isAuthenticated){ //!useAuth.isAuthenticated || 
    return navigateTo('/login')
  }else{
    useAuth.middleSet();
  }
  
})