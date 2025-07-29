<template>
  <div class="card">
    <h3 class="card__title"> {{ props.book.title }}</h3>
    <div class="card__wrapper">
      <img class="card__image" :src="props.book.imageLinks?.thumbnail" alt="photo" />
      <div class="card__inner">
        <!-- <span class="card__description">Описание:</span> -->
        <p class="card__text"> {{ shortDescription }}</p>
        <a class="card__link" :href="props.book.infoLink" target="_blank" rel="noopener noreferrer">Подробнее</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IBook } from '@/types/books';
import { computed } from 'vue';

const props = defineProps<{book: IBook}>();
const shortDescription = computed(() => {
  const description = props.book.description || '';
  const sentences = description.match(/[^.!?]+[.!?]+/g) || [];
  return sentences.slice(0, 1).join('. ') + (sentences.length > 2 ? '...' : '');
})

</script>

<style lang="scss" scoped>
.card {
  display: grid;
  align-items: center;
  gap: 5px;
  border: 1px solid black;
  padding: 14px;
  background-color: #333;
  border-radius: 32px;

  &__title {
    text-align: center;
    color: rgba(247, 247, 247, 0.87);
    margin: 0 0 8px;
  }

  &__wrapper {
    display: flex;
    gap: 10px;
  }

  &__image {
    max-height: 150px;
    max-width: 150px;
    object-fit: contain;
    border-radius: 8px;
  }

  &__inner {
    display: flex;
    flex-direction: column;
  }

  &__description {
    display: flex;
    color: whitesmoke;
  }

  &__text

  &__link {
    cursor: pointer;
  }
}
</style>
