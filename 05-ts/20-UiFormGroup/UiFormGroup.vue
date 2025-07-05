<script setup lang="ts">
import type { Slot } from 'vue'
import { computed } from 'vue'

const props = defineProps<{
  for: string
  label?: string
  description?: string
  hint?: string
  invalid?: boolean
  showHint?: boolean
}>()

const slots = defineSlots<{
  default?: Slot
  label?: Slot
  description?: Slot
}>()

const hintOrError = computed(() => {
  return props.showHint || props.invalid ? props.hint : ""
})

const invalidClass = computed(() => {
  return props.invalid ? 'form-group__hint--invalid' : undefined
})
</script>

<template>
  <div class="form-group">
    <div class="form-group__label-wrapper">
      <label :for="props.for" class="form-group__label">
        <slot v-if="slots.label" name="label"></slot>
        <template v-else>
          {{ label }}
        </template>
      </label>

      <div class="form-group__description">
        <slot v-if="slots.description" name="description"></slot>
        <template v-else>
          {{ description }}
        </template>
      </div>
    </div>
    <div class="form-group__control">
      <slot></slot>
    </div>
    <div v-if="hint" class="form-group__hint" :class="invalidClass">{{ hintOrError }}</div>
  </div>
</template>

<style scoped>
/* _form-group.css */
.form-group {
}

.form-group__label-wrapper {
  margin-block-end: var(--spacing-small);
}

.form-group__label {
  display: block;
  font-size: var(--font-size-control);
}

.form-group__description {
  color: var(--color-dimmed);
}

.form-group__hint {
  font-size: var(--font-size-small);
  color: var(--color-dimmed);
  min-height: 1lh;

  &.form-group__hint--invalid {
    color: var(--color-danger);
  }
}
</style>
