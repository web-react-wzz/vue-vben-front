<script setup lang="ts">
import { cn } from '@vben-core/shared/utils';

const props = defineProps<{
  class?: any;
}>();
</script>

<template>
  <div
    :class="
      cn(
        'bg-card text-card-foreground border-border rounded-xl border',
        props.class,
      )
    "
  >
    <slot></slot>
  </div>
</template>
<style scoped>
.text-card-foreground {
  color: hsl(0, 0%, 0%) !important;
}
</style>
