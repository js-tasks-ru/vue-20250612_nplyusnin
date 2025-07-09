<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps<{
  to?: string | { name: string };
  href?: string;
  target?: string;
}>();

const currentComponent = computed(() => {
  const componentName = props.to ? 'RouterLink' : 'a';
  return componentTypes[componentName];
});

const componentTypes = {
  RouterLink,
  a: 'a',
}
// Вместо <span> должен быть <RouterLink> или <a>
// Используйте динамический компонент <component :is="...">
</script>

<template>
  <component :is="currentComponent" :to="to" :href="href" :target="target">
    <slot />
  </component>
</template>

<style scoped>
.link {
  color: var(--color-text-primary);
}

.link:hover {
  text-decoration: underline;
}
</style>
