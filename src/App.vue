<template>
  <div class="container">
    <div class="head">
      <RouterLink class="head__link" :to="{name: 'all'}">
        <IconBookStore />
        <h1 class="title">Book Store</h1>
      </RouterLink>
    </div>
    <div class="wrapper">
      <aside class="sidebar">
        <ul class="sidebar__list">
          <li
            class="sidebar__list-item"
            v-for="category in categories"
            :key="category.key"
          >
            <RouterLink class="sidebar__list-link" :to="`/category/${category.key}`">
              <CategoryIcon class="sidebar__list-icon" :categoryKey="category.key"/>
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
import IconBookStore from './components/icons/IconBookStore.vue';
import CategoryIcon from './components/CategoryIcon.vue';

const categories = ref([
  {key: 'all', label: 'Все жанры'},
  {key: 'fantasy', label: 'Фэнтези'},
  {key: 'self-help', label: 'Саморазвитие'},
  {key: 'programming', label: 'Программирование'},
  {key: 'science-fiction', label: 'Научная фантастика'},
  {key: 'bestsellers', label: 'Лучшие продажи'}
])
</script>

<style lang="scss" scoped>
.head {
  display: flex;
  justify-content: flex-start;
  align-items: start;
  gap: 20px;
  margin: 0 0 20px;

  &__link {
    display: flex;
    gap: 20px;
    text-decoration: none;
  }
}

.title {
  text-align: center;
  padding: 20px 0 0;
  margin: 0 0 20px;
  color: rgb(255, 255, 255);
  max-width: 50px;
}
.wrapper {
  display: flex;
  gap: 50px;

  @media (max-width: 1300px) {
    gap: 20px;
  }
}
.sidebar {
  padding: 0 20px;
  @media (max-width: 1260px) {
    padding: 0;
  }
  ul {
    display: grid;
    grid-template-columns: minmax(300px, 300px);
    gap: 20px;

    @media (max-width:1024px) {
      grid-template-columns: minmax(200px, 200px);
    }
  }

  &__list {
    margin: 0;
    padding: 0;

    &-icon {
      @media (max-width: 1024px) {
        width: 30px;
        height: 30px;
      }
    }

    &-item {
      background-color: #312133;
      text-align: center;
      border: none;
      outline: none;
      border-radius: 8px;
      max-width: 100%;
    }
    &-link {
      display: grid;
      grid-template-columns: repeat(2, auto);
      align-items: center;
      text-decoration: none;
      font-size: 20px;
      line-height: 24px;
      font-weight: 700;
      color: rgb(255, 255, 255);
      width: 100%;
      padding: 8px;
      border: none;
      outline: none;
      transition: box-shadow .3s ease-in-out;
      border-radius: 8px;
      &:hover {
        box-shadow: 1px 1px 8px 1px white;
      }
      &:focus {
        box-shadow: 1px 1px 8px 1px white;
      }
      &:active {
        box-shadow: 1px 1px 8px 1px white;
      }

      @media (max-width:1024px) {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}

</style>
