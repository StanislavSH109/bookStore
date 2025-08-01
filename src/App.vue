<template>
  <div class="container">
    <div class="head">
      <RouterLink class="head__link" :to="{ name: 'all' }">
        <IconBookStore class="head__icon" />
        <h1 class="head__title">Book Store</h1>
      </RouterLink>
      <div class="head__search">
        <input class="head__search-input" type="search" placeholder="Найти книгу..." v-model="searchQuery">
      </div>
      <div class="head__login">
        <span class="head__login-enter" v-if="!userStore.isLogged && !userStore.isLoading" @click="userStore.login">
          Войти
        </span>

        <div class="head__inner" v-if="userStore.isLogged && !userStore.isLoading">
          <RouterLink :to="{ name: 'list' }">
            <IconCheck class="head__login-favorites" />
            <span class="head__login-favorites-count"
              :class="{ 'head__login-favorites-count--active': userStore.isFavorite }">
              {{ userStore.favorites.length }}
            </span>
          </RouterLink>
          <RouterLink :to="{ name: 'all' }">
            <IconShutdown class="head__login-exit" @click="userStore.logout" />
          </RouterLink>
        </div>
        <!-- <IconLoaded class="head__login-loader" /> -->
      </div>
    </div>
    <div class="wrapper">
      <aside class="sidebar">
        <ul class="sidebar__list">
          <li class="sidebar__list-item" v-for="category in categories" :key="category.key">
            <RouterLink class="sidebar__list-link" :to="`/category/${category.key}`">
              <CategoryIcon class="sidebar__list-icon" :categoryKey="category.key" />
              {{ category.label }}
            </RouterLink>
          </li>
          <li>
            <input class="head__search-input head__search-input--mobile" type="search" placeholder="Найти книгу..."
              v-model="searchQuery">
          </li>
        </ul>
      </aside>
      <main>
        <section class="books">
          <RouterView />
        </section>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { RouterView } from 'vue-router';
import IconBookStore from './components/icons/IconBookStore.vue';
import CategoryIcon from './components/CategoryIcon.vue';
import { useUserStore } from './stores/user';
import IconShutdown from './components/icons/IconShutdown.vue';
import IconCheck from './components/icons/IconCheck.vue';
import { useSearchStore } from './stores/search';



const searchQuery = ref('');
const searchStore = useSearchStore();
const userStore = useUserStore();
const categories = ref([
  { key: 'all', label: 'Все жанры' },
  { key: 'fantasy', label: 'Фэнтези' },
  { key: 'self-help', label: 'Саморазвитие' },
  { key: 'programming', label: 'Программирование' },
  { key: 'science-fiction', label: 'Научная фантастика' },
  { key: 'bestsellers', label: 'Лучшие продажи' }
])


watch(searchQuery, (newQuery) => {
  searchStore.searchQuery = newQuery;
});

</script>

<style lang="scss" scoped>
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin: 0 0 20px;
  position: relative;

  &__inner {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__search {
    display: flex;
    padding-right: 100px;

    @media (max-width: 660px) {
      padding-right: 120px;
    }

    &-input {
      outline: none;
      border: none;
      padding: 10px;
      border-radius: 12px;

      &--mobile {
        display: none;
        width: 100%;
      }


      @media (max-width: 660px) {
        padding: 5px;
        width: 200px;

        &--mobile {
          display: none;
          width: 100%;
        }
      }

      @media (max-width: 560px) {
        display: none;

        &--mobile {
          display: block;
          width: 100%;
          height: 100%;
          font-size: 12px;
          padding: 8px;

          &::placeholder {
            font-size: 12px;

          }
        }
      }
    }
  }


  &__link {
    display: flex;
    align-items: center;
    gap: 20px;
    text-decoration: none;

    @media (max-width: 660px) {
      gap: 10px;
    }
  }

  &__icon {
    width: 100px;
    height: 100px;

    @media (max-width: 500px) {
      width: 60px;
      height: 60px;
    }
  }

  &__title {
    text-align: center;
    padding: 20px 0 0;
    margin: 0 0 20px;
    color: rgb(255, 255, 255);
    max-width: 50px;

    @media (max-width: 660px) {
      font-size: 24px;
    }

    @media (max-width: 490px) {
      font-size: 16px;
    }
  }

  &__login {
    display: block;
    position: absolute;
    top: 35%;
    right: 0;

    &-enter {
      font-size: 14px;
      display: flex;
      height: 100%;
      line-height: 20px;
      color: white;
      padding: 0 10px 0 0;
      cursor: pointer;
      transition: text-shadow 0.2s ease-in-out;

      &:hover {
        text-shadow: 0 0 5px white;
      }
    }

    &-loader {
      display: flex;
      position: absolute;
    }

    &-favorites {
      display: block;
      position: absolute;
      top: -12%;
      right: 100%;
      width: 40px;
      height: 40px;
      cursor: pointer;

      @media (max-width: 500px) {
        width: 30px;
        height: 30px;
        top: -12%;
      }

      &-count {
        display: none;
        position: absolute;
        color: white;
        text-align: center;
        left: -35%;
        top: -40%;
        background-color: rgb(190, 125, 3);
        padding: 4px;
        min-height: 20px;
        min-width: 20px;
        font-size: 12px;
        line-height: 14px;
        border-radius: 50%;

        @media (max-width: 500px) {
          width: 15px;
          height: 15px;
          left: -55%;
        }

        &--active {
          display: block;
        }
      }
    }

    &-exit {
      cursor: pointer;
      min-width: 30px;
      height: 30px;
      border: none;
      outline: none;
      transition: filter .2s ease-in-out;

      @media (max-width: 500px) {
        width: 25px;
        height: 25px;
        top: -12%;
      }

      &:hover {
        filter: drop-shadow(1px 1px 5px rgb(74, 74, 235));

      }
    }
  }
}

.books {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.wrapper {
  display: flex;
  gap: 50px;

  @media (max-width: 1300px) {
    gap: 20px;
  }

  @media (max-width: 500px) {
    gap: 10px;
  }
}

.sidebar {
  position: sticky;
  top: 0;
  align-self: flex-start;
  z-index: 10;
  max-height: 100vh;
  padding: 10px 0 0;
  // overflow-y: auto;

  ul {
    display: grid;
    grid-template-columns: minmax(300px, 300px);
    gap: 20px;

    @media (max-width:1024px) {
      grid-template-columns: minmax(200px, 200px);
    }

    @media (max-width:500px) {
      grid-template-columns: minmax(150px, 150px);

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
        padding: 4px;
      }

      @media (max-width: 500px) {
        font-size: 10px;
        line-height: 14px;
        width: 100%;
      }
    }
  }
}
</style>
