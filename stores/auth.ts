
type UserLogin={
  username: string;
  password: string;
}

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref(false);
  const cookie = useCookie('tsc:abc');


  const login = (data: UserLogin) =>{
    try{
      if(data.username==='mark' && data.password==='123'){
        isAuthenticated.value = true
        cookie.value = 'hello'
      }
    }catch(error){
      console.debug(error)
    }
  }

  const logout = () =>{
    isAuthenticated.value = false;
    cookie.value = null;
  }

  const middleSet = () =>{
    isAuthenticated.value = true;
  }

  return { 
    isAuthenticated, 
    login, 
    middleSet,
    logout 
  };
});