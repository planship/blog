<script setup>
  import { useData } from 'vitepress'
  import { formatDate } from '../helpers/helpers'

  const { page, frontmatter } = useData()
</script>

<template>
  <div class="flex mt-1">
    <div>{{ formatDate(frontmatter.date).string }}</div>
    <div class="v-gradient mx-2"></div>
    <div>{{ frontmatter.author }}</div>
  </div>
</template>
