<script setup lang="ts">
  import type { DefaultTheme } from 'vitepress/theme'
  import { useData, withBase } from 'vitepress'

  const { page } = useData()
  const env = import.meta.env
  const blogAssetsPath = env.VITE_BLOG_ASSETS_PATH || '/images'

  defineProps<{
    src: string
    alt?: string
    caption?: string
  }>()

  defineOptions({ inheritAttrs: false })
</script>

<template>
  <div class="text-center mb-4">
    <img
      class="rounded"
      :src="`${blogAssetsPath}/${page.relativePath.substring(0, page.relativePath.lastIndexOf('.'))}/${src}`"
      :alt="alt ?? ''"
    />
    <div v-if="caption" class="mt-2">
      <em>{{caption}}</em>
    </div>
  </div>
</template>
