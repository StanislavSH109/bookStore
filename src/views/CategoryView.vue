<template>
  <div class="cards">
    <BookCard
      v-for="book in books"
      :key="book.id" :book="book"
    />
    <div class="observer" ref="observerTarget"></div>
    <p v-if="isLoading">Загрузка...</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import BookCard from '@/components/BookCard.vue';
import { getBooks } from '@/api/getBooks';
import type { IBook } from '@/types/books';

const categories = ['fantasy', 'self-help', 'programming', 'science-fiction'];
const loadCategoryCount = ref(0);
const books = ref<IBook[]>([]);
const isLoading = ref(false);
const observerTarget = ref<HTMLElement | null>(null);

const loadMore = async () => {
  if (isLoading.value || loadCategoryCount.value >= categories.length) return
  isLoading.value = true;

  const nextCategory = categories[loadCategoryCount.value];
  const newBooks = await getBooks(nextCategory);
  books.value.push(...newBooks);

  loadCategoryCount.value++;
  isLoading.value = false;
}

let observer: IntersectionObserver;

onMounted(() => {
  loadMore();

  observer = new IntersectionObserver(async (entries) => {
    if (entries[0].isIntersecting) {
      await loadMore()
    }
  })

  if (observerTarget.value) {
    observer.observe(observerTarget.value);
    }
  })

  onBeforeUnmount(() => {
    if (observer && observerTarget.value) {
      observer.unobserve(observerTarget.value);
    }
  })
</script>

<style lang="scss" scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.observer {
  height: 1px;
}
</style>
