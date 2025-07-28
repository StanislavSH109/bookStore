<template>
  <div class="home">
    <!-- <p>{{ booksCategories }}</p> -->
    <div v-for="(books, category) in booksCategories" :key="category">
      <h2>{{ category }}</h2>
      <BookCard v-for="book in books" :key="book.id" :book="book"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, onMounted } from 'vue';
import { getBooks } from '@/api/getBooks';
import type { IBook } from '@/types/books';
import BookCard from '@/components/BookCard.vue';


const categories = ['fantasy', 'self-help', 'programming', 'science%20fiction'];
const booksCategories = ref<Record<string, IBook[]>>({});
const isLoading = ref(true);


onMounted(async () => {
  for (const category of categories) {
    booksCategories.value[category] = await getBooks(category);
  }
  isLoading.value = false;
})

</script>

<style scoped>
.home {
  display: grid;
  grid-template-columns: minmax(200px, 300px);
  justify-content: center;

}
</style>
