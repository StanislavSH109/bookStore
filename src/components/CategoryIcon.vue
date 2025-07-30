<template>
 <component :is="IconComponent" />
</template>

<script lang="ts" setup>
import IconScience from './icons/IconScience.vue';
import IconAllGenres from './icons/IconAllGenres.vue';
import IconFantasy from './icons/IconFantasy.vue';
import IconSelfHelp from './icons/IconSelfHelp.vue';
import IconProgramming from './icons/IconProgramming.vue';
import IconBestSellers from './icons/IconBestSellers.vue';

const props = defineProps<{readonly categoryKey: categoryKey}>();

const iconsMap: Record<string, any> = {
  'all': IconAllGenres,
  'fantasy': IconFantasy,
  'self-help': IconSelfHelp,
  'science-fiction': IconScience,
  'programming': IconProgramming,
  'bestsellers': IconBestSellers,
};

type categoryKey = keyof typeof iconsMap;

const IconComponent = iconsMap[props.categoryKey];
</script>

<style lang="scss" scoped>

</style>
