<template>
  <div class="card">
    <h3> {{ props.book.title }}</h3>
    <img :src="props.book.imageLinks?.thumbnail" alt="photo" />
    <p>Категория: {{ props.book.categories }}</p>
  </div>
</template>

<script lang="ts" setup>
import type { IBook } from '@/types/books';

const props = defineProps<{book: IBook}>();
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1px solid black;
  padding: 8px;

  img {

  }
}
</style>
