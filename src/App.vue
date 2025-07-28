<template>
  <div class="container">
    <nav class="nav">
      <RouterLink :to="{name: 'home'}"></RouterLink>
    </nav>
    <main>
      <RouterView/>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';

</script>

<style lang="scss" scoped>
</style>
