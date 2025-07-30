<template>
  <div class="cards">
    <BookCard
      v-for="book in books"
      :key="book.id" :book="book"
    />
    <div class="observer" ref="observerTarget"></div>
    <IconLoader v-if="isLoading" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue';
import BookCard from '@/components/BookCard.vue';
import { getBooks } from '@/api/getBooks';
import type { IBook } from '@/types/books';
import { useRoute } from 'vue-router';
import IconLoader from '@/components/icons/IconLoader.vue';

const allCategories = ['fantasy', 'self-help', 'programming', 'science-fiction']
const currentCategoryIndex = ref(0);

const route = useRoute();
const currentCategory = computed(() => route.params.categoryname as string || 'all')

const books = ref<IBook[]>([]);
const isLoading = ref(false);
const observerTarget = ref<HTMLElement | null>(null);


const hasMoreToLoad = computed(() => {
  if (currentCategory.value === 'all') {
    return currentCategoryIndex.value < allCategories.length;
  }
  return books.value.length === 0;
});

const loadMore = async () => {
  if (isLoading.value || !hasMoreToLoad.value) return;
  if (currentCategory.value === 'all' && currentCategoryIndex.value >= allCategories.length) {
    return
  }

  isLoading.value = true;

  let newBooks: IBook[] = [];
  if (currentCategory.value === 'all') {
    const categoryToLoad = allCategories[currentCategoryIndex.value];
    const booksFromCategory = await getBooks(categoryToLoad);
    newBooks.push(...booksFromCategory);
    currentCategoryIndex.value++;
  } else {
    newBooks = await getBooks(currentCategory.value);
  }

  books.value.push(...newBooks);
  isLoading.value = false;
}

let observer: IntersectionObserver;

onMounted(async () => {
  books.value = [];
  currentCategoryIndex.value = 0;
  await loadMore();

  observer = new IntersectionObserver(async (entries) => {
    if (entries[0].isIntersecting) {
      await loadMore();
    }
  }, { threshold: 0.5 });

  if (observerTarget.value) {
    observer.observe(observerTarget.value);
  }
});

onBeforeUnmount(() => {
  if (observer && observerTarget.value) {
    observer.unobserve(observerTarget.value);
  }
});

watch(currentCategory, async () => {
  books.value = [];
  currentCategoryIndex.value = 0;

  if (observer && observerTarget.value) {
    observer.unobserve(observerTarget.value);
    observer.disconnect();
  }
  await loadMore();

  observer = new IntersectionObserver(async (entries) => {
    if (entries[0].isIntersecting) {
      await loadMore();
    }
  }, { threshold: 0.5});

  if (observerTarget.value) {
    observer.observe(observerTarget.value);
  }
});
</script>

<style lang="scss" scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1220px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
}

</style>
