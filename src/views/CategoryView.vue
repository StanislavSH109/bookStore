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

const allCategories = ['fantasy', 'self-help', 'programming', 'science-fiction']
const currentCategoryIndex = ref(0);

const route = useRoute();
const currentCategory = computed(() => route.params.categoryname as string)
console.log(currentCategory.value);
console.log(currentCategory);

watch(currentCategory, async() => {
  books.value = [];
  currentCategoryIndex.value = 0;
  await loadMore();
})
const loadCategoryCount = ref(0);
const books = ref<IBook[]>([]);

const isLoading = ref(false);
const observerTarget = ref<HTMLElement | null>(null);

const loadMore = async () => {
  if (isLoading.value) return
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
  if (currentCategory.value === 'all') {
    await loadMore();
    await loadMore();
  }


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
  height: 100px;
}
</style>
