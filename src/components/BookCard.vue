<template>
  <div class="card">
    <h3 class="card__title"> {{ props.book.title }}</h3>
    <div class="card__wrapper">
      <img class="card__image" :src="props.book.imageLinks?.thumbnail" alt="photo" />
      <p>Описание: {{ shortDescription }}</p>
      <a class="card__link" :href="props.book.infoLink" target="_blank" rel="noopener noreferrer">Подробнее</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IBook } from '@/types/books';
import { computed } from 'vue';

const props = defineProps<{book: IBook}>();
const shortDescription = computed(() => {
  const description = props.book.description || '';
  const sentences = description.split('. ');
  return sentences.slice(0, 1).join('. ') + (sentences.length > 2 ? '...' : '');
})

</script>

<style lang="scss" scoped>
.card {
  display: grid;
  align-items: center;
  gap: 5px;
  border: 1px solid black;
  padding: 8px;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__image {
    max-height: 150px;
    max-width: 150px;
    object-fit: contain;
  }

  &__link {
    cursor: pointer;
  }
}
</style>
