<template>
  <div class="container">
    <div class="wrapper">
      <aside class="sidebar">
        <ul class="sidebar__list">
          <li
            class="sidebar__list-item"
            v-for="category in categories"
            :key="category.key"
          >
            <RouterLink :to="`/category/${category.key}`">
              {{ category.label }}
            </RouterLink>
          </li>
        </ul>
      </aside>
      <main>
        <RouterView/>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';

const categories = ref([
  {key: 'all', label: 'Все жанры'},
  {key: 'fantasy', label: 'Фэнтези'},
  {key: 'self-help', label: 'Саморазвитие'},
  {key: 'programmin', label: 'Программирование'},
  {key: 'science-fiction', label: 'Научная фантастика'}
])
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
}
.sidebar {
  border-right: 1px solid black;

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
