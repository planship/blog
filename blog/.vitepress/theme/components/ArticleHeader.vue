<script setup lang="ts">
  import { useData } from 'vitepress'
  import { formatDate } from '../helpers/helpers'

  const { page, frontmatter } = useData()
  const env = import.meta.env
  const blogAssetsPath = env.VITE_BLOG_ASSETS_PATH || '/images'
</script>

<template>
  <h1 class="font-semibold text-4xl">{{ frontmatter.title }}</h1>
  <div class="flex mt-1 mb-6">
    <div>{{ formatDate(frontmatter.date).string }}</div>
    <div class="v-gradient mx-2"></div>
    <div>{{ frontmatter.author }}</div>
  </div>
  <img class="rounded" :src="`${blogAssetsPath}/${page.relativePath.substring(0, page.relativePath.lastIndexOf('.'))}/cover.jpg`" :alt="frontmatter.cover_alt" />
</template>
