<template>
  <button
    v-if="$colorMode.preference === 'dark'"
    @click="toggleColorMode('light')"

    class=""
  >
    <!--SVG ICON SUN-->
  </button>
  <button
    v-else
    class=""
    @click="toggleColorMode('dark')"
  >
    <!--SVG ICON MOON-->
  </button>
</template>

<script setup lang="ts">

import { useColorMode } from "@nuxtjs/color-mode/dist/runtime/composables"

const colorMode = useColorMode();

function toggleColorMode(mode: string) {
  colorMode.preference = mode;
}
</script>
