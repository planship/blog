<script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps<{
    title: string,
    excerpt: string,
    image: string,
    alt: string,
    date: string,
    author: string,
    href: string,
  }>()

  const cleanHref = computed(() => props.href.replace('.html', ''))
</script>

<template>
  <a :href="cleanHref" class="w-full p-4 border-2 border-transparent rounded-md bg-shamrock-50 dark:bg-big-stone-950 hover:border-shamrock-100 dark:hover:border-big-stone-800">
    <div class="">
      <div class="flex w-full">
        <div class="flex flex-shrink-0">
          <img class="rounded w-24 h-24" :src="image" :alt="alt" />
        </div>
        <div class="flex flex-col ml-4 justify-center">
          <h3 class="w-full text-xl font-bold">{{ title }}</h3>
          <small>{{ date }} by {{ author }}</small>
          <p>{{ excerpt }}</p>
        </div>
      </div>
    </div>
  </a>
</template>
