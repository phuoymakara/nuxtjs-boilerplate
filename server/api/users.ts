export default defineEventHandler(async (event) => {
  const response = await $fetch('https://dummyjson.com/users', {
    headers: {
      Authorization: 'Bearer 123-2025'
    }
  });
  return response;
});