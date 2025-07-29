<template>
  <div class="container">
    <h1 class="title">Book Store</h1>
    <div class="wrapper">
      <aside class="sidebar">
        <ul class="sidebar__list">
          <li
            class="sidebar__list-item"
            v-for="category in categories"
            :key="category.key"
          >
            <RouterLink class="sidebar__list-link" :to="`/category/${category.key}`">
              {{ category.label }}
            </RouterLink>
          </li>
        </ul>
      </aside>
      <main>
        <section class="books">
          <RouterView/>
        </section>
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
.title {
  text-align: center;
  padding: 20px 0 0;
  margin: 0 0 20px;
}
.wrapper {
  display: flex;
  gap: 20px;
}
.sidebar {
  padding: 0 20px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__list {
    margin: 0;
    padding: 0;

    &-item {
      background-color: #312133;
      border-radius: 8px;
      // padding: 8px 0 8px;
      text-align: center;
    }
    &-link {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      font-size: 20px;
      line-height: 24px;
      font-weight: 700;
      color: rgb(239, 255, 14);
      width: 100%;
      padding: 8px;
    }
  }
}
</style>
