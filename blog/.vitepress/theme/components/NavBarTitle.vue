<script setup lang="ts">
  /*
    Replacement for VPNavBarTitle
    https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/components/VPNavBarTitle.vue
  */
  import { useSidebar } from 'vitepress/theme'

  const { hasSidebar } = useSidebar()
</script>

<template>
  <div class="VPNavBarTitle" :class="{ 'has-sidebar': hasSidebar }">
    <div class="title">
      <slot name="nav-bar-title-before" />
      <slot name="nav-bar-title-after" />
    </div>
  </div>
</template>

<style scoped>
  .title {
    display: flex;
    align-items: center;
    border-bottom: 1px solid transparent;
    width: 100%;
    height: var(--vp-nav-height);
    font-size: 16px;
    font-weight: 600;
    color: var(--vp-c-text-1);
    transition: opacity 0.25s;
  }

  @media (min-width: 960px) {
    .title {
      flex-shrink: 0;
    }

    .VPNavBarTitle.has-sidebar .title {
      border-bottom-color: var(--vp-c-divider);
    }
  }

  :deep(.logo) {
    margin-right: 8px;
    height: var(--vp-nav-logo-height);
  }
</style>
