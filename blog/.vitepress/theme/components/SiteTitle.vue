<script setup lang="ts">
  import { useData } from 'vitepress'
  const { theme } = useData()
</script>

<template>
  <a class="title" href="/"><span>{{ theme.siteTitle }}</span></a>
</template>
