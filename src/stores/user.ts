import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref<{id: string; name: string} | null>(null);

  const login = () => {
    user.value = {id: '1', 'name': 'Гость'}
  }

  const logout = () => {
    user.value = null;
  }

  const isLogged = computed(() => user.value !== null);

  return { user, login, logout, isLogged };
})
