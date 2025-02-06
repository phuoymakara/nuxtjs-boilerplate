
interface IUserData{
  users: any[];
}

export const useUserStore = defineStore("user", () => {
  const users = ref();
  const userStatus = ref<'idle' | 'pending' | 'success' | 'error'>()
  const { $api } = useNuxtApp();

  const getAllUsers = () =>{
    try{
        const { data } = useAsyncData('users', () => $api.user.get());
        //@ts-ignore
        users.value = data?.value?.users;
        if(users.value){
          userStatus.value = 'success';
        }else{
         // userStatus.value = 'pending';
          // refresh()
        }

    }catch(error){
      userStatus.value = 'error';
      console.debug(error)
    }
  }

  return { 
    users, 
    userStatus, 
    getAllUsers };
});