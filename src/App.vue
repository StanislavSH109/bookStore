<template>
  <div class="container">
    <aside class="sidebar">
      <ul>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
      </ul>
      <RouterLink :to="{name: 'home'}"></RouterLink>
    </aside>
    <main>
      <RouterView/>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';

</script>

<style lang="scss" scoped>
.sidebar {
  position: absolute;
  left: 0;
  border-right: 1px solid black;
  padding: 32px 40px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
