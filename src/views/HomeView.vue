<template>
</template>

<script lang="ts" setup>
import {ref, onMounted } from 'vue';
import { getBooks } from '@/api/getBooks';
import type { IBook } from '@/types/books';

const books = ref<IBook[]>([]);

onMounted(async () => {
  const data = await getBooks('fantasy');
  // books.value = data;
})
</script>

<style scoped>

</style>
