import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ArticleCard from './components/ArticleCard.vue'
import ArticleCardList from './components/ArticleCardList.vue'
import ArticleHeader from './components/ArticleHeader.vue'
import CtaButton from './components/CtaButton.vue'
import Divider from './components/Divider.vue'
import Logo from './components/Logo.vue'
import './css/style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-title-before': () => h(Logo),
      'nav-bar-content-after': () => h(CtaButton, { classes: 'ml-4 hidden md:block' }),
      'nav-screen-content-after': () => h(CtaButton, { classes: 'mt-4 w-full inline-block' }),
      'footer-before': () => h(Divider)
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('ArticleCard', ArticleCard),
    app.component('ArticleCardList', ArticleCardList),
    app.component('ArticleHeader', ArticleHeader)
  }
} satisfies Theme
