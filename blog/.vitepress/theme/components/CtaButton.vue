<script setup lang="ts">
  export interface Props {
    classes?: string
  }
  withDefaults(defineProps<Props>(), {
    classes: ''
  })
</script>

<style>
  .bg-primary-gradient {
    background-image: linear-gradient(135deg, rgb(var(--sunset-orange-500)) 0%, rgb(var(--sunset-orange-700)) 100%);
  }
</style>

<template>
  <a
    :class="`text-center font-semibold rounded-lg bg-primary-gradient hover:bg-sunset-orange-600 hover:bg-none hover:bg-shamrock-500 p-2 text-seashell-peach-50 ${classes}`"
    href="https://planship.io"
    target="_self"
  >
    Optimize your pricing
  </a>
</template>
