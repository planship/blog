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
      <a href="https://planship.io">
        <img class="w-20 h-20 m-auto" src="/planship-logo-inward-square.svg" alt="Planship logo depicting a cargo ship with a crane hoisting a shipping container">
        <h3 class="text-4xl font-extrabold bg-gradient-to-b from-jordy-blue-500 to-shamrock-400 inline-block text-transparent bg-clip-text">
          Planship
        </h3>
      </a>
      <p class="message mb-3">SaaS pricing and packaging, optimized.</p>
      <p v-if="theme.footer.copyright" class="copyright">
        {{theme.footer.copyright}} &bull; <a class="" href="https://planship.io/policies/privacy-policy">Privacy Policy</a> &bull; <a class="" href="https://planship.io/policies/terms-of-service">Terms of Service</a>
      </p>
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
  @apply text-seashell-peach-50;
  text-decoration-line: none;
  transition: color 0.25s;
}

.VPFooter :deep(a:hover) {
  @apply text-shamrock-400;
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
