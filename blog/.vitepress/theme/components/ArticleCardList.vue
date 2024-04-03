<script setup>
  import ArticleCard from './ArticleCard.vue'
  import { data as articles } from './../index.data.ts'
</script>

<template>
  <div class="flex flex-wrap justify-center gap-y-4 w-full">
    <ArticleCard
      v-for="article in articles"
      :title="article.title"
      :href="article.url"
      :date="article.date.string"
      :author="article.author"
      :image="article.image"
      :alt="article.alt"
      :excerpt="article.excerpt"
    />
  </div>
</template>
