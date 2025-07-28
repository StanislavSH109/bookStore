<template>
  <div class="container">
    <RouterLink :to="{name: 'home'}"></RouterLink>
    <RouterView/>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';

</script>

<style lang="scss" scoped>
</style>
