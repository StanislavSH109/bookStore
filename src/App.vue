<template>
  <div class="container">
    <h1>Hello, world</h1>
    <RouterLink :to="{name: 'home'}"></RouterLink>
    <RouterView/>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
import { getBooks } from './api/getBooks';

const books = getBooks('fantasy');
</script>

<style lang="scss" scoped>


</style>
