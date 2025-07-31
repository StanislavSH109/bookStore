import { defineStore } from 'pinia';
import { ref, computed, watch, reactive } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref<{id: string; name: string} | null>(null);
  const favorites = ref<Set<string>>(new Set());
  const isLoading = ref(false);

  const login = () => {
    isLoading.value = true;
    setTimeout(() => {
      user.value = {id: '1', 'name': 'Гость'};
      isLoading.value = false;
    }, 800);
  }

  const logout = () => {
    isLoading.value = true;
    setTimeout(() => {
      user.value = null;
      favorites.value.clear();
      isLoading.value = false;
    }, 800)
  }

  const isLogged = computed(() => user.value !== null);
  const toggleFavorite = (bookId: string) => {
    if (favorites.value.has(bookId)) {
      favorites.value.delete(bookId);
    } else {
      favorites.value.add(bookId);
    }
  };

  const isFavorite = (bookId: string) => {
    return favorites.value.has(bookId);
  }

  return { user, login, logout, isLogged, toggleFavorite, isFavorite, isLoading, favorites };
})
