import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);

  const increment = () => {
    count.value++;
  };
  const decrement = () => {
    if(count.value>=1){
      count.value= count.value-1;
    }
  };

  return { count, increment, decrement };
});


