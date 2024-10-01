import { createContentLoader, loadEnv } from 'vitepress'
import { formatDate, truncateText } from './helpers/helpers'

const env = loadEnv('', process.cwd())
const articleAssetsPath = env.VITE_BLOG_ASSETS_PATH || '/images'

export default createContentLoader('articles/*.md', {
  excerpt: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title,
        url,
        excerpt: truncateText(frontmatter.description, 100),
        date: formatDate(frontmatter.date),
        imageFolder: `${articleAssetsPath}${url}`,
        coverAlt: frontmatter?.cover_alt || `Illustration of ${frontmatter.title}`,
        author: frontmatter.author,
        draft: frontmatter.draft
      }))
      .filter((article) => !article.draft)
      .sort((a, b) => b.date.time - a.date.time)
  }
})
