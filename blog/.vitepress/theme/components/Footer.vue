<script setup lang="ts">
  import { useData } from 'vitepress'
  import { useSidebar } from 'vitepress/theme'
  import Divider from './Divider.vue'

  const { theme, frontmatter } = useData()
  const { hasSidebar } = useSidebar()
</script>

<template>
  <Divider />
  <footer
    v-if="theme.footer && frontmatter.footer !== false"
    class="VPFooter px-2 pt-5 pb-6 bg-big-stone-950 dark:bg-big-stone-950"
    :class="{ 'has-sidebar': hasSidebar }"
  >
    <div class="container">
      <img class="w-20 h-20 m-auto" src="/planship-logo-inward-square.svg" />
      <h3 class="text-4xl font-extrabold bg-gradient-to-b from-jordy-blue-500 to-shamrock-400 inline-block text-transparent bg-clip-text">
        Planship
      </h3>
      <p class="message mb-3">Subscription logic and <code class="text-shamrock-400">code</code> simplified.</p>
      <p v-if="theme.footer.copyright" class="copyright" v-html="theme.footer.copyright"></p>
    </div>
  </footer>
</template>

<style scoped>
.VPFooter {
  position: relative;
  z-index: var(--vp-z-index-footer);
}

.VPFooter.has-sidebar {
  display: none;
}

.VPFooter :deep(a) {
  text-decoration-line: underline;
  text-underline-offset: 2px;
  transition: color 0.25s;
}

.VPFooter :deep(a:hover) {
  color: var(--vp-c-text-1);
}

@media (min-width: 768px) {
  .VPFooter {
    /* padding: 32px; */
  }
}

.container {
  margin: 0 auto;
  max-width: var(--vp-layout-max-width);
  text-align: center;
}

.message,
.copyright {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: rgb(var(--seashell-peach-50));
}
</style>
