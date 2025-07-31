<template>
  <h2 class="title-favorites">Избранное</h2>
  <BookCard :book="book" :key="book"/>
</template>

<script lang="ts" setup>
import BookCard from '@/components/BookCard.vue';
import { useUserStore } from '@/stores/user';
import { computed } from 'vue';

const userStore = useUserStore();

</script>

<style lang="scss" scoped>
.title-favorites {
  color: white;
}
</style>
