<script setup lang="ts">
  import ArticleCard from './ArticleCard.vue'
  import { data as articles } from './../index.data.ts'

  const props = defineProps<{
    classes?: string,
  }>()
</script>

<template>
  <div class="flex flex-wrap justify-center gap-y-4 w-full" :class="classes">
    <ArticleCard
      v-for="article in articles"
      :title="article.title"
      :href="article.url"
      :date="article.date.string"
      :author="article.author"
      :imageFolder="article.imageFolder"
      :coverAlt="article.coverAlt"
      :excerpt="article.excerpt"
    />
  </div>
</template>
