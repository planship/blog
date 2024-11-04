import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import { defineConfig,
  createContentLoader,
  loadEnv,
  type HeadConfig,
  type SiteConfig
} from 'vitepress'

const env = loadEnv('', process.cwd())
const hostname: string = env.VITE_HOSTNAME || 'http://localhost:5174'
const planshipAssetsPath: string = env.VITE_PLANSHIP_ASSETS_PATH || ''
const blogAssetsPath: string = env.VITE_BLOG_ASSETS_PATH || `${hostname}/images`

const head: HeadConfig[] = [
  ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
  ['link', { rel: 'manifest', href: '/site.webmanifest' }],
  ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }]
]

// Only include analytics in prod
if (process.env.NODE_ENV !== 'development') {
  head.push([
    'script', {
      async: '',
      src: 'https://metrics.planship.io/script.js',
      'data-website-id': '92f033d7-11a3-4a25-9253-dc451001748d'
    }
  ])
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'Planship Blog',
  description: 'Musings on SaaS pricing, subscription strategy, and code.',
  head,
  sitemap: {
    hostname
  },
  cleanUrls: true,
  buildEnd: async (config: SiteConfig) => {
    // Create RSS feed
    const feed = new Feed({
      title: 'Planship Blog',
      description: 'Musings on SaaS pricing, subscription strategy, and code.',
      id: hostname,
      link: hostname,
      language: 'en',
      image: `${planshipAssetsPath}/planship-logo.png`,
      favicon: `${planshipAssetsPath}/favicon.ico`,
      copyright: '© 2024 Planship'
    })

    let posts = await createContentLoader('articles/*.md', {
      excerpt: true,
      render: true
    }).load()

    posts = posts.filter((article) => !article.frontmatter.draft)
    .sort(
      (a, b) =>
        +new Date(b.frontmatter.date as string) -
        +new Date(a.frontmatter.date as string)
    )

    for (const { url, excerpt, frontmatter, html } of posts) {
      feed.addItem({
        title: frontmatter.title,
        id: `${hostname}${url}`,
        link: `${hostname}${url}`,
        description: excerpt,
        content: html,
        author: [
          {
            name: frontmatter.author,
            email: 'connect@planship.io',
            link: 'https://planship.io'
          }
        ],
        date: frontmatter.date
      })
    }

    writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'Planship » Blog',
    nav: [
      { text: 'Docs', link: 'https://docs.planship.io' },
      { text: 'RSS', link: '/feed.rss' }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/planship' }
    ],
    footer: {
      message: 'SaaS pricing and packaging, optimized.',
      copyright: '© 2024 Bigger Ship LLC'
    }
  },
  transformHead: async ({ pageData }) => {
    // Update head with page-specific props (besides title and description)
    const head: HeadConfig[] = []
    const pathWithoutExtension = pageData.relativePath.substring(0, pageData.relativePath.lastIndexOf('.'))

    // Type
    head.push(['meta', { property: 'og:type', content: 'website' }])

    // Description
    head.push(['meta', { property: 'og:description', content: pageData.description }])

    // URL
    const url = pageData.relativePath !== 'index.md' ?
      `${hostname}/${pathWithoutExtension}`
      : hostname
    head.push(['meta', { property: 'og:url', content: url }])

    // Image
    const coverPath = pageData.relativePath.startsWith('articles/') ?
      `${pathWithoutExtension}/cover.jpg`
      : 'planship-blog-og-landscape.jpg'
    const image = `${blogAssetsPath}/${coverPath}`
    const imageAlt = pageData.frontmatter.cover_alt || 'The Planship boat logo above the text \'The Planship Blog - Musings on SaaS pricing, packaging, and code.\''

    head.push(['meta', { property: 'og:image', content: image }])
    head.push(['meta', { property: 'og:image:alt', content: imageAlt }])
    head.push(['meta', { property: 'twitter:card', content: 'summary_large_image' }])

    return head
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/Footer.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPNavBarTitle\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/NavBarTitle.vue', import.meta.url)
          )
        }
      ]
    }
  }
})
