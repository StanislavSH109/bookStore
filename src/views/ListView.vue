<template>
  <div class="favorites-card">
    <h2 class="favorites-card__title">Избранное</h2>
    <BookCard
      v-for="book in userStore.favorites"
      :key="book.id"
      :book="book"
    />
  </div>

</template>

<script lang="ts" setup>
import BookCard from '@/components/BookCard.vue';
import { useUserStore } from '@/stores/user';
import { computed } from 'vue';

const userStore = useUserStore();
for (let user in userStore) {
  console.log(user);
}
</script>

<style lang="scss" scoped>
.favorites-card {
  display: grid;
  grid-template-columns: repeat(2, auto);
  flex-direction: column;
  align-items: center;
  gap: 20px;

  &__title {
    grid-column: span 2;
    text-align: center;
    margin: 0 0 20px;
    color: white;
  }
}
</style>
