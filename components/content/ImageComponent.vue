<template>
  <picture className="image">
    <img
      :src="src"
      :alt="alt"
      draggable="false"
    >
  </picture>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
}>()
</script>

