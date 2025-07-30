<template>
  <div class="card">
    <h3 class="card__title"> {{ props.book.title }}</h3>
    <div class="card__wrapper">
      <img class="card__image" :src="props.book.imageLinks?.thumbnail" alt="photo" />
      <div class="card__inner">
        <p class="card__text"> {{ props.book.description }}</p>
        <a class="card__link" :href="props.book.infoLink" target="_blank" rel="noopener noreferrer">Подробнее</a>
        <IconFavorites class="card__favorites"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IBook } from '@/types/books';
import { computed } from 'vue';
import IconFavorites from './icons/IconFavorites.vue';

const props = defineProps<{book: IBook}>();
// const shortDescription = computed(() => {
//   const description = props.book.description || '';
//   const sentences = description.match(/[^.!?]+[.!?]+/g) || [];
//   return sentences.slice(0, 1).join('. ') + (sentences.length > 2 ? '...' : '');
// })

</script>

<style lang="scss" scoped>
.card {
  display: grid;
  align-items: center;
  gap: 5px;
  border: none;
  outline: none;
  padding: 14px;
  background-color: #333;
  border-radius: 32px;
  transition: transform .2s ease-in, box-shadow .3s ease-in-out;
  &:hover {
    transform: scale(1.02);
    box-shadow: 1px 1px 10px 1px rgb(252, 252, 252);
  }

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
    box-shadow: 1px 1px 6px 1px white;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__text {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgba(255, 255, 255, 0.541);
    margin: 0 0 10px;
  }

  &__link {
    color: rgb(255, 255, 255);
    cursor: pointer;
    transition: color .3s ease-in-out;
    &:hover {
      color: rgba(255, 255, 255, 0.534)
    }
    &:focus {
      outline: none;
    }
  }

  &__favorites {
    display: flex;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
}
</style>
