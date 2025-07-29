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
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue';
import BookCard from '@/components/BookCard.vue';
import { getBooks } from '@/api/getBooks';
import type { IBook } from '@/types/books';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentCategory = computed(() => route.params.category as string || 'all')

const loadCategoryCount = ref(0);
const books = ref<IBook[]>([]);

const isLoading = ref(false);
const observerTarget = ref<HTMLElement | null>(null);

const loadMore = async () => {
  if (isLoading.value || !currentCategory.value) return
  isLoading.value = true;

  const newBooks = await getBooks(currentCategory.value || 'all');
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
