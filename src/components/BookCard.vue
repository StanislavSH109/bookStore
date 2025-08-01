<template>
  <div class="card" @click="props.isFavoriteView && toggleOverlay()">
    <h3 class="card__title"> {{ props.book.title }}</h3>
    <div class="card__wrapper">
      <img class="card__image" :src="props.book.imageLinks?.thumbnail" alt="photo" />
      <div class="card__inner">
        <p class="card__text"> {{ props.book.description }}</p>
        <a class="card__link" :href="props.book.infoLink" target="_blank" rel="noopener noreferrer">Подробнее</a>
        <button class="card__favorites" v-if="userStore.isLogged" @click="userStore.toggleFavorite(book)">
          <IconFavorites class="card__favorites-icon"
            :class="{ 'card__favorites-icon--active': userStore.isFavorite(book.id) }" />
        </button>
      </div>
    </div>

    <div class="card__overlay" v-if="isOverlayOpen" @click.stop>
      <button class="card__overlay-close" @click="toggleOverlay">
        X
      </button>
      <div class="card__overlay-buttons">
        <button class="card__overlay-btn" @click="() => userStore.setBookStatus(book.id, 'reading')">
          Читаю
        </button>
        <button class="card__overlay-btn" @click="() => userStore.setBookStatus(book.id, 'finished')">
          Прочитано
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores/user';
import type { IBook } from '@/types/books';
import { ref } from 'vue';
import IconFavorites from './icons/IconFavorites.vue';


const userStore = useUserStore();
const isOverlayOpen = ref(false);

const toggleOverlay = () => {
  isOverlayOpen.value = !isOverlayOpen.value;
}


const props = defineProps<{
  book: IBook,
  isFavoriteView?: boolean,
}>();


</script>

<style lang="scss">
.card {
  display: grid;
  position: relative;
  align-items: center;
  gap: 5px;
  overflow: hidden;
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


    @media (max-width:500px) {
      font-size: 13px;
      line-height: 16px;
    }


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

    @media (max-width:500px) {
      max-height: 100px;
      max-width: 100px;
    }

    @media (max-width:400px) {
      max-height: 80px;
      max-width: 80px;
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
  }

  &__text {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgba(255, 255, 255, 0.541);

    @media (max-width:500px) {
      font-size: 10px;
      line-height: 12px;
    }
  }

  &__link {
    color: rgb(255, 255, 255);
    cursor: pointer;
    transition: color .3s ease-in-out;

    @media (max-width:500px) {
      font-size: 10px;
      line-height: 12px;
    }

    &:hover {
      color: rgba(255, 255, 255, 0.534)
    }

    &:focus {
      outline: none;
    }
  }

  &__favorites {
    display: flex;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    &-icon {
      width: 20px;
      height: 20px;
      transition: .2s ease-in-out;
      fill: white;

      &--active {
        fill: red;
        animation: pulse 0.3s ease;
        transform: scale(1.05);
      }
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
      }

      50% {
        transform: scale(1.4);
      }

      100% {
        transform: scale(1.2);
      }
    }
  }

  &__overlay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 60px;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    background-color: #757575e1;
    width: 100%;
    height: 100%;

    &-buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }

    &-close {
      border: none;
      outline: none;
      background-color: unset;
      cursor: pointer;
      color: rgb(160, 8, 8);
      transition: color .2s ease-in-out;

      &:hover {
        color: #333;
      }
    }

    &-btn {
      border: none;
      outline: none;
      background-color: unset;
      color: rgb(255, 255, 255);
      cursor: pointer;
      transition: text-shadow .2s ease-in-out;

      &:hover {
        text-shadow: 1px 1px 8px white;
      }
    }

  }
}
</style>
