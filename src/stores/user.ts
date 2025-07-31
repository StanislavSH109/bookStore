import { defineStore } from 'pinia';
import type { IBook } from '@/types/books';
import { ref, computed, watch, reactive } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref<{id: string; name: string} | null>(null);
  const isLoading = ref(false);

  const favorites = ref<IBook[]>([]);

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
      favorites.value = [];
      isLoading.value = false;
    }, 800)
  }

  const isLogged = computed(() => user.value !== null);

  const toggleFavorite = (book: IBook) => {
    const index = favorites.value.findIndex(fav => fav.id === book.id);
    if (index >= 0) {
      favorites.value.splice(index, 1);
    } else {
      favorites.value.push(book);
    }
  };

  const isFavorite = (bookId: string) => {
    return favorites.value.some(book => book.id === bookId);
  }

  const setBookStatus = (bookId: string, status: 'reading' | 'finished') => {
    const book = favorites.value.find(b => b.id === bookId);
    if (book) {
      book.status = status;
    }
  }

  return { user, login, logout, isLogged, toggleFavorite, isFavorite, isLoading, favorites, setBookStatus };
})
