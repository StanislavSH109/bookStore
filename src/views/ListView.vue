<template>
  <div class="favorites-card">
    <h2 class="favorites-card__title">Избранное</h2>
    <div class="favorites-card__filters">
      <span class="favorites-card__filters-info">
        Количество книг: <span>{{ userStore.favorites.length }}</span></span>
      <span class="favorites-card__filters-info">Читаю: <span>{{ readingCount }}</span></span>
      <span class="favorites-card__filters-info">Прочитано: <span>{{ finishedCount }}</span></span>
    </div>
    <BookCard class="favorites-card__books" v-for="book in userStore.favorites" :key="book.id" :book="book"
      :isFavoriteView="true" />
  </div>

</template>

<script lang="ts" setup>
import BookCard from '@/components/BookCard.vue';
import { useUserStore } from '@/stores/user';
import { computed } from 'vue';


const userStore = useUserStore();

const readingCount = computed(() => {
  return userStore.favorites.filter(book => book.status === 'reading').length
});
const finishedCount = computed(() => {
  return userStore.favorites.filter(book => book.status === 'finished').length
});
</script>

<style lang="scss">
.favorites-card {
  display: grid;
  grid-template-columns: repeat(2, auto);
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 100%;

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
  }

  &__title {
    grid-column: span 2;
    text-align: center;
    margin: 0 0 20px;
    color: white;

    @media (max-width: 800px) {
      font-size: 20px;
      line-height: 20px;
    }
  }

  &__filters {
    display: flex;
    justify-content: center;
    max-width: 100%;
    // grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    grid-column: span 2;
    align-items: center;
    border-radius: 8px;
    background: linear-gradient(rgb(61, 59, 59), rgba(255, 255, 255, 0));

    @media (max-width: 680px) {
      gap: unset;
    }

    @media (max-width: 600px) {
      flex-direction: column;
    }

    &-info {
      display: block;
      text-align: center;

      color: white;
      padding: 12px;
    }
  }

  &__books {
    max-width: 100%;
    cursor: pointer;
  }
}
</style>
